import { SxProps, Theme } from "@mui/material";

import { TABLE_SETTINGS_MENU_ITEM_PADDING } from "@utils/index";

export const boxStyles: SxProps<Theme> = (theme) => ({
    p: TABLE_SETTINGS_MENU_ITEM_PADDING,
    "& > svg > path": {
        stroke: theme.color_system.primary.dark,
    },
});

export const AlertAvatarStyle2: SxProps<Theme> = (theme) => ({
    width: "94px",
    height: "94px",
    bgcolor: `${theme.color_system.status.error.dark}1a`,
    "svg path": {
        stroke: theme.color_system.status.error.dark,
    },
});
