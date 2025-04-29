import { test, expect } from "@fixtures/fixture";

const user = {
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};

test("Login", async ({ app }) => {
  await app.header.openAuthModal();
  //await app.modals.authModal.signInTab.signInWith("email", user);
});
