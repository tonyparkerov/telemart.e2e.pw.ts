import { test, expect } from "@fixtures/fixture";
import { SocialNetwork } from "@types";

const socialNetworks: SocialNetwork[] = [
  "fb",
  "in",
  "tiktok",
  "youtube",
  "tg",
  "discord",
];

for (const social of socialNetworks) {
  test(`Social network ${social} opened in new tab`, async ({ app }) => {
    const link = await app.mainPage.footer.centerBlock.getSocialLink(social);
    const newTab = await app.mainPage.footer.centerBlock.openSocial(social);
    await expect(newTab).toHaveURL(link);
  });
}
