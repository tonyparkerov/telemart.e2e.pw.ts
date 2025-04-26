import { test, expect } from "@playwright/test";
import MainPage from "../app/pages/MainPage";
import FooterComponent from "../app/components/FooterComponent";

test("has title", async ({ page }) => {
  const mainPage = new MainPage(page);
  const footer = new FooterComponent(page);
  await mainPage.goto();
  await footer.centerBlock.getSocialLocator("in").click();
});
