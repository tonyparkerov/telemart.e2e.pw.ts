import { test as setup } from "@playwright/test";
import path from "path";
import Application from "./Application";

const authFile = path.join(__dirname, "app/.auth/user.json");

setup("authenticate", async ({ page }) => {
  console.log("Authentication...");
  const app = new Application(page);
  await app.setCookies([
    { name: "geo_id_city", value: "1360", url: "https://telemart.ua/ua" },
  ]);
  await app.mainPage.goto();
  await app.header.openAuthModal();
  await app.modals.authModal.signInTab.signInWith("email", {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  });
  console.log(authFile);

  await page.context().storageState({ path: authFile });
});
