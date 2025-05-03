import { SocialNetwork } from "@types";
import { BaseComponent } from "@components";

export default class CenterBlock extends BaseComponent {
  private root = this.page.locator(".footer-center");
  private hotlineRateLocator = this.root.locator(".hotline-rating-informer");
  private PCConfiguratorButtonLocator = this.root.locator(
    ".footer-btn-configurator"
  );

  async openPCConfigurator() {
    await this.PCConfiguratorButtonLocator.click();
  }

  private getSocialLocator = (socialNetwork: SocialNetwork) =>
    this.root.locator(`.footer-social__item_${socialNetwork}`);

  async getSocialLink(socialNetwork: SocialNetwork) {
    const socialLink = await this.getSocialLocator(socialNetwork).getAttribute(
      "href"
    );
    if (socialLink) {
      return socialLink;
    } else throw new Error("Can't get link from href attribute");
  }

  async openSocial(socialNetwork: SocialNetwork) {
    await this.getSocialLocator(socialNetwork).click();
    const pagePromise = this.page.waitForEvent("popup");
    const newTab = await pagePromise;
    return newTab;
  }
}
