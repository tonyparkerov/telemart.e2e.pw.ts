import BaseComponent from "./BaseComponent";
import SubscribeBlock from "./footer/SubscribeBlock";

export default class FooterComponent extends BaseComponent {
  subscribeBlock = new SubscribeBlock(this.page);
}
