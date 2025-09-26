import { styled } from "@mui/material/styles";

import { MultiSessionDetailsPage } from "./MultiSessionDetailsPage";

const padding = "0 34px";

export const StyledMultiSessionDetailsPage = styled(MultiSessionDetailsPage)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .back-button": {
        margin: "0 34px 10px",
    },
    "& > .title": {
        marginBottom: 14,
        padding,
    },
    "& > .export-pdf-container": {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 26,
        padding,
    },
    "& > .sub-navbar": {
        padding,
        marginBottom: 36,
    },
    "& > .outlet-container": {
        padding,
        "& > .workers-table": {
            marginBottom: 28,
        },
    },
}));
