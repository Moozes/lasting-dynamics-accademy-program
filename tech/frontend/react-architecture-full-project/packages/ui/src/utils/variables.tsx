import EnglishFlag from "../assets/flags/EnglishFlag";
import GermanFlag from "../assets/flags/GermanFlag";
import NetherlandsFlag from "../assets/flags/NetherlandsFlag";
import SpanishFlag from "../assets/flags/SpanishFlag";
import SwedishFlag from "../assets/flags/SwedishFlag";
import { LOCALE_CODES } from "../i18n/locales-config/locale-codes";

export const PDF_RECOMENDED_PRINT_MARGIN = "6.35mm";

export const SUPPORTED_LANGUAGES = [
    { code: LOCALE_CODES.en, name: "English", flag: <EnglishFlag /> },
    { code: LOCALE_CODES.sv, name: "Swedish", flag: <SwedishFlag /> },
    { code: LOCALE_CODES.de, name: "German", flag: <GermanFlag /> },
    { code: LOCALE_CODES.es, name: "Spanish", flag: <SpanishFlag /> },
    { code: LOCALE_CODES.nl_NL, name: "Dutch (Netherlands)", flag: <NetherlandsFlag /> },
];
