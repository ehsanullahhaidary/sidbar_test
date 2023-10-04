import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "",
  resources: {
    en: {
      translation: {
        dashbord: "Dashbord",
        control_screen: "Control Screen",
        settings: "Settings",
        exchange: "Exchange",
        acoount: "Account",
        back_up: "Back Up",
      },
    },
    fa: {
      translation: {
        dashbord: "دشبورد",
        control_screen: "صفحه کنترول",
        settings: "تنظیمات",
        exchange: "معامله",
        acoount: "حساب",
        back_up: "بک اپ",
      },
    },
  },
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
