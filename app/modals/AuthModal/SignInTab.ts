import BaseModal from "../BaseModal";
import { SignInOption, SignInData } from "@types";

export default class SignInTab extends BaseModal {
  private tabLocator = this.page.locator("#authItem1[role='tabpanel']");
  private emailOrPhoneInputLocator = this.tabLocator.locator(
    "input#loginform-identity"
  );
  private passwordInputLocator = this.tabLocator.locator(
    "input#loginform-password"
  );
  private rememberMeCheckboxLocator = this.tabLocator.locator(
    "input#loginform-rememberme"
  );
  private forgotPasswordLinkLocator = this.tabLocator.locator(".link-w-border");
  private signInButtonLocator = this.tabLocator.getByRole("button", {
    name: "Увійти",
  });

  async signInWith(signInOption: SignInOption, signInData: SignInData) {
    const option =
      signInOption === "email" ? signInData.email : signInData.phone;

    if (option) {
      await this.emailOrPhoneInputLocator.fill(option);
    }
    if (signInData.password) {
      await this.passwordInputLocator.fill(signInData.password);
    }
    await this.signInButtonLocator.click();
    await this.page.waitForResponse("**/user/sign-in/login/");
  }
}
