import { faker } from "@faker-js/faker";
import { test, expect } from "@fixtures/fixture";

test("#1.2. Rename wishlist", async ({ signedInApp }) => {
  const newListTitle = faker.word.noun();

  await signedInApp.wishListPage.open();
  await signedInApp.wishListPage.renameWishList(newListTitle);

  expect(await signedInApp.wishListPage.getListTitle()).toBe(newListTitle);
});
