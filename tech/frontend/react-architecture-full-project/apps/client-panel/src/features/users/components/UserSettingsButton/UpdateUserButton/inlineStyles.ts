import { SxProps, Theme } from "@mui/material";

import { TABLE_SETTINGS_MENU_ITEM_PADDING } from "@utils/index";

export const UpdateUserButtonStyles: SxProps<Theme> = {
    p: TABLE_SETTINGS_MENU_ITEM_PADDING,
    "svg path": { fill: (theme) => theme.color_system.primary.dark },
};
