import React from "react";

import { Box, Typography } from "@mui/material";

import { Btn, useTranslationV2 } from "ui";

import { initialViewStyles } from "./inlineStyles";

interface InitialViewProps {
    onViewExplanation: () => void;
}

const InitialView: React.FC<InitialViewProps> = ({ onViewExplanation }) => {
    const t = useTranslationV2();
    const styles = initialViewStyles();

    return (
        <Box sx={styles.container}>
            <Box>
                <Typography variant="body2" sx={styles.typography}>
                    {t("ai_explanation.Enhance_understanding")}
                </Typography>
            </Box>
            <Btn variant="primary-outlined" onClick={onViewExplanation}>
                {t("ai_explanation.View_Explanation")}
            </Btn>
        </Box>
    );
};

export default InitialView;
