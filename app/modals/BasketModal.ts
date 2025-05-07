import { BasketItemsComponent } from "@components";
import { BaseModal } from "@modals";
import { step } from "decorator/step";

export class BasketModal extends BaseModal {
  protected modalLocator = this.page.locator(
    ".checkoutEdit .modal-dialog .modal-content"
  );
  private productsCountLocator = this.modalLocator.locator(
    ".basket-products-count"
  );
  private orderPriceLocator = this.modalLocator.locator(
    ".thanks-page__kit-price"
  );
  private placeOrderButtonLocator = this.modalLocator.locator(".btn-primary");
  private productItemLocator = this.modalLocator.locator(
    "//*[@class='thanks-page__product-column']/parent::*[@class='thanks-page__product-row']"
  );

  async getAllItems() {
    const allItemsLocators = await this.productItemLocator.all();
    const result = [];
    for (const locator of allItemsLocators) {
      result.push(new BasketItemsComponent(locator));
    }
    return result;
  }

  async getProductsCount() {
    const count = await this.productsCountLocator.innerText();
    return parseInt(count.replace(/\D/g, ""));
  }

  async getOrderPrice() {
    const price = await this.orderPriceLocator.innerText();
    return parseInt(price.replace(/\D/g, ""));
  }

  @step()
  async placeOrder() {
    await this.placeOrderButtonLocator.click();
  }
}
