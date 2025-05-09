import { BasePage } from "@pages/BasePage";

export class OrderPage extends BasePage {
  protected path = "/order/";
  private lastNameInputLocator = this.page.locator("#customerLastname");
  private firstNameInputLocator = this.page.locator("#customerFirstname");
  private middleNameInputLocator = this.page.locator("#customerMiddlename");
  private phoneInputLocator = this.page.locator("#customerPhone");

  async getInputPrefilledValue(
    inputField: "lastName" | "firstName" | "middleName" | "phone"
  ) {
    const prefilledValue = await this[`${inputField}InputLocator`].getAttribute(
      "value"
    );
    return prefilledValue;
  }
}
