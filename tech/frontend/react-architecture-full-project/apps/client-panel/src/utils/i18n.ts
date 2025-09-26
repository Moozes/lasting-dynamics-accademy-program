import {
    dutchNetherlandsTranslations,
    englishTranslations,
    germanTranslations,
    i18n,
    LOCALE_CODES,
    spanishTranslations,
    swedishTranslations,
} from "ui";

import {
    localDutchNetherlandsTranslations,
    localEnglishTranslations,
    localGermanTranslations,
    localSpanishTranslations,
    localSwedishTranslations,
} from "@assets/index";

i18n.addResourceBundle(LOCALE_CODES.en, "translation", { ...englishTranslations, ...localEnglishTranslations });
i18n.addResourceBundle(LOCALE_CODES.sv, "translation", { ...swedishTranslations, ...localSwedishTranslations });
i18n.addResourceBundle(LOCALE_CODES.de, "translation", { ...germanTranslations, ...localGermanTranslations });
i18n.addResourceBundle(LOCALE_CODES.es, "translation", { ...spanishTranslations, ...localSpanishTranslations });
i18n.addResourceBundle(LOCALE_CODES.nl_NL, "translation", {
    ...dutchNetherlandsTranslations,
    ...localDutchNetherlandsTranslations,
});

export default i18n;
