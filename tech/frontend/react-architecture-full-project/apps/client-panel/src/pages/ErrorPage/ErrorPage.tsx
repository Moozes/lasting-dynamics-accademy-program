import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Btn, ErrorPageIllustration, useTranslationV2 } from "ui";

import { BoxStyles } from "./inlineStyles";

export const ErrorPage = () => {
    const t = useTranslationV2();
    const navigate = useNavigate();
    return (
        <Box sx={BoxStyles}>
            <ErrorPageIllustration />
            <Typography variant="h3">{t("error_page_title")}</Typography>
            <Typography width="539px" textAlign="center" variant="h6">
                {t("error_page_description")}
            </Typography>
            <Btn variant="primary-contained" onClick={() => navigate(-1)}>
                {t("go_back")}
            </Btn>
        </Box>
    );
};
