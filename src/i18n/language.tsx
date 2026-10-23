import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { texts, type Lang, type Texts } from "./texts";

const STORAGE_KEY = "chi-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Texts;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "de",
  setLang: () => {},
  t: texts.de,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with German on server and client; a saved choice is applied
  // after hydration to avoid a mismatch.
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "de" || saved === "en") setLangState(saved);
    } catch {
      // storage unavailable – keep default
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage unavailable – session-only choice
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: texts[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
