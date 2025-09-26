export { default as useLanguage } from "./hooks/useLanguage";
export { usei18nInstance, useTranslationV2 } from "./hooks/useTranslation";
export { default as i18n } from "./instance";
export { setDateFnsDefaultLocale } from "./locales-config/date-fns-config";
export { LOCALE_CODES } from "./locales-config/locale-codes";
export { REACT_DATEPICKER_CONFIG } from "./locales-config/react-datepicker-config"; // I need to export this unused variable so the file would be executed
