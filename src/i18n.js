import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TRANSLATIONS_EN from "./locales/en/translations.json";
import TRANSLATIONS_DE from "./locales/de/translations.json";

const options = {
  order: ["navigator"],
  htmlTag: document.documentElement,
};

let selectedLang = JSON.parse(localStorage.getItem("language"));
console.log(selectedLang);
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      de: {
        translation: TRANSLATIONS_DE,
      },
    },
    fallbackLng: selectedLang !== null ? selectedLang : "en",
    keySeparator: ".", // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    ns: ["translation"],
    defaultNS: "translation",
    returnObjects: true,
    react: {
      useSuspense: false,
      wait: true,
    },
  });

export default i18n;
