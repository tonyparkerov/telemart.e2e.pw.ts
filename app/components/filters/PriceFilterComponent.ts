import { expect } from "@playwright/test";
import { BaseComponent } from "@components";
import { step } from "decorator/step";

export class PriceFilterComponent extends BaseComponent {
  private root = this.page.locator(".filter-item__body#filterItem-1");
  private minPriceInputLocator = this.root.locator("#filterRangeSliderLower");
  private maxPriceInputLocator = this.root.locator("#filterRangeSliderUpper");
  private submitPriceFilterButtonLocator = this.root.locator(
    "button.filter-range-slider__btn"
  );

  async getMinPrice() {
    const minPrice = await this.minPriceInputLocator.getAttribute(
      `data-price_min`
    );
    if (minPrice) {
      return parseInt(minPrice);
    } else {
      throw new Error(`Min price not found`);
    }
  }

  async getMaxPrice() {
    const maxPrice = await this.maxPriceInputLocator.getAttribute(
      `data-price_max`
    );
    if (maxPrice) {
      return parseInt(maxPrice);
    } else {
      throw new Error(`Max price not found`);
    }
  }

  @step()
  async fillMinPriceInput(value: number) {
    await this.minPriceInputLocator.fill(value.toString());
  }

  @step()
  async fillMaxPriceInput(value: number) {
    await this.maxPriceInputLocator.fill(value.toString());
  }

  @step()
  async filterByPrice(options?: { min?: number; max?: number }) {
    if (options) {
      if (options.min) await this.fillMinPriceInput(options.min);
      if (options.max) await this.fillMaxPriceInput(options.max);
    }
    await this.submitPriceFilterButtonLocator.click();
    await expect(this.page.locator("#catalogList")).toBeVisible();
  }
}
