import { Box, Typography, useTheme } from "@mui/material";

import { useTranslationV2 } from "ui";

import { NoDataFound } from "@assets/index";

export const NoDataFoundPage = () => {
    const t = useTranslationV2();
    const theme = useTheme();
    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={3} height="70vh">
            <NoDataFound />
            <Typography variant="h3" color={theme.color_system.text.primary}>
                {t("no_data_found")}
            </Typography>
        </Box>
    );
};
