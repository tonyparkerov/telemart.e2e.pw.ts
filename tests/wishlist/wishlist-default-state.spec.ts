import { test, expect } from "@fixtures/fixture";

test("Add item to favorites", async ({ signedInApp }) => {
  await signedInApp.goto("/consoles/");
  const allItems = await signedInApp.searchPage.catalogList.getAllItems();
  const firstItemName = await allItems[0].getItemName();
  const firstItemCode = await allItems[0].getItemCode();
  await allItems[0].addToFavorites();

  await signedInApp.wishListPage.goto();
  await signedInApp.wishListPage.expandList();
  const favoriteItems =
    await signedInApp.wishListPage.catalogList.getAllItems();

  expect(await favoriteItems[0].getItemCode()).toBe(firstItemCode);
  expect(await favoriteItems[0].getItemName()).toBe(firstItemName);

  await favoriteItems[0].removeFromFavorites();
});
