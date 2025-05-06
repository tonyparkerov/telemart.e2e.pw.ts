import { SocialNetwork } from "@app/types";
import { test, expect } from "@fixtures/fixture";

const expectedSocials = {
  fb: "facebook.com/telemartua/",
  in: encodeURIComponent("instagram.com/telemart.ua"),
  tiktok: "tiktok.com/@telemart.ua",
  youtube: "youtube.com/channel/UCQes6uq1DGo1UWTqU1n5qlw",
  tg: "t.me/telemart_pc",
  discord: "discord.com/invite/a7GC7EDPqM",
};

const socials: SocialNetwork[] = [
  "fb",
  "in",
  "tiktok",
  "youtube",
  "tg",
  "discord",
];

for (const [i, social] of socials.entries()) {
  test(`#2.${i + 1}. Social network ${social} opened in new tab`, async ({
    app,
  }) => {
    await app.mainPage.open();
    const newTab = await app.mainPage.footer.openSocial(social);
    expect(newTab.url()).toContain(expectedSocials[social]);
  });
}
