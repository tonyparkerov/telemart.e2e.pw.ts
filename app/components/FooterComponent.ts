import { BaseComponent } from "@components";
import CenterBlock from "../components/footer/CenterBlock";
import SubscribeBlock from "../components/footer/SubscribeBlock";

export class FooterComponent extends BaseComponent {
  subscribeBlock = new SubscribeBlock(this.page);
  centerBlock = new CenterBlock(this.page);
}
