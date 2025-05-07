import { test, expect } from "@fixtures/fixture";

test("#5.3. Check random manufacturer filter for pc", async ({ app }) => {
  await app.itemsPage.open();
  const randomFilterValue =
    await app.itemsPage.filters.manufacturerFilter.selectRandomCheckbox();
  await app.itemsPage.filters.applyFilters();
  const allItems = await app.itemsPage.itemsList.getAllItems();
  for (const item of allItems) {
    const itemName = await item.getName();
    expect(itemName).toContain(`${randomFilterValue} `);
  }
});
