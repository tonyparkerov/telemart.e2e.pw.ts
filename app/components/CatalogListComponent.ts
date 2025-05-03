import { BaseComponent, ProductItemComponent } from "@components";
import { expect } from "@playwright/test";

export class CatalogListComponent extends BaseComponent {
  private itemLocator = this.page.locator(".product-item");

  async getAllItems() {
    await expect(this.itemLocator).not.toHaveCount(0);
    const allItemsLocators = await this.itemLocator.all();
    const result = [];
    for (const locator of allItemsLocators) {
      result.push(new ProductItemComponent(locator));
    }
    return result;
  }
}
