import BaseComponent from "../components/BaseComponent";
import CenterBlock from "../components/footer/CenterBlock";
import SubscribeBlock from "../components/footer/SubscribeBlock";

export default class FooterComponent extends BaseComponent {
  subscribeBlock = new SubscribeBlock(this.page);
  centerBlock = new CenterBlock(this.page);
}
