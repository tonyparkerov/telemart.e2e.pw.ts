import BaseModal from "../BaseModal";
import SignInTab from "./SignInTab";
import SignUpTab from "./SignUpTab";

type AuthModalTabs = "signIn" | "signUp";

export default class AuthModal extends BaseModal {
  private modalLocator = this.page.locator(".modal#modalCommonAuth");
  signInTab = new SignInTab(this.page);
  signUpTab = new SignUpTab(this.page);

  private signInTabButtonLocator = this.modalLocator.locator(
    "button[data-bs-target='#authItem1']"
  );
  private signUpTabButtonLocator = this.modalLocator.locator(
    "button[data-bs-target='#authItem2']"
  );

  async openTab(tabValue: AuthModalTabs) {
    await this[`${tabValue}TabButtonLocator`].click();
  }
}
