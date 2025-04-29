import { test, expect } from "@fixtures/fixture";
import { faker } from "@faker-js/faker";

test("Subscribe to newsletter", async ({ app }) => {
  const email = faker.internet.email();
  const responsePromise = app.waitForResponse("**/site/subscribe/");

  await app.footer.subscribeBlock.subscribeToNewsletter(email);

  const response = await responsePromise;
  const responseBody = await response.json();
  const thanksModalLocator = app.modals.thanksModal.getModalLocator();
  const thanksModalText = await app.modals.thanksModal.getModalText();

  expect(response.status()).toBe(200);
  await expect(thanksModalLocator).toBeVisible();
  expect(thanksModalText).toBe(responseBody.data.message);
});
