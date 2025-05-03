import { BasePageWithCatalog } from "@pages/BasePageWithCatalog";

export class SearchPage extends BasePageWithCatalog {
  protected path = "/search";
  private searchHeader = this.page.locator(".page-main-header");
  private counter = this.page.locator(".page-main-header__counter");

  async goto(searchQuery: string) {
    const encodedSearchQuery = encodeURIComponent(searchQuery);
    await this.page.goto(`${this.path}/${encodedSearchQuery}`);
  }

  async getSearchHeaderText() {
    const text = await this.searchHeader.innerText();
    return text;
  }

  async getSearchCount() {
    const count = await this.counter.innerText();
    return parseInt(count);
  }
}
