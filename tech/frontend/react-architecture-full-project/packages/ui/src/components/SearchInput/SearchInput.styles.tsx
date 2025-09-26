import { styled } from "@mui/material/styles";

import { SearchInput } from "./SearchInput";

export const StyledSearchInput = styled(SearchInput)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "8px 12px",
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    background: theme.color_system.divider.light_grey_20,
    "& > .search-input": {
        flexGrow: 1,
        display: "block",
        width: "100%",
        background: "transparent",
        color: theme.color_system.text.secondary,
        ...theme.typography.body2,
        border: "none",
        outline: "none",
        "&::placeholder": {
            color: theme.color_system.text.secondary,
            ...theme.typography.body2,
        },
    },
    "& > .search-icon": {
        width: 19,
        height: 19,
        "& > path": {
            stroke: theme.color_system.text.secondary,
        },
    },
}));
