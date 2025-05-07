import { test, expect } from "@fixtures/fixture";

test("#5.3. Check random manufacturer filter for pc", async ({
  signedInApp,
}) => {
  await signedInApp.itemsPage.open();
  const randomFilterValue =
    await signedInApp.itemsPage.filters.manufacturerFilter.selectRandomCheckbox();
  await signedInApp.itemsPage.filters.applyFilters();
  const allItems = await signedInApp.itemsPage.itemsList.getAllItems();
  for (const item of allItems) {
    const itemName = await item.getName();
    expect(itemName).toContain(`${randomFilterValue} `);
  }
});
