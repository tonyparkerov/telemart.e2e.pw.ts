import { test, expect } from "@fixtures/fixture";

test("Wishlist default state", async ({ signedInApp, page }) => {
  // await signedInApp.wishListPage.goto();
  // const wishListDefaultTitle = await signedInApp.wishListPage.getListTitle();
  // const wishListItemsCount = await signedInApp.wishListPage.getItemsCount();

  // expect(wishListDefaultTitle).toBe("Мій список");
  // expect(wishListItemsCount).toBe(0);
  await page.goto("/consoles/");
  const allItems = await signedInApp.catalogList.getAllItems();
  const firstItemName = await allItems[0].getItemName();
  const firstItemCode = await allItems[0].getItemCode();
  await allItems[0].addToFavorites();

  await signedInApp.wishListPage.goto();
  await signedInApp.wishListPage.expandList();
  const favoriteItems = await signedInApp.catalogList.getAllItems();

  expect(await favoriteItems[0].getItemCode()).toBe(firstItemCode);
  expect(await favoriteItems[0].getItemName()).toBe(firstItemName);

  await favoriteItems[0].removeFromFavorites();
});
