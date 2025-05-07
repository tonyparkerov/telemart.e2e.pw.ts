import { test, expect } from "@fixtures/fixture";

test("#6.2. Increase item count in basket", async ({ signedInApp }) => {
  signedInApp.itemsPage.setCategory("iphone");
  await signedInApp.itemsPage.open();
  const randomItem = await signedInApp.itemsPage.itemsList.getRandomItem();
  const itemPrice = await randomItem.getPrice();

  await randomItem.addToCart();

  const basketItem = (
    await signedInApp.itemsPage.modals.basketModal.getAllItems()
  )[0];
  await basketItem.plusItem();

  expect(await basketItem.getCount()).toBe(2);
  expect(await signedInApp.itemsPage.modals.basketModal.getOrderPrice()).toBe(
    itemPrice * 2
  );
});
