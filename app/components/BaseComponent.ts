import { Page } from "@playwright/test";

export default abstract class BaseComponent {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
