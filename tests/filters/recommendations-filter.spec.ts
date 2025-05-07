import { test, expect } from "@fixtures/fixture";

test("#5.2. Check random recommendation filter for pc", async ({ app }) => {
  await app.itemsPage.open();
  const randomFilterValue =
    await app.itemsPage.filters.recommendationsFilter.selectRandomCheckbox();
  await app.itemsPage.filters.applyFilters();
  const allItems = await app.itemsPage.itemsList.getAllItems();
  for (const item of allItems) {
    const label = await item.getLabelText();
    expect(label).toBe(randomFilterValue);
  }
});
