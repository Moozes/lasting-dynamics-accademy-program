import React from "react";

import { Box } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";

import { Btn, Typography, useTranslationV2 } from "ui";

import { regenerateReportStyles } from "./inlineStyles";

interface RegenerateReportProps {
    onViewExistingReport: () => void;
    onRegenerateReport: () => void;
}

const RegenerateReport: React.FC<RegenerateReportProps> = ({ onViewExistingReport, onRegenerateReport }) => {
    const t = useTranslationV2();
    const theme: Theme = useTheme();
    const styles = regenerateReportStyles(theme);

    return (
        <Box sx={styles.container}>
            <Typography sx={styles.text}>{t("ai_explanation.session_report_already_exist")}</Typography>
            <Box sx={styles.buttonsContainer}>
                <Btn onClick={onRegenerateReport} variant="text">
                    {t("ai_explanation.regenerate_report")}
                </Btn>
                <Btn onClick={onViewExistingReport} variant="primary-outlined">
                    {t("ai_explanation.view_existing_report")}
                </Btn>
            </Box>
        </Box>
    );
};

export default RegenerateReport;
