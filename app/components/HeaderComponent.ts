import { BaseComponent } from "@components";

export class HeaderComponent extends BaseComponent {
  private root = this.page.locator(".header-center");
  private searchInputLocator = this.root.locator("input[name='search_que']");
  private submitSearchButton = this.root.locator("button.search__btn");
  private userButtonLocator = this.root.locator("button.btn_user").first();
  private favoriteButtonLocator = this.root.locator("a.btn_favorite");
  private comparisonButtonLocator = this.root.locator("a.btn_comparison");
  private basketButtonLocator = this.root.locator("button.header-basket");

  async clickUserProfileButton() {
    await this.userButtonLocator.click();
  }

  async clickFavoriteButton() {
    await this.favoriteButtonLocator.click();
  }

  async searchFor(searchQuery: string) {
    await this.searchInputLocator.fill(searchQuery);
    await this.submitSearchButton.click();
  }
}
