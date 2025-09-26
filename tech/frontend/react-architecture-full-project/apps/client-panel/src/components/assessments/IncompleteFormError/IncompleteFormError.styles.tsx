import { styled } from "@mui/material/styles";

import { IncompleteFormError } from "./IncompleteFormError";

export const StyledIncompleteFormError = styled(IncompleteFormError)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .text": {
        marginBottom: 10,
    },
    "& > ul": {
        listStylePosition: "inside",
        padding: 0,
        margin: 0,
    },
}));
