import { test, expect } from "@fixtures/fixture";
import { faker } from "@faker-js/faker";

test("#4. Subscribe to newsletter", async ({ app }) => {
  const email = faker.internet.email();

  await app.mainPage.open();
  const response = await app.mainPage.footer.subscribeToNewsletter(email);

  const thanksModalLocator = app.mainPage.modals.thanksModal.getModalLocator();
  const thanksModalText = await app.mainPage.modals.thanksModal.getModalText();

  await expect(thanksModalLocator).toBeVisible();
  expect(thanksModalText).toBe(response.data.message);
});
