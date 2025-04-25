import BaseComponent from "../BaseComponent";

enum SocialNetworks {
  Facebook = "fb",
  Instagram = "in",
  TikTok = "tiktok",
  YouTube = "youtube",
  Telegram = "tg",
  Discord = "discord",
}

export default class CenterBlock extends BaseComponent {
  private root = this.page.locator(".footer-center");
  private hotlineRateLocator = this.root.locator(".hotline-rating-informer");
  private PCConfiguratorButtonLocator = this.root.locator(
    ".footer-btn-configurator"
  );

  async openPCConfigurator() {
    await this.PCConfiguratorButtonLocator.click();
  }

  private getSocialLocator = (socialNetwork: SocialNetworks) =>
    this.root.locator(`.footer-social__item_${socialNetwork}`);

  private getSocialLink = async (socialNetwork: SocialNetworks) =>
    await this.getSocialLocator(socialNetwork).getAttribute("href");

  private async openSocial(socialNetwork: SocialNetworks) {
    await this.getSocialLocator(socialNetwork).click();
  }
}
