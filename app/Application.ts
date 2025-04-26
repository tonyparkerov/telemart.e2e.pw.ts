import { Page } from "@playwright/test";
import FooterComponent from "./components/FooterComponent";
import MainPage from "./pages/MainPage";

export default class Application {
  private page: Page;
  footer: FooterComponent;
  mainPage: MainPage;

  constructor(page: Page) {
    this.page = page;
    this.footer = new FooterComponent(this.page);
    this.mainPage = new MainPage(this.page);
  }
}