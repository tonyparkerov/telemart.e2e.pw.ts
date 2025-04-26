import BaseComponent from "./BaseComponent";
import CenterBlock from "./footer/CenterBlock";
import SubscribeBlock from "./footer/SubscribeBlock";

export default class FooterComponent extends BaseComponent {
  subscribeBlock = new SubscribeBlock(this.page);
  centerBlock = new CenterBlock(this.page);
}
