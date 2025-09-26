import { useMemo } from "react";
import { useTranslation as _useTranslation } from "react-i18next";

import { useTheme } from "@mui/material";

import { LOCALE_CODES } from "ui";

import { pushingAndPullingInfo, pushingAndPullingInfoSwedish } from "@features/RAMP/assets";

export const useTrasnlatedIllustration = () => {
    const { i18n } = _useTranslation();
    const {
        palette: { mode },
    } = useTheme();
    const currentLanguage = i18n.language;
    const infoIllustration = useMemo(
        () => (currentLanguage === LOCALE_CODES.sv ? pushingAndPullingInfoSwedish(mode) : pushingAndPullingInfo(mode)),
        [currentLanguage]
    );

    return {
        infoIllustration,
    };
};
