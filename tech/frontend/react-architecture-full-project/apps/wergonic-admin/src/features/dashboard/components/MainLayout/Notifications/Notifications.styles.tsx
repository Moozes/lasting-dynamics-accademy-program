import { styled } from "@mui/material/styles";

import { Notifications } from "./Notifications";

export const StyledNotifications = styled(Notifications)(({ theme }) => ({
    "& > .icon": {
        color: theme.color_system.primary.dark,
    },
}));
