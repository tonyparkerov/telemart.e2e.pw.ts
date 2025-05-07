import { test, expect } from "@fixtures/fixture";
import { getRandomMinMax } from "utils/utils";

test("#5.1. Set random price range for pc", async ({ app }) => {
  await app.itemsPage.open();
  const minPrice = await app.itemsPage.filters.priceFilter.getMinPrice();
  const maxPrice = await app.itemsPage.filters.priceFilter.getMaxPrice();
  const randMinMaxPrice = getRandomMinMax(minPrice, maxPrice);
  await app.itemsPage.filters.priceFilter.filterByPrice(randMinMaxPrice);
  const allItems = await app.itemsPage.itemsList.getAllItems();
  for (const item of allItems) {
    const itemPrice = await item.getPrice();
    expect(
      itemPrice >= randMinMaxPrice.min && itemPrice <= randMinMaxPrice.max
    ).toBeTruthy();
  }
});
