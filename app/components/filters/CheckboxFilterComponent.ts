import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "../BaseComponent";

export class CheckBoxFilterComponent extends BaseComponent {
  private root: Locator;
  private checkboxLocator: Locator;

  constructor(page: Page, filterHeader: string) {
    super(page);
    this.root = this.page
      .locator(
        `//*[contains(text(), '${filterHeader}')]/parent::*[@class='filter-item']`
      )
      .first();
    this.checkboxLocator = this.root.locator(".filter-list-opts__item");
  }

  async getAllCheckboxValues() {
    const locators = await this.checkboxLocator.all();
    const result: string[] = [];
    for (const checkbox of locators) {
      const value = await checkbox.innerText();
      result.push(value);
    }
    return result;
  }

  async selectCheckbox(value: string) {
    await this.root.getByText(value).click();
  }

  async selectRandomCheckbox() {
    const values = await this.getAllCheckboxValues();
    const randomIndex = Math.floor(Math.random() * values.length);
    const randomValue = values[randomIndex];
    await this.selectCheckbox(randomValue);
    return randomValue;
  }
}
