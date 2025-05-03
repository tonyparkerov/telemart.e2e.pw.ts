import { CatalogListComponent } from "@app/components";
import BasePage from "@pages/BasePage";

export abstract class BasePageWithCatalog extends BasePage {
  protected abstract path: string;
  catalogList = new CatalogListComponent(this.page);
}
