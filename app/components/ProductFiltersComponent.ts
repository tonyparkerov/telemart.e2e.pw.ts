import { BaseComponent } from "./BaseComponent";
import { PriceFilterComponent } from "./filters/PriceFilterComponent";

export class FiltersComponent extends BaseComponent {
  private root = this.page.locator(".form-filter");
  priceFilter = new PriceFilterComponent(this.page);
  private applyFiltersTooltipLocator = this.page.locator(
    ".filter-option-apply"
  );
  private applyFiltersButtonLocator = this.page.locator(
    ".filter-option-apply__btn"
  );
}
