import { test as base } from "@playwright/test";
import Application from "@app/Application";
import { authFilePath, defaultCityCookie } from "@app/constants";
import { CartController } from "@app/api/controllers/CartController";

type MyFixtures = {
  app: Application;
  appWithProductPage: Application;
  signedInApp: Application;
  cartController: CartController;
};

export const test = base.extend<MyFixtures>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    await app.setCookies([defaultCityCookie]);
    await app.mainPage.open();

    await use(app);
  },

  signedInApp: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: authFilePath,
    });
    const page = await context.newPage();
    const app = new Application(page);

    await use(app);
    await context.close();
  },

  cartController: async ({ signedInApp }, use) => {
    const cartController = new CartController(
      signedInApp.getPage().context().request
    );

    await use(cartController);
  },
});
export { expect } from "@playwright/test";
