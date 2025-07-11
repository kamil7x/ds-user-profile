import en from "./translations/en.json";
import i18n from "i18next";

import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en,
  },
});

export default { i18next: i18n };
