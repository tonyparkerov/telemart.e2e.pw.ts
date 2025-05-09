import { SocialNetwork } from "@types";
import { BaseComponent } from "@components";
import { step } from "decorator/step";

export class FooterComponent extends BaseComponent {
  private root = this.page.locator(".footer");
  private subscribeEmailInputLocator = this.root.locator(
    "input#subscribeform-email"
  );
  private subscribeButtonLocator = this.root.locator(
    "button.subscribe-block__btn"
  );
  private getSocialLocator = (socialNetwork: SocialNetwork) =>
    this.root.locator(`.footer-social__item_${socialNetwork}`);

  @step()
  async subscribeToNewsletter(email: string) {
    const responsePromise = this.page.waitForResponse("**/site/subscribe/");
    await this.subscribeEmailInputLocator.fill(email);
    await this.subscribeButtonLocator.click();
    const response = await responsePromise;
    return await response.json();
  }

  @step()
  async openSocial(socialNetwork: SocialNetwork) {
    const pagePromise = this.page.waitForEvent("popup");
    await this.getSocialLocator(socialNetwork).click();
    const newTab = await pagePromise;
    return newTab;
  }
}
