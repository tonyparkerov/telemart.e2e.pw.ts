import { test as base } from "@playwright/test";
import Application from "../Application";

type MyFixtures = {
  app: Application;
  signedInApp: Application;
};

export const test = base.extend<MyFixtures>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    await app.setCookies([
      { name: "geo_id_city", value: "1360", url: "https://telemart.ua/ua" },
    ]);
    await app.mainPage.goto();

    await use(app);
  },

  signedInApp: async ({ app }, use) => {
    await app.header.openAuthModal();
    await app.modals.authModal.signInTab.signInWith("email", {
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    });

    await use(app);
  },
});
export { expect } from "@playwright/test";
