import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../locales/en/EnTranslation.json';
import ar from '../../locales/ar/ArTranslation.json';


const resources = {
    en: {
  
        translation: en,

    },
    ar: {

        translation: ar,
    }
};





i18n.use(initReactI18next).init({
    resources,
    lng: "ar",
    fallbackLng: "ar",
    interpolation: {
        escapeValue: false,
    },
});
// control the direction

export const htmlDirections = (lng) => {
    const dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lng;
};

htmlDirections("ar");

i18n.on("languageChanged", (lng) => htmlDirections(lng));
export default i18n;