import { setDateFnsDefaultLocale, setReactDatepickerDefaultLocale } from "ui";

import { i18n } from "@utils/index";

export const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
    setReactDatepickerDefaultLocale(value);
    setDateFnsDefaultLocale(value);
};
