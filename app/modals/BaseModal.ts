import { Locator, Page } from "@playwright/test";

export default abstract class BaseModal {
  protected page: Page;
  protected abstract modalLocator: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  getModalLocator() {
    return this.modalLocator;
  }
}
