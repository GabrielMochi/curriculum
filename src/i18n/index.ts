import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enUsTranslation from "./translations/en-US/translation.json";
import ptBrTranslation from "./translations/pt-BR/translation.json";

export const defaultNS = "translation";

export const resources = {
  "en-US": {
    translation: enUsTranslation,
  },
  "pt-BR": {
    translation: ptBrTranslation,
  },
} as const;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    defaultNS,
    resources,
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })
  .catch(console.error);

export default i18n;
