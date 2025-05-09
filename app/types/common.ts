export type ProductsCategories =
  | "earphones"
  | "iphone"
  | "monitors"
  | "consoles"
  | "pc";

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

export type UserData = {
  lastName?: string;
  firstName?: string;
  middleName?: string;
  dateOfBirth?: string;
  email?: string;
  phone?: string;
};
