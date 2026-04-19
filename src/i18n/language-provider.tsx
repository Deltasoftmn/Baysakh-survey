"use client";

import React from "react";

export type Language = "mn" | "en";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggle: () => void;
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "bayasakh.lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Language>("mn");

  React.useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "mn" || saved === "en") setLangState(saved);
  }, []);

  const setLang = React.useCallback((next: Language) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const toggle = React.useCallback(() => {
    setLang(lang === "mn" ? "en" : "mn");
  }, [lang, setLang]);

  const value = React.useMemo(() => ({ lang, setLang, toggle }), [
    lang,
    setLang,
    toggle
  ]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

