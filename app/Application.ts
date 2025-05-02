import { Page } from "@playwright/test";
import FooterComponent from "@components/FooterComponent";
import MainPage from "@pages/MainPage";
import Modals from "@modals/Modals";
import HeaderComponent from "@components/HeaderComponent";
import { Cookie } from "@types";
import WishListPage from "@pages/WishListPage";
import CatalogListComponent from "./components/CatalogListComponent";

export default class Application {
  private page: Page;
  header: HeaderComponent;
  footer: FooterComponent;
  catalogList: CatalogListComponent;
  modals: Modals;
  mainPage: MainPage;
  wishListPage: WishListPage;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderComponent(this.page);
    this.footer = new FooterComponent(this.page);
    this.catalogList = new CatalogListComponent(this.page);
    this.modals = new Modals(this.page);
    this.mainPage = new MainPage(this.page);
    this.wishListPage = new WishListPage(this.page);
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
