import { Page } from "@playwright/test";
import MainPage from "@pages/MainPage";
import { Cookie } from "@types";
import WishListPage from "@pages/WishListPage";
import { SearchPage } from "./pages/SearchPage";

export default class Application {
  private page: Page;
  mainPage: MainPage;
  wishListPage: WishListPage;
  searchPage: SearchPage;

  constructor(page: Page) {
    this.page = page;
    this.mainPage = new MainPage(this.page);
    this.wishListPage = new WishListPage(this.page);
    this.searchPage = new SearchPage(this.page);
  }

  waitForResponse(url: string) {
    return this.page.waitForResponse(url);
  }

  async setCookies(cookie: Cookie[]) {
    await this.page.context().addCookies(cookie);
  }

  async getCookies() {
    await this.page.context().cookies();
  }
}
