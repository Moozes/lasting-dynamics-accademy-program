import { SxProps, Theme } from "@mui/material";

import { TABLE_SETTINGS_MENU_ITEM_PADDING } from "@utils/index";

export const RedoCalculationsButtonStyles: SxProps<Theme> = (theme) => ({
    p: TABLE_SETTINGS_MENU_ITEM_PADDING,
    cursor: "pointer",
    color: theme.color_system.text.primary,
});
