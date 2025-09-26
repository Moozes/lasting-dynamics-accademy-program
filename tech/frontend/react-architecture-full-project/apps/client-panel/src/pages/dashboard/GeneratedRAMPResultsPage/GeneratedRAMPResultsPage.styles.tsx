import { styled } from "@mui/material/styles";

import { GeneratedRAMPResultsPage } from "./GeneratedRAMPResultsPage";

export const StyledGeneratedRAMPResultsPage = styled(GeneratedRAMPResultsPage)(({ theme }) => ({
    padding: "0 34px",
    "& > .page-title": {
        color: theme.color_system.text.primary,
        marginBottom: 20,
        fontFamily: "Manrope",
        fontSize: 24,
        fontWeight: 700,
    },
    "& > .assessment-information": {
        marginBottom: 20,
        padding: "0 0",
    },
    "& > .results-summary": {
        marginBottom: 20,
    },
    "& > .detailed-summary": {
        marginBottom: 20,
    },
    "& > .actions-card": {
        marginBottom: 20,
    },
    "& > .actions-card-2": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "30px 50px",
        background: theme.color_system.background.paper,
        boxShadow: theme.color_system.boxShadow.gray,
        borderRadius: 10,
    },
}));
