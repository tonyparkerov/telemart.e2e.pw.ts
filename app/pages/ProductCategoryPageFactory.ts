import { Page } from "@playwright/test";
import { PagesWithItemsList } from "./PagesWithItemsList";
import { ProductFiltersComponent } from "@app/components/ProductFiltersComponent";
import { ProductsCategories } from "@types";

export class ProductCategoryPageFactory extends PagesWithItemsList {
  protected path: string;
  filters: ProductFiltersComponent;

  constructor(page: Page, productCategory: ProductsCategories) {
    super(page);
    this.path = `/${productCategory}/`;
    this.filters = new ProductFiltersComponent(this.page);
  }
}
