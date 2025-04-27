import { Page } from "@playwright/test";
import FooterComponent from "./components/FooterComponent";
import MainPage from "./pages/MainPage";
import Modals from "./modals/Modals";

export default class Application {
  private page: Page;
  footer: FooterComponent;
  modals: Modals;
  mainPage: MainPage;

  constructor(page: Page) {
    this.page = page;
    this.footer = new FooterComponent(this.page);
    this.modals = new Modals(this.page);
    this.mainPage = new MainPage(this.page);
  }

  waitForResponse(url: string) {
    return this.page.waitForResponse(url);
  }
}
