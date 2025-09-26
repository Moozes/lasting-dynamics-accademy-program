import { styled } from "@mui/material/styles";

import { Actions } from "./Actions";

export const StyledActions = styled(Actions)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "23px 43px 21px",
    background: theme.color_system.divider.light_purple,
    "& > label": {
        display: "flex",
        alignItems: "center",
        gap: "29px",
        cursor: "pointer",
    },
    "& > .empty": {
        flexGrow: 1,
    },
    "& > .action-button": {
        flexShrink: 0,
    },
}));
