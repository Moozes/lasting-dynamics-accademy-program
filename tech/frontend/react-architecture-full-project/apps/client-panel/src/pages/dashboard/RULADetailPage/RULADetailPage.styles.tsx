import { styled } from "@mui/material/styles";

import { RULADetailPage } from "./RULADetailPage";

export const StyledRULADetailPage = styled(RULADetailPage)(({ theme }) => ({
    "& > .goback-button": {
        marginLeft: 34,
    },
    "& > .page-title": {
        color: theme.color_system.text.primary,
        marginBottom: 20,
        paddingLeft: 34,
        fontFamily: "Manrope",
        fontSize: 24,
        fontWeight: 700,
    },
    "& > .assessmen-information": {
        marginBottom: 33,
    },
    "& > .form-navbar": {
        marginBottom: 13,
    },
    "& > .assessment-form": {
        padding: "0 34px",
        "& > .alert-card": {
            marginBottom: 12,
        },
    },
}));
