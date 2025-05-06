import { PagesWithItemsList } from "@app/pages/PagesWithItemsList";

export default class WishListPage extends PagesWithItemsList {
  protected path = "/wish/index/";
  private listTitleLocator = this.page.locator(".order-item__title");
  private itemCounterLocator = this.page.locator(".order-item__title-counter");
  private dropdownButtonLocator = this.page.locator(
    "button[data-bs-toggle='dropdown']"
  );
  private renameListButtonLocator = this.page.locator(".dropdown-item_rename");
  private renameListInputLocator = this.page.locator(
    "input#inpuWishListReName"
  );
  private submitRenameListButtonLocator = this.page.getByRole("button", {
    name: "Змінити назву",
  });
  private collapseToggleLocator = this.page.locator(
    ".order-item__btn-collapse-toggle"
  );

  async getListTitle() {
    const listTitle = await this.listTitleLocator.textContent();
    if (listTitle) {
      return listTitle;
    } else throw new Error("Unable to get wishlist title");
  }

  async getItemsCount() {
    const itemsCount = await this.itemCounterLocator.textContent();
    if (itemsCount) {
      return parseInt(itemsCount);
    } else throw new Error("Unable to get items count");
  }

  async renameWishList(name: string) {
    await this.dropdownButtonLocator.click();
    await this.renameListButtonLocator.click();
    await this.renameListInputLocator.fill(name);
    await this.submitRenameListButtonLocator.click();
    await this.page.waitForResponse("**/summary/**");
  }

  async expandList() {
    await this.collapseToggleLocator.click();
  }

  async clearWishList() {
    const allItems = await this.itemsList.getAllItems();
    if (allItems.length) {
      for (const item of allItems) {
        await item.removeFromFavorites();
      }
    }
  }
}
