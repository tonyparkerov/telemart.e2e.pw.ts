import Modals from "@modals/Modals";
import { FooterComponent, HeaderComponent } from "@components";
import { Page } from "@playwright/test";

export default abstract class BasePage {
  protected page: Page;
  protected abstract path: string;
  header: HeaderComponent;
  footer: FooterComponent;
  modals: Modals;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderComponent(this.page);
    this.footer = new FooterComponent(this.page);
    this.modals = new Modals(this.page);
  }

  async goto(resource = "") {
    await this.page.goto(`${this.path}${resource}`);
  }
}
