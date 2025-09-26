import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LngDetector from "i18next-browser-languagedetector";

import { LOCALE_CODES } from "./locales-config/locale-codes";

i18n.use(LngDetector)
    .use(initReactI18next)
    .init({
        resources: {},
        fallbackLng: "en",
        debug: false,
        supportedLngs: Object.values(LOCALE_CODES),
        load: "currentOnly",
        returnEmptyString: false,
        returnNull: false,
    });

export default i18n;
