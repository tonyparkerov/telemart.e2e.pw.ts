import { ProductsCategories } from "@types";
import { test, expect } from "@fixtures/fixture";

const category: ProductsCategories = "consoles";

test.afterEach("Clear wishlist", async ({ signedInApp }) => {
  await signedInApp.wishListPage.clearWishList();
});

test(`#1.1. Add random ${category} item to wishlist`, async ({
  signedInApp,
}) => {
  signedInApp.itemsPage.setCategory(category);
  await signedInApp.itemsPage.open();

  const randomItem = await signedInApp.searchPage.itemsList.getRandomItem();
  const itemCode = await randomItem.getCode();
  const itemName = await randomItem.getName();
  await randomItem.addToFavorites();

  await signedInApp.wishListPage.open();
  await signedInApp.wishListPage.expandList();
  const favoriteItems = await signedInApp.wishListPage.itemsList.getAllItems();

  expect(await favoriteItems[0].getCode()).toBe(itemCode);
  expect(await favoriteItems[0].getName()).toBe(itemName);
});
