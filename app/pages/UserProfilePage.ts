import { UserData } from "@types";
import { BasePage } from "@pages/BasePage";

export class UserProfilePage extends BasePage {
  protected path = "/user/default/index/";
  private personalDataLocator = this.page.locator("div#profileView");

  async getUserData() {
    const userData: UserData = {};
    const allValuesLocators = await this.personalDataLocator
      .locator(".my-data-item__value")
      .all();
    userData.lastName = await allValuesLocators[0].innerText();
    userData.firstName = await allValuesLocators[1].innerText();
    userData.middleName = await allValuesLocators[2].innerText();
    userData.email = await allValuesLocators[4].innerText();
    userData.phone = await allValuesLocators[5].innerText();
    return userData;
  }
}
