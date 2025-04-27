import BaseComponent from "../../components/BaseComponent";

export default class SubscribeBlock extends BaseComponent {
  private root = this.page.locator(".subscribe-block");
  private emailInputLocator = this.root.locator("input#subscribeform-email");
  private subscribeButtonLocator = this.root.locator(
    "button.subscribe-block__btn"
  );

  async subscribeToNewsletter(email: string) {
    await this.emailInputLocator.fill(email);
    await this.subscribeButtonLocator.click();
  }
}
