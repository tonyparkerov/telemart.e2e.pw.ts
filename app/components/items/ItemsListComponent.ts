import { BaseComponent, ItemComponent } from "@components";
import { faker } from "@faker-js/faker";

export class ItemsListComponent extends BaseComponent {
  private itemLocator = this.page.locator(".product-item");

  async getAllItems() {
    await this.itemLocator.first().waitFor({ state: "visible" });
    const allItemsLocators = await this.itemLocator.all();
    const result = [];
    for (const locator of allItemsLocators) {
      result.push(new ItemComponent(locator));
    }
    return result;
  }

  async getRandomItem() {
    const allItemsLocators = await this.itemLocator.all();
    const randomArrIndex = faker.number.int({
      max: allItemsLocators.length - 1,
    });
    await allItemsLocators[randomArrIndex].waitFor({ state: "visible" });
    return new ItemComponent(allItemsLocators[randomArrIndex]);
  }
}
