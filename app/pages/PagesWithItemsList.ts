import { ItemsListComponent } from "@app/components";
import BasePage from "@pages/BasePage";

export abstract class PagesWithItemsList extends BasePage {
  protected abstract path: string;
  itemsList = new ItemsListComponent(this.page);
}
