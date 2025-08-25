import i18n from "i18next";                     // core i18n library
import LanguageDetector from "i18next-browser-languagedetector"; // auto-detects browser lang
import { initReactI18next } from "react-i18next"; // connects i18n with React

// Initialize i18n
i18n
  .use(LanguageDetector)   // detect browser language automatically
  .use(initReactI18next)   // pass translations into React components
  .init({
    //  Translations (English + Hindi)
    resources: {
      en: {
        translation: {
          welcome: "Welcome to my App",
          about: "This is about section"
        }
      },
      hi: {
        translation: {
          welcome: "हमारे ऐप में आपका स्वागत है!",
          about: "यह अबाउट सेक्शन है।"
        }
      }
    },

    //  If browser language not found, fallback to English
    fallbackLng: "en",

    interpolation: {         // interpolation means inserting dynamic values into translations.
      escapeValue: false // not needed for React (it escapes by default)...
    }
  });

export default i18n;
