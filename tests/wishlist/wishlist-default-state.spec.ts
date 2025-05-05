import { test, expect } from "@fixtures/fixture";

test("Add random item to favorites", async ({ signedInApp }) => {
  await signedInApp.goto("/consoles/");
  const randomItem = await signedInApp.searchPage.itemsList.getRandomItem();
  const itemName = await randomItem.getName();
  const itemCode = await randomItem.getCode();
  await randomItem.addToFavorites();

  await signedInApp.wishListPage.goto();
  await signedInApp.wishListPage.expandList();
  const favoriteItems = await signedInApp.wishListPage.itemsList.getAllItems();

  expect(await favoriteItems[0].getCode()).toBe(itemName);
  expect(await favoriteItems[0].getName()).toBe(itemCode);

  await favoriteItems[0].removeFromFavorites();
});
