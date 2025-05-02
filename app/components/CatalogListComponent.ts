import BaseComponent from "./BaseComponent";
import ProductItemComponent from "./ProductItemComponent";

export default class CatalogListComponent extends BaseComponent {
  private itemLocator = this.page.locator(".product-item");

  async getAllItems() {
    const allItemsLocators = await this.itemLocator.all();
    const result = [];
    for (const locator of allItemsLocators) {
      result.push(new ProductItemComponent(locator));
    }
    return result;
  }
}
