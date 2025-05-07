import { Page } from "@playwright/test";
import { AuthModal, ThanksModal, BasketModal } from "@modals";

export class Modals {
  thanksModal: ThanksModal;
  authModal: AuthModal;
  basketModal: BasketModal;

  constructor(page: Page) {
    this.thanksModal = new ThanksModal(page);
    this.authModal = new AuthModal(page);
    this.basketModal = new BasketModal(page);
  }
}
