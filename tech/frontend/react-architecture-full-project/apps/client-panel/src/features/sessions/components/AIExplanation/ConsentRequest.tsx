import React from "react";

import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { Box, Button, CircularProgress, Typography, useTheme } from "@mui/material";

import { useTranslationV2 } from "ui";

import { consentRequestStyles } from "./inlineStyles";

interface ConsentRequestProps {
    onDismiss: () => void;
    onConfirm: () => void;
    loading: boolean;
}

const ConsentRequest: React.FC<ConsentRequestProps> = ({ onDismiss, onConfirm, loading }) => {
    const t = useTranslationV2();
    const theme = useTheme();
    const styles = consentRequestStyles(theme);

    return (
        <Box sx={styles.container}>
            <FlagOutlinedIcon fontSize="large" sx={styles.icon} />
            <Typography variant="h6" sx={styles.header}>
                {t("ai_explanation.consent_request.header")}
            </Typography>
            <Typography variant="body2" sx={styles.paragraph}>
                {t("ai_explanation.consent_request.paragraph")}
            </Typography>
            <Box sx={styles.buttonBox}>
                <Button onClick={onDismiss} sx={styles.dismissButton} variant="outlined" disabled={loading}>
                    {t("ai_explanation.consent_request.dismiss")}
                </Button>
                <Button onClick={onConfirm} sx={styles.confirmButton} variant="contained" disabled={loading}>
                    {loading ? (
                        <CircularProgress size={24} color="inherit" />
                    ) : (
                        t("ai_explanation.consent_request.confirm")
                    )}
                </Button>
            </Box>
        </Box>
    );
};

export default ConsentRequest;
