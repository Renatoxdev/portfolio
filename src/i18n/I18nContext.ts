import { createContext } from "react";

export type Lang = "pt" | "en";
export type TranslationValue = string | string[];

export type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => TranslationValue;
};

export const I18nContext = createContext({
  lang: "pt",
  setLang: () => {},
  t: () => "",
} as I18nContextValue);
