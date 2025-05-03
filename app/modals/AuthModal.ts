import BaseModal from "@modals/BaseModal";
import { SignInOption, SignInData } from "@types";

export default class AuthModal extends BaseModal {
  private modalLocator = this.page.locator(".modal#modalCommonAuth");
  private signInEmailOrPhoneInputLocator = this.modalLocator.locator(
    "input#loginform-identity"
  );
  private signInPasswordInputLocator = this.modalLocator.locator(
    "input#loginform-password"
  );
  private signInRememberMeCheckboxLocator = this.modalLocator.locator(
    "input#loginform-rememberme"
  );
  private signInForgotPasswordLinkLocator =
    this.modalLocator.locator(".link-w-border");
  private signInButtonLocator = this.modalLocator.getByRole("button", {
    name: "Увійти",
  });

  async signInWith(signInOption: SignInOption, signInData: SignInData) {
    const option =
      signInOption === "email" ? signInData.email : signInData.phone;

    if (option) {
      await this.signInEmailOrPhoneInputLocator.fill(option);
    }
    if (signInData.password) {
      await this.signInPasswordInputLocator.fill(signInData.password);
    }
    await this.signInButtonLocator.click();
    await this.page.waitForResponse("**/user/sign-in/login/");
  }
}
