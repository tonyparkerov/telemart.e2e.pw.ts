import { Page } from "@playwright/test";

export default abstract class BasePage {
  protected page: Page;
  protected abstract path: string;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(`${this.path}`);
  }
}
