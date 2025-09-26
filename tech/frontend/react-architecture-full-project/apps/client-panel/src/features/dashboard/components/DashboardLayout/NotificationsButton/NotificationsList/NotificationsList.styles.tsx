import { styled } from "@mui/material/styles";

import { NotificationsList } from "./NotificationsList";

export const StyledNotificationsList = styled(NotificationsList)(({ theme }) => ({
    color: theme.color_system.text.primary,
    marginTop: 10,
    width: 585,
    background: theme.color_system.divider.white,
    borderRadius: 8,
    paddingTop: 20,
    boxShadow: theme.color_system.boxShadow.purple_20,
    "& > .header": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 17,
        padding: "0 20px",
        "& > .title": {
            ...theme.typography.h4,
        },
        "& > .icon-button": {
            padding: 5,
            borderRadius: 4,
            border: `1px solid ${theme.color_system.divider.light_grey}`,
            "& > svg.icon": {
                fontSize: 17,
                "& > path": { fill: theme.color_system.divider.light_grey },
            },
        },
    },
    "& > .content": {
        padding: "0 20px",
        marginBottom: 17,
        height: "min(50vh, 500px)",
        overflow: "auto",
        "& > .empty": {
            paddingBottom: 17,
        },
        "& > .notification-item": {
            marginBottom: 8,
            "&:last-of-type": {
                marginBottom: 0,
            },
        },
    },
}));
