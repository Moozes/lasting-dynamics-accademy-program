import { styled } from "@mui/material/styles";

import { MultiResultsContainer } from "./MultiResultsContainer";

export const StyledMultiResultsContainer = styled(MultiResultsContainer)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "0 34px",
    "& > .title": {
        marginBottom: 14,
    },
    "& > .export-pdf-container": {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 26,
        "& > a": {
            textDecoration: "none",
        },
    },
}));
