import type { Locator } from "@playwright/test";
import { BaseComponent } from "@components";
import { step } from "decorator/step";

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
    this.label = this.root.locator(".product-label");
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

  @step()
  async addToFavorites() {
    await this.addToFavoritesButtonLocator.click();
  }

  @step()
  async removeFromFavorites() {
    await this.removeFromFavoritesButtonLocator.click();
  }

  @step()
  async addToCart() {
    await this.addToCartButtonLocator.click();
    await this.page.waitForResponse("**/cart/update-product/");
  }

  async getPrice() {
    const price = await this.priceLocator.innerText();
    return parseInt(price.replace(/\D/g, ""));
  }
}
