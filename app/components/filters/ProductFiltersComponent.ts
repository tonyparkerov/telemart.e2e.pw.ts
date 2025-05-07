import { step } from "decorator/step";
import {
  BaseComponent,
  CheckBoxFilterComponent,
  PriceFilterComponent,
} from "@components";

export class FiltersComponent extends BaseComponent {
  private root = this.page.locator(".form-filter");
  priceFilter = new PriceFilterComponent(this.page);
  recommendationsFilter = new CheckBoxFilterComponent(
    this.page,
    "Рекомендуємо"
  );
  manufacturerFilter = new CheckBoxFilterComponent(this.page, "Виробник");
  private applyFiltersTooltipLocator = this.page.locator(
    ".filter-option-apply"
  );
  private applyFiltersButtonLocator = this.page.locator(
    ".filter-option-apply__btn"
  );

  @step()
  async applyFilters() {
    await this.applyFiltersButtonLocator.click();
  }
}
