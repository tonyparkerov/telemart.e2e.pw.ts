import { ItemsListComponent } from "@app/components";
import { FiltersComponent } from "@app/components/ProductFiltersComponent";
import BasePage from "@pages/BasePage";

export abstract class PagesWithItemsList extends BasePage {
  protected abstract path: string;
  itemsList = new ItemsListComponent(this.page);
  filters = new FiltersComponent(this.page);
  protected loadMoreButtonLocator = this.page.locator(
    "button.box-load-more__btn"
  );

  private async isLoadMoreButtonVisible() {
    return await this.loadMoreButtonLocator.isVisible();
  }

  async loadAllMore() {
    while (this.isLoadMoreButtonVisible()) {
      await this.loadMore();
    }
  }

  private async loadMore() {
    await this.loadMoreButtonLocator.click();
    await this.page.waitForResponse("**/summary/**");
  }
}
