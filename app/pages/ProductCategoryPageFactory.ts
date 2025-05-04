import { Page } from "@playwright/test";
import { BasePageWithCatalog } from "./BasePageWithCatalog";
import { ProductFiltersComponent } from "@app/components/ProductFiltersComponent";
import { ProductsCategories } from "@types";

export class ProductCategoryPageFactory extends BasePageWithCatalog {
  protected path: string;
  filters: ProductFiltersComponent;

  constructor(page: Page, productCategory: ProductsCategories) {
    super(page);
    this.path = `/${productCategory}/`;
    this.filters = new ProductFiltersComponent(this.page);
  }
}
