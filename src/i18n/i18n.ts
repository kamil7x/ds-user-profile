import { initReactI18next } from "react-i18next";

import i18n from "i18next";

import en from "./translations/en.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en,
  },
});

export const i18next = i18n;
