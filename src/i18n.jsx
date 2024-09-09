import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import laungageDetector from "i18next-browser-languagedetector";
import uzTranslation from "./locales/uz.json";
import enTranslation from "./locales/en.json";
import ruTranslation from "./locales/ru.json";
// import { init } from "aos";

i18n
  .use(Backend)
  // tilni aniqlash berish
  .use(laungageDetector)
  //  bog'lash
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "uz",
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    },
  });

export default i18n;
