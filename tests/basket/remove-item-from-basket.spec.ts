import { test, expect } from "@fixtures/fixture";

test("#6.3. Remove item from basket with 2 products", async ({ app }) => {
  app.itemsPage.setCategory("consoles");
  await app.itemsPage.open();
  const randomConsole = await app.itemsPage.itemsList.getRandomItem();
  await randomConsole.addToCart();

  app.itemsPage.setCategory("pc");
  await app.itemsPage.open();
  const randomPC = await app.itemsPage.itemsList.getRandomItem();
  await randomPC.addToCart();

  const basketItems = await app.itemsPage.modals.basketModal.getAllItems();
  await basketItems[0].removeItem();

  const updatedBasketItems =
    await app.itemsPage.modals.basketModal.getAllItems();

  expect(updatedBasketItems.length).toBe(1);
  expect(await app.itemsPage.modals.basketModal.getProductsCount()).toBe(1);
});
