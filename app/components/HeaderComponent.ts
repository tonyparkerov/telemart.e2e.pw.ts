import { BaseComponent } from "@components";
import { step } from "decorator/step";

export class HeaderComponent extends BaseComponent {
  private root = this.page.locator(".header-center");
  private searchInputLocator = this.root.locator("input[name='search_que']");
  private submitSearchButton = this.root.locator("button.search__btn");
  private userButtonLocator = this.root.locator("button.btn_user").first();
  private favoriteButtonLocator = this.root.locator("a.btn_favorite");
  private comparisonButtonLocator = this.root.locator("a.btn_comparison");
  private basketButtonLocator = this.root.locator("button.header-basket");

  @step()
  async clickUserProfileButton() {
    await this.userButtonLocator.click();
  }

  @step()
  async clickFavoriteButton() {
    await this.favoriteButtonLocator.click();
  }

  @step()
  async searchFor(searchQuery: string) {
    const encodedSearchQuery = encodeURIComponent(searchQuery);
    await this.searchInputLocator.fill(searchQuery);
    await this.submitSearchButton.click();
    await this.page.waitForURL(`**/search/${encodedSearchQuery}/`);
  }
}
