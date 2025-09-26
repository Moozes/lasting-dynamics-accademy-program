import { styled } from "@mui/material/styles";

import { Message } from "./Message";

export const StyledMessage = styled(Message)(({ theme }) => ({
    color: theme.color_system.text.secondary,
    padding: "11px 13px 12px 12px",
    background: theme.color_system.divider.light_grey_20,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    gap: 14,
    "& > .icon": {
        "& > path": {
            fill: theme.color_system.text.secondary,
        },
    },
    "& > .text": {
        lineHeight: "22px",
    },
}));
