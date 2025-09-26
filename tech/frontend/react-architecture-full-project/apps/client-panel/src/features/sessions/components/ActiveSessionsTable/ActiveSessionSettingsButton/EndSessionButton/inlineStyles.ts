import { SxProps, Theme } from "@mui/material";

export const ActivateMenuItemStyle2: SxProps<Theme> = {
    "svg path": {
        stroke: (theme) => theme.color_system.primary.dark,
    },
};

export const AlertAvatarStyle2: SxProps<Theme> = (theme) => ({
    width: "94px",
    height: "94px",
    bgcolor: `${theme.color_system.status.error.dark}1a`,
    "svg path": {
        stroke: theme.color_system.status.error.dark,
    },
});
