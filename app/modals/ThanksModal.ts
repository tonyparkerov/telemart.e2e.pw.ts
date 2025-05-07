import { BaseModal } from "@modals";

export class ThanksModal extends BaseModal {
  protected modalLocator = this.page.locator("#modalThanks");
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
