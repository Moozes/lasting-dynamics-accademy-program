import { SxProps, Theme } from "@mui/material";

import { TABLE_SETTINGS_MENU_ITEM_PADDING } from "@utils/index";

export const ViewLogsButtonStyles: SxProps<Theme> = (theme) => ({
    p: TABLE_SETTINGS_MENU_ITEM_PADDING,
    cursor: "pointer",
    "svg path": {
        stroke: theme.color_system.primary.dark,
    },
    color: theme.color_system.primary.dark,
});
