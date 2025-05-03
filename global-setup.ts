import { chromium, type FullConfig } from "@playwright/test";
import fs from "fs";
import Application from "@app/Application";
import {
  authFilePath,
  baseUrl,
  defaultCityCookie,
  defaultUser,
} from "@app/constants";

async function globalSetup(config: FullConfig) {
  console.log("Authentication...");
  if (!fs.existsSync(authFilePath)) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(baseUrl);
    const app = new Application(page);
    await app.setCookies([defaultCityCookie]);
    await app.mainPage.header.clickUserProfileButton();
    await app.mainPage.modals.authModal.signInWith("email", defaultUser);
    await page.context().storageState({ path: authFilePath });
    console.log("Storage state saved to user.json file");
    await browser.close();
  } else {
    console.log("Auth file already exist");
  }
}

export default globalSetup;
