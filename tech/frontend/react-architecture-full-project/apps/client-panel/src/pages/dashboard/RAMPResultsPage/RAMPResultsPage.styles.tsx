import { styled } from "@mui/material/styles";

import { RAMPResultsPage } from "./RAMPResultsPage";

export const StyledRAMPResultsPage = styled(RAMPResultsPage)(({ theme }) => ({
    padding: "0 34px",
    "& > .page-title": {
        color: theme.color_system.text.primary,
        marginBottom: 20,
        fontFamily: "Manrope",
        fontSize: 24,
        fontWeight: 700,
    },
    "& > .assessmen-information": {
        marginBottom: 20,
        padding: "0 0",
    },
    "& > .results-summary": {
        marginBottom: 20,
    },
    "& > .section-summary": {
        marginBottom: 20,
    },
    "& > .detailed-summary": {
        marginBottom: 20,
    },
    "& > .download-card": {
        marginBottom: 20,
    },
}));
