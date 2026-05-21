import { useEffect, useMemo, useState, type ReactNode } from "react";
import { translations } from "./translations";
import { I18nContext, type Lang, type TranslationValue } from "./I18nContext";

type TranslationTree = {
  [key: string]: TranslationValue | TranslationTree;
};

function get(obj: TranslationTree, path: string): TranslationValue | TranslationTree | undefined {
  return path.split(".").reduce((acc, key) => {
    if (acc == null) return undefined;
    if (typeof acc !== "object" || Array.isArray(acc)) return undefined;
    return acc[key];
  }, obj as TranslationValue | TranslationTree | undefined);
}

type I18nProviderProps = {
  children: ReactNode;
};

export default function I18nProvider({ children }: I18nProviderProps) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("portfolio_lang");
    return saved === "en" ? "en" : "pt";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_lang", lang);
  }, [lang]);

  const value = useMemo(() => {
    const t = (key: string): TranslationValue => {
      const current = get(translations[lang], key);
      if (typeof current === "string" || Array.isArray(current)) return current;

      const fallback = get(translations.pt, key);
      if (typeof fallback === "string" || Array.isArray(fallback)) return fallback;

      return key;
    };

    return { lang, setLang, t };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
