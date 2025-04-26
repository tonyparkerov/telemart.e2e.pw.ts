import BaseComponent from "../BaseComponent";

type SocialNetwork = "fb" | "in" | "tiktok" | "youtube" | "tg" | "discord";

export default class CenterBlock extends BaseComponent {
  private root = this.page.locator(".footer-center");
  private hotlineRateLocator = this.root.locator(".hotline-rating-informer");
  private PCConfiguratorButtonLocator = this.root.locator(
    ".footer-btn-configurator"
  );

  async openPCConfigurator() {
    await this.PCConfiguratorButtonLocator.click();
  }

  getSocialLocator = (socialNetwork: SocialNetwork) =>
    this.root.locator(`.footer-social__item_${socialNetwork}`);

  private getSocialLink = async (socialNetwork: SocialNetwork) =>
    await this.getSocialLocator(socialNetwork).getAttribute("href");

  private async openSocial(socialNetwork: SocialNetwork) {
    await this.getSocialLocator(socialNetwork).click();
  }
}
