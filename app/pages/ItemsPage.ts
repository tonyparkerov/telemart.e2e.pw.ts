import { Page } from "@playwright/test";
import { ProductsCategories } from "@types";
import { PagesWithItemsList } from "@pages/PagesWithItemsList";

export class ItemsPage extends PagesWithItemsList {
  path: string;
  private category: ProductsCategories;

  constructor(page: Page, category: ProductsCategories = "pc") {
    super(page);
    this.category = category;
    this.path = `/${this.category}/`;
  }

  setCategory(category: ProductsCategories) {
    this.category = category;
    this.path = `/${category}/`;
  }

  getCurrentCategory(): ProductsCategories {
    return this.category;
  }
}
