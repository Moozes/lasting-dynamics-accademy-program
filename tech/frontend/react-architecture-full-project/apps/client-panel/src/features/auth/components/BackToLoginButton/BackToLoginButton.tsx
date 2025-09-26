import { useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/material";

import { Btn, useTranslationV2 } from "ui";

import { buttonStyles } from "./inlineStyles";

export const BackToLoginButton = () => {
    const t = useTranslationV2();
    const navigate = useNavigate();
    return (
        <Box display="flex" alignItems="center" gap={1}>
            <Btn variant="text" onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />} sx={buttonStyles}>
                {t("Back")}
            </Btn>
        </Box>
    );
};
