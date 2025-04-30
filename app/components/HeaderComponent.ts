import BaseComponent from "./BaseComponent";

export default class HeaderComponent extends BaseComponent {
  private root = this.page.locator("header.header");
  private searchInputLocator = this.root.locator("input[name='search_que']");
  private submitSearchButton = this.root.locator("button.search__btn");
  private userButtonLocator = this.root.locator("button.btn_user").first();
  private favoriteButtonLocator = this.root.locator("a.btn_favorite");
  private comparisonButtonLocator = this.root.locator("a.btn_comparison");
  private basketButtonLocator = this.root.locator("button.header-basket");

  async openAuthModal() {
    await this.userButtonLocator.click();
  }
}
