import { Locator } from "@playwright/test";
import { BaseComponent } from "@components";
import { step } from "decorator/step";

export class BasketItemsComponent extends BaseComponent {
  private root: Locator;
  private nameLocator: Locator;
  private priceLocator: Locator;
  private newPriceLocator: Locator;
  private removeButtonLocator: Locator;
  private subtractItemButtonLocator: Locator;
  private plusItemButtonLocator: Locator;
  private itemCounterLocator: Locator;

  constructor(root: Locator) {
    super(root.page());
    this.root = root;
    this.nameLocator = this.root.locator(".thanks-page__product-title");
    this.priceLocator = this.root.locator(
      "[class='thanks-page__product-price-item']"
    );
    this.newPriceLocator = this.root.locator(
      "[class='thanks-page__product-price-item thanks-page__product-price-item_new']"
    );
    this.removeButtonLocator = this.root.locator(
      ".thanks-page__product-btn_delete"
    );
    this.subtractItemButtonLocator = this.root.locator(
      "button.product-counter__btn_subtract"
    );
    this.plusItemButtonLocator = this.root.locator(
      "button.product-counter__btn_plus"
    );
    this.itemCounterLocator = this.root.locator("input.form-control");
  }

  async getName() {
    return await this.nameLocator.innerText();
  }

  @step()
  async plusItem() {
    await this.plusItemButtonLocator.click();
    await this.page.waitForResponse("**/cart/update-product/");
  }

  @step()
  async subtractItem() {
    await this.subtractItemButtonLocator.click();
    await this.page.waitForResponse("**/cart/update-product/");
  }

  async getCount() {
    const count = await this.itemCounterLocator.getAttribute("value");
    if (count) {
      return parseInt(count);
    } else {
      throw new Error("Can't get items count");
    }
  }

  @step()
  async removeItem() {
    await this.removeButtonLocator.click();
    await this.page.waitForResponse("**/cart/update-product/");
  }

  async getPrice() {
    const priceLocatorsCount = await this.priceLocator.count();
    const priceLocator =
      priceLocatorsCount > 0 ? this.priceLocator : this.newPriceLocator;
    const price = await priceLocator.innerText();
    return parseInt(price.replace(/\D/g, ""));
  }
}
