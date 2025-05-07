import { ItemsListComponent, FiltersComponent } from "@components";
import { BasePage } from "@pages/BasePage";
import { step } from "decorator/step";

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

  @step()
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
