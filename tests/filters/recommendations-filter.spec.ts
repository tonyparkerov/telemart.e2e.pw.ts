import { test, expect } from "@fixtures/fixture";

test("#5.2. Check random recommendation filter for pc", async ({
  signedInApp,
}) => {
  await signedInApp.itemsPage.open();
  const randomFilterValue =
    await signedInApp.itemsPage.filters.recommendationsFilter.selectRandomCheckbox();
  await signedInApp.itemsPage.filters.applyFilters();
  const allItems = await signedInApp.itemsPage.itemsList.getAllItems();
  for (const item of allItems) {
    const label = await item.getLabelText();
    expect(label).toBe(randomFilterValue);
  }
});
