import { styled } from "@mui/material/styles";

import { NotificationsFooter } from "./NotificationsFooter";

export const StyledNotificationsFooter = styled(NotificationsFooter)(({ theme }) => ({
    padding: "27px 20px",
    borderTop: `1px solid ${theme.color_system.status.infos.light}`,
    "& > .mark-as-read": {
        color: theme.color_system.status.infos.light,
        ...theme.typography.caption,
        "& > .loading": {},
        "& > .btn": {
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            "& > .icon": {},
            "& > .text": {},
        },
    },
}));
