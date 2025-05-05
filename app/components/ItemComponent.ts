import type { Locator } from "@playwright/test";
import { BaseComponent } from "@components";

export class ItemComponent extends BaseComponent {
  private root: Locator;
  private label: Locator;
  private nameLocator: Locator;
  private codeLocator: Locator;
  private addToFavoritesButtonLocator: Locator;
  private removeFromFavoritesButtonLocator: Locator;
  private priceLocator: Locator;
  private addToCartButtonLocator: Locator;

  constructor(root: Locator) {
    super(root.page());
    this.root = root;
    this.label = this.page.locator(".product-label");
    this.nameLocator = this.root.locator(".product-item__title");
    this.codeLocator = this.root.locator(".product-item__code > span");
    this.addToFavoritesButtonLocator = this.root.locator(
      "button.hardevel_favorite_add"
    );
    this.removeFromFavoritesButtonLocator = this.root.locator(
      "button.hardevel_wish_delete"
    );
    this.priceLocator = this.root.locator(
      ".product-item-cost-column > .product-cost"
    );
    this.addToCartButtonLocator = this.root.locator("button.add-to-cart");
  }

  async getLabelText() {
    return await this.label.innerText();
  }

  async getName() {
    return await this.nameLocator.innerText();
  }

  async getCode() {
    return await this.codeLocator.innerText();
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

  async getPrice() {
    return await this.priceLocator.innerText();
  }
}
