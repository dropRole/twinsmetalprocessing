import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import rsCommon from "../locales/rs/common.json";
import enCommon from "../locales/en/common.json";

i18n.use(initReactI18next).init({
  lng: "rs",
  fallbackLng: "rs",
  ns: "common",
  resources: {
    rs: { common: rsCommon },
    en: { common: enCommon },
  },
});
