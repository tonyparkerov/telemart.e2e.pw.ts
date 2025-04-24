import { test, expect } from "@playwright/test";
import MainPage from "../app/pages/MainPage";

test("has title", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
});
