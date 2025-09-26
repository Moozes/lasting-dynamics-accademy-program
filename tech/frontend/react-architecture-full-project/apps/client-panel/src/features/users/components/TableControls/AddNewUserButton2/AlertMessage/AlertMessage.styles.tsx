import { styled } from "@mui/material/styles";

import { AlertMessage } from "./AlertMessage";

export const StyledAlertMessage = styled(AlertMessage)(({ theme }) => ({
    color: theme.color_system.text.secondary,
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "11px 11px 12px 12px",
    background: theme.color_system.divider.light_grey_20,
    "& > svg path": {
        fill: theme.color_system.text.secondary,
    },
    "& > .message": {
        ...theme.typography.body2,
    },
}));
