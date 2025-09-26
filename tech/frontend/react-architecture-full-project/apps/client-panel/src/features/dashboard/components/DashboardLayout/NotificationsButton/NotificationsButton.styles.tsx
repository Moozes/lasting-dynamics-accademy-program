import { styled } from "@mui/material/styles";

import { NotificationsButton } from "./NotificationsButton";

export const StyledNotificationsButton = styled(NotificationsButton)(({ theme }) => ({
    marginRight: 12,
    "& > .icon-button": {
        "& > .badge": {
            "& > .notification-icon": {
                "& > path": {
                    fill: theme.color_system.primary.dark,
                },
            },
            "& > .MuiBadge-dot": {
                background: theme.color_system.status.infos.dark,
            },
        },
    },
}));
