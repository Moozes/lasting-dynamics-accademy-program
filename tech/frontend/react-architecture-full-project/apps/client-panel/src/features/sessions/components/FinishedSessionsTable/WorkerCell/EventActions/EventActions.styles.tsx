import { styled } from "@mui/material/styles";

import { EventActions } from "./EventActions";

export const StyledEventActions = styled(EventActions)(({ theme }) => ({
    color: theme.color_system.text.primary,
    ...theme.typography.caption,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    cursor: "pointer",
    "&:hover": {
        "& > .text": {
            display: "none",
        },
        "& > .icon-button": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& > .menu-icon": {},
            "& > .clear-icon": {},
        },
    },
    "& > .text": {
        "&.hide": {
            display: "none",
        },
        display: "block",
    },
    "& > .icon-button": {
        "&.show": {
            display: "flex",
        },
        padding: 0,
        display: "none",
        fontSize: 18,
        "& > .menu-icon": {
            fontSize: "inherit",
        },
        "& > .clear-icon": {
            fontSize: "inherit",
        },
    },
    "& > .circular-progress": {},
}));
