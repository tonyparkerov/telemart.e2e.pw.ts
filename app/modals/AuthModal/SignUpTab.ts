import BaseModal from "../BaseModal";

export default class SignUpTab extends BaseModal {
  private tabLocator = this.page.locator("#authItem2[role='tabpanel']");
}
