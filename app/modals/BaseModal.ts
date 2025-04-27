import { Page } from "@playwright/test";

export default abstract class BaseModal {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
