import { BaseComponent, ItemComponent } from "@components";
import { faker } from "@faker-js/faker";
import { expect } from "@playwright/test";

export class ItemsListComponent extends BaseComponent {
  private itemLocator = this.page.locator(".product-item");

  async getAllItems() {
    await expect(this.itemLocator).not.toHaveCount(0);
    const allItemsLocators = await this.itemLocator.all();
    const result = [];
    for (const locator of allItemsLocators) {
      result.push(new ItemComponent(locator));
    }
    return result;
  }

  async getRandomItem() {
    await expect(this.itemLocator).not.toHaveCount(0);
    const allItemsLocators = await this.itemLocator.all();
    const randomArrIndex = faker.number.int({
      max: allItemsLocators.length - 1,
    });
    return new ItemComponent(allItemsLocators[randomArrIndex]);
  }
}
