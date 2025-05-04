import type { Locator } from "@playwright/test";
import { BaseComponent } from "@components";

export class ProductItemComponent extends BaseComponent {
  private root: Locator;
  private label: Locator;
  private itemNameLocator: Locator;
  private itemCodeLocator: Locator;
  private addToFavoritesButtonLocator: Locator;
  private removeFromFavoritesButtonLocator: Locator;
  private itemPriceLocator: Locator;
  private addToCartButtonLocator: Locator;

  constructor(root: Locator) {
    super(root.page());
    this.root = root;
    this.label = this.page.locator(".product-label");
    this.itemNameLocator = this.root.locator(".product-item__title");
    this.itemCodeLocator = this.root.locator(".product-item__code > span");
    this.addToFavoritesButtonLocator = this.root.locator(
      "button.hardevel_favorite_add"
    );
    this.removeFromFavoritesButtonLocator = this.root.locator(
      "button.hardevel_wish_delete"
    );
    this.itemPriceLocator = this.root.locator(
      ".product-item-cost-column > .product-cost"
    );
    this.addToCartButtonLocator = this.root.locator("button.add-to-cart");
  }

  async getLabelText() {
    return await this.label.innerText();
  }

  async getItemName() {
    return await this.itemNameLocator.innerText();
  }

  async getItemCode() {
    return await this.itemCodeLocator.innerText();
  }

  async addToFavorites() {
    await this.addToFavoritesButtonLocator.click();
  }

  async removeFromFavorites() {
    await this.removeFromFavoritesButtonLocator.click();
  }

  async addToCart() {
    await this.addToCartButtonLocator.click();
  }

  async getItemPrice() {
    return await this.itemPriceLocator.innerText();
  }
}
