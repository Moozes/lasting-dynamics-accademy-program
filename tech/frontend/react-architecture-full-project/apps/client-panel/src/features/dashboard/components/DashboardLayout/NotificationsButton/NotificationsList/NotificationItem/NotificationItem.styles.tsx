import { styled } from "@mui/material/styles";

import { NotificationItem } from "./NotificationItem";

export const StyledNotificationItem = styled(NotificationItem)(({ theme }) => ({
    color: theme.color_system.text.primary,
    display: "flex",
    padding: "15px 9px",
    borderRadius: 8,
    background: theme.color_system.divider.light_grey_20,
    "&:hover": {
        background: "transparent",
        cursor: "pointer",
    },
    "& > .circled-checked-folder-icon": {
        marginRight: 12,
        flexShrink: 0,
    },
    "& > .content": {
        flexGrow: 1,
        marginRight: 10,
        "& > .title": {
            ...theme.typography.body1,
        },
        "& > .link": {
            ...theme.typography.caption,
            marginBottom: 7,
            color: theme.color_system.status.infos.dark,
        },
        "& > .date": {
            ...theme.typography.caption,
            color: theme.color_system.text.secondary,
        },
    },
    "& > .small-colored-circle-icon": {
        height: 9,
        width: 9,
        background: theme.color_system.status.infos.dark,
        flexShrink: 0,
    },
}));
