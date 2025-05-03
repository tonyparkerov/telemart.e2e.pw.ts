import { test, expect } from "@fixtures/fixture";
import { faker } from "@faker-js/faker";

test("Subscribe to newsletter", async ({ app }) => {
  const email = faker.internet.email();

  const response =
    await app.mainPage.footer.subscribeBlock.subscribeToNewsletter(email);
  const responseBody = await response.json();

  const thanksModalLocator = app.mainPage.modals.thanksModal.getModalLocator();
  const thanksModalText = await app.mainPage.modals.thanksModal.getModalText();

  expect(response.status()).toBe(200);
  await expect(thanksModalLocator).toBeVisible();
  expect(thanksModalText).toBe(responseBody.data.message);
});
