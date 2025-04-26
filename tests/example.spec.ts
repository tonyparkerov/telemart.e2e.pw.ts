import { test, expect } from "../app/fixtures/fixture";
import { SocialNetwork } from "../app/types/types";

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
    const link = await app.footer.centerBlock.getSocialLink(social);
    const newTab = await app.footer.centerBlock.openSocial(social);
    await expect(newTab).toHaveURL(link);
  });
}
