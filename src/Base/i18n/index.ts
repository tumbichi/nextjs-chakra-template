/* eslint-disable global-require */
import i18n, { ResourceKey } from "i18next";
import { initReactI18next } from "react-i18next";

export type AppTranslations = {
  [namespace in "appLayout" | "auth" | "common"]: ResourceKey;
};

type Resource = {
  [language in "en" | "es"]: AppTranslations;
};

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources: Resource = {
  en: {
    appLayout: require("./locales/en/appLayout.json"),
    auth: require("./locales/en/auth.json"),
    common: require("./locales/en/common.json"),
  },
  es: {
    appLayout: require("./locales/es/appLayout.json"),
    auth: require("./locales/es/auth.json"),
    common: require("./locales/es/common.json"),
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export { default as useTranslation } from "./useTranslation";

export default i18n;
