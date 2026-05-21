import React, { createContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations.js";

export const I18nContext = createContext({
  lang: "pt",
  setLang: () => {},
  t: () => "",
});

function get(obj, path) {
  return path.split(".").reduce((acc, key) => {
    if (acc == null) return undefined;
    return acc[key];
  }, obj);
}

export default function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("portfolio_lang");
    return saved === "en" ? "en" : "pt";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_lang", lang);
  }, [lang]);

  const value = useMemo(() => {
    const t = (key) => {
      const current = get(translations[lang], key);
      if (current !== undefined) return current;

      const fallback = get(translations.pt, key);
      if (fallback !== undefined) return fallback;

      return key;
    };

    return { lang, setLang, t };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
