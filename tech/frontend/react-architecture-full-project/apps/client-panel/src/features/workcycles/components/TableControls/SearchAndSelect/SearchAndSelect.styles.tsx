import { styled } from "@mui/material/styles";

import { SearchAndSelect } from "./SearchAndSelect";

export const StyledSearchAndSelect = styled(SearchAndSelect)(({ theme }) => ({
    position: "relative",
    width: "420px",

    "& .search-input": {
        width: "100%",
        padding: "14px 7px",
        BorderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
        marginBottom: "0",
        "&::placeholder": {
            color: theme.color_system.text.secondary,
            opacity: 1,
        },
    },

    "& > .options-list": {
        width: "100%",
        height: "550px",
        overflowY: "auto",
        border: `1px solid ${theme.color_system.divider.light_grey}`,
        padding: "0",
        listStyle: "none",
    },

    "& > .option-item": {
        padding: "14px 7px",
        cursor: "pointer",
        color: theme.color_system.text.primary,
        "&:hover": {
            backgroundColor: theme.color_system.primary.light,
            color: theme.color_system.text.primary,
        },
    },
}));
