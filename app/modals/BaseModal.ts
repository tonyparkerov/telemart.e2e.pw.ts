import { Locator, Page } from "@playwright/test";
import { step } from "decorator/step";

export abstract class BaseModal {
  protected page: Page;
  protected abstract modalLocator: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  getModalLocator() {
    return this.modalLocator;
  }

  @step()
  async closeModal() {
    await this.modalLocator.locator("button.btn-close").click();
  }
}
