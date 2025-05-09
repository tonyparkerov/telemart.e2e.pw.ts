import { test, expect } from "@fixtures/fixture";

test("#6.2. Increase item count in basket", async ({ app }) => {
  app.itemsPage.setCategory("iphone");
  await app.itemsPage.open();
  const randomItem = await app.itemsPage.itemsList.getRandomAvailableItem();
  const itemPrice = await randomItem.getPrice();

  await randomItem.addToCart();

  const basketItem = (await app.itemsPage.modals.basketModal.getAllItems())[0];
  await basketItem.plusItem();

  expect(await basketItem.getCount()).toBe(2);
  expect(await app.itemsPage.modals.basketModal.getOrderPrice()).toBe(
    itemPrice * 2
  );
});
