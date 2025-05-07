import { BaseComponent } from "./BaseComponent";
import { CheckBoxFilterComponent } from "./filters/CheckboxFilterComponent";
import { PriceFilterComponent } from "./filters/PriceFilterComponent";

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

  async applyFilters() {
    await this.applyFiltersButtonLocator.click();
  }
}
