import { Locale, setDefaultOptions } from "date-fns";
import de from "date-fns/locale/de";
import en from "date-fns/locale/en-GB";
import es from "date-fns/locale/es";
import nl from "date-fns/locale/nl";
import sv from "date-fns/locale/sv";

import { LOCALE_CODES } from "./locale-codes";

export const DATE_FNS_LOCALES: Record<string, Locale> = {
    [LOCALE_CODES.en]: en,
    [LOCALE_CODES.sv]: sv,
    [LOCALE_CODES.de]: de,
    [LOCALE_CODES.es]: es,
    [LOCALE_CODES.nl_NL]: nl,
};

export const setDateFnsDefaultLocale = (localeCode: string) => {
    setDefaultOptions({
        locale: DATE_FNS_LOCALES[localeCode],
    });
};
