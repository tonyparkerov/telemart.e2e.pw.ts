import { test, expect } from "@fixtures/fixture";

test("Add random console item to favorites", async ({ signedInApp }) => {
  signedInApp.itemsPage.setCategory("iphone");
  await signedInApp.itemsPage.goto();

  const randomItem = await signedInApp.searchPage.itemsList.getRandomItem();
  const itemCode = await randomItem.getCode();
  const itemName = await randomItem.getName();
  await randomItem.addToFavorites();

  await signedInApp.wishListPage.goto();
  await signedInApp.wishListPage.expandList();
  const favoriteItems = await signedInApp.wishListPage.itemsList.getAllItems();

  expect(await favoriteItems[0].getCode()).toBe(itemCode);
  expect(await favoriteItems[0].getName()).toBe(itemName);

  await favoriteItems[0].removeFromFavorites();
});
