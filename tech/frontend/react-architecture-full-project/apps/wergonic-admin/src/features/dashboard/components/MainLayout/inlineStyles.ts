import { SxProps, Theme } from "@mui/material";

import { DRAWER_WIDTH } from "./MainLayout.helpers";

export const drawerStyles: SxProps<Theme> = (theme) => ({
    width: DRAWER_WIDTH,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
        width: DRAWER_WIDTH,
        background: theme.color_system.accent.light_purple,
        borderRight: "none",
    },
});
