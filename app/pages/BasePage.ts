import { Page } from "@playwright/test";
import { Modals } from "@modals";
import { FooterComponent, HeaderComponent } from "@components";
import { step } from "decorator/step";

export abstract class BasePage {
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

  @step()
  async open(resource = "") {
    await this.page.goto(`${this.path}${resource}`);
  }
}
