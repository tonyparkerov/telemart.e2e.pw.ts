export type SocialNetwork =
  | "fb"
  | "in"
  | "tiktok"
  | "youtube"
  | "tg"
  | "discord";

export type SignInOption = "email" | "phone";

export type SignInData = {
  email?: string;
  phone?: string;
  password?: string;
};

export type Cookie = {
  name: string;
  value: string;
  url: string;
};
