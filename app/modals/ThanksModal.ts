import BaseModal from "./BaseModal";

export default class ThanksModal extends BaseModal {
  private modalLocator = this.page.locator("#modalThanks");
  private modalIntroTextLocator =
    this.modalLocator.locator(".modal-intro-text");

  getModalLocator() {
    return this.modalLocator;
  }

  async getModalText() {
    const modalText = await this.modalIntroTextLocator.textContent();
    return modalText;
  }
}
