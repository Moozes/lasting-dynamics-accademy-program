import { registerLocale } from "react-datepicker";
import de from "date-fns/locale/de";
import en from "date-fns/locale/en-GB";
import es from "date-fns/locale/es";
import nl from "date-fns/locale/nl";
import sv from "date-fns/locale/sv";

import { LOCALE_CODES } from "./locale-codes";

registerLocale(LOCALE_CODES.en, en);
registerLocale(LOCALE_CODES.sv, sv);
registerLocale(LOCALE_CODES.de, de);
registerLocale(LOCALE_CODES.es, es);
registerLocale(LOCALE_CODES.nl_NL, nl);

export const REACT_DATEPICKER_CONFIG = true;
