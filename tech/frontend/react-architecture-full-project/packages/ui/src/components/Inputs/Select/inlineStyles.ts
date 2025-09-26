import { SxProps, Theme } from "@mui/material";

export const MenuItemStyles: SxProps<Theme> = (theme) => ({
    background: theme.color_system.background.paper,
    color: theme.color_system.text.primary,
    ...theme.typography.h6,
    "&:hover": {
        background: theme.color_system.divider.light_grey,
    },
    "&.Mui-selected": {
        background: theme.color_system.divider.light_grey,
        "&:hover": {
            background: theme.color_system.divider.light_grey,
        },
    },
});
