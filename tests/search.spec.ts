import { test, expect } from "@fixtures/fixture";

test("Search result for iphone", async ({ app }) => {
  const searchData = "iphone 16 pro max";
  await app.mainPage.header.searchFor(searchData);
  const searchResults = await app.searchPage.itemsList.getAllItems();

  expect(await app.searchPage.getSearchCount()).toBe(searchResults.length);
  expect(await app.searchPage.getSearchHeaderText()).toContain(searchData);
  for (const item of searchResults) {
    const itemName = await item.getName();
    expect(itemName.toLowerCase()).toContain(searchData.toLowerCase());
  }
});
