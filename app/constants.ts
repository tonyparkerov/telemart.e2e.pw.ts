import { Cookie, SignInData } from "@types";
import dotenv from "dotenv";

dotenv.config();

export const defaultUser: SignInData = {
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};

export const baseUrl = "https://telemart.ua/ua";

export const defaultCityCookie: Cookie = {
  name: "geo_id_city",
  value: "1360",
  url: "https://telemart.ua/ua",
};

export const authFilePath = ".auth/user.json";
