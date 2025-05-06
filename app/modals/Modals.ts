import { Page } from "@playwright/test";
import AuthModal from "./AuthModal";
import ThanksModal from "./ThanksModal";

export default class Modals {
  thanksModal: ThanksModal;
  authModal: AuthModal;

  constructor(page: Page) {
    this.thanksModal = new ThanksModal(page);
    this.authModal = new AuthModal(page);
  }
}
