import { APIRequestContext } from "@playwright/test";

export class CartController {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async addProductToCart(productId: string, quantity = 1) {
    const requestBody = {
      product_id: productId,
      quantity: quantity,
      parent_id: null,
      assembly_id: null,
      services: [],
      nodata: false,
    };

    const response = await this.request.post("/cart/update-product/", {
      data: requestBody,
    });
    return response;
  }

  async removeProductFromCart(productId: string) {
    const response = await this.addProductToCart(productId, 0);
    return response;
  }
}
