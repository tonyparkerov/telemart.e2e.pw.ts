import { test, expect } from "@fixtures/fixture";

test("#6.3. Remove item from basket with 2 products", async ({
  signedInApp,
}) => {
  signedInApp.itemsPage.setCategory("consoles");
  await signedInApp.itemsPage.open();
  const randomConsole = await signedInApp.itemsPage.itemsList.getRandomItem();
  await randomConsole.addToCart();

  signedInApp.itemsPage.setCategory("pc");
  await signedInApp.itemsPage.open();
  const randomPC = await signedInApp.itemsPage.itemsList.getRandomItem();
  await randomPC.addToCart();

  const basketItems =
    await signedInApp.itemsPage.modals.basketModal.getAllItems();
  await basketItems[0].removeItem();

  const updatedBasketItems =
    await signedInApp.itemsPage.modals.basketModal.getAllItems();

  expect(updatedBasketItems.length).toBe(1);
  expect(
    await signedInApp.itemsPage.modals.basketModal.getProductsCount()
  ).toBe(1);
});
