import { useTranslation as _useTranslation } from "react-i18next";

import i18nInstance from "../instance";

export function useTranslationV2() {
    const { t } = _useTranslation("translation", { i18n: i18nInstance });
    return t;
}

export function usei18nInstance() {
    const { i18n } = _useTranslation("translation", { i18n: i18nInstance });
    return i18n;
}
