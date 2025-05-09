import { test, expect } from "@fixtures/fixture";

test(`#7. Order user data inputs prefilled with signed in user`, async ({
  signedInApp,
}) => {
  await signedInApp.userProfilePage.open();
  const userData = await signedInApp.userProfilePage.getUserData();

  signedInApp.itemsPage.setCategory("monitors");
  await signedInApp.itemsPage.open();
  const randomItem =
    await signedInApp.searchPage.itemsList.getRandomAvailableItem();
  await randomItem.addToCart();

  await signedInApp.orderPage.open();
  expect(userData.lastName).toBe(
    await signedInApp.orderPage.getInputPrefilledValue("lastName")
  );
  expect(userData.firstName).toBe(
    await signedInApp.orderPage.getInputPrefilledValue("firstName")
  );
  expect(userData.middleName).toBe(
    await signedInApp.orderPage.getInputPrefilledValue("middleName")
  );
  expect(userData.phone).toBe(
    await signedInApp.orderPage.getInputPrefilledValue("phone")
  );
});
