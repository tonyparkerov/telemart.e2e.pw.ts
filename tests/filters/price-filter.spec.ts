import { test, expect } from "@fixtures/fixture";
import { getRandomMinMax } from "utils/utils";

test("#5.1. Set random price range for pc", async ({ signedInApp }) => {
  await signedInApp.itemsPage.open();
  const minPrice =
    await signedInApp.itemsPage.filters.priceFilter.getMinPrice();
  const maxPrice =
    await signedInApp.itemsPage.filters.priceFilter.getMaxPrice();
  const randMinMaxPrice = getRandomMinMax(minPrice, maxPrice);
  await signedInApp.itemsPage.filters.priceFilter.filterByPrice(
    randMinMaxPrice
  );
  const allItems = await signedInApp.itemsPage.itemsList.getAllItems();
  for (const item of allItems) {
    const itemPrice = await item.getPrice();
    expect(
      itemPrice >= randMinMaxPrice.min && itemPrice <= randMinMaxPrice.max
    ).toBeTruthy();
  }
});
