import BaseModal from "./BaseModal";
import ThanksModal from "./ThanksModal";

export default class Modals extends BaseModal {
  thanksModal = new ThanksModal(this.page);
}
