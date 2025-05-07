import { test, expect } from "@fixtures/fixture";

test("#6.1. Add random iphone product to basket", async ({ app }) => {
  await app.itemsPage.open();
  const randomItem = await app.itemsPage.itemsList.getRandomItem();
  await randomItem.addToCart();
  const basketItem = (await app.itemsPage.modals.basketModal.getAllItems())[0];

  expect(await app.itemsPage.modals.basketModal.getProductsCount()).toBe(1);
  expect(await randomItem.getName()).toBe(await basketItem.getName());
  expect(await basketItem.getCount()).toBe(1);
});
