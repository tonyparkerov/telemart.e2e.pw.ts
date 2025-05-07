import { test, expect } from "@fixtures/fixture";

test("#6.1. Add random iphone product to basket", async ({ signedInApp }) => {
  signedInApp.itemsPage.setCategory("iphone");
  await signedInApp.itemsPage.open();
  const randomItem = await signedInApp.itemsPage.itemsList.getRandomItem();
  await randomItem.addToCart();
  const basketItem = (
    await signedInApp.itemsPage.modals.basketModal.getAllItems()
  )[0];

  expect(
    await signedInApp.itemsPage.modals.basketModal.getProductsCount()
  ).toBe(1);
  expect(await randomItem.getName()).toBe(await basketItem.getName());
  expect(await basketItem.getCount()).toBe(1);
});
