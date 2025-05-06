import { test, expect } from "@fixtures/fixture";

test("#1.3. Try open wishlist page as not signed in user", async ({ app }) => {
  await app.mainPage.open();
  await app.mainPage.header.clickFavoriteButton();
  await expect(app.mainPage.modals.authModal.getModalLocator()).toBeVisible();
});
