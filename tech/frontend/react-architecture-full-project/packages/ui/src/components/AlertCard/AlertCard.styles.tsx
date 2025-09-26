import { styled } from "@mui/material/styles";

import { AlertCard } from "./AlertCard";

export const StyledAlertCard = styled(AlertCard)(({ theme }) => ({
    color: theme.color_system.text.secondary,
    border: `1px solid ${theme.color_system.divider.light_grey}`,
    borderRadius: 4,
    "&.inline": {
        display: "inline-block",
    },
    "& > .content": {
        ...theme.typography.body2,
        display: "flex",
        alignItems: "center",
        gap: 17.75,
        background: theme.color_system.divider.light_grey_20,
        borderRadius: 4,
        borderLeft: `4px solid ${theme.color_system.status.error.light}`,
        padding: "14px 15px 10px",
        "& > .icon": {},
        "& > .content": {},
    },
}));
