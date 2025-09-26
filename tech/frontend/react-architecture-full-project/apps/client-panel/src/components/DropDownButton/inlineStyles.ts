import { SxProps, Theme } from "@mui/material";

export const MenuStyle = (width: string): { elevation: number; sx: SxProps<Theme> } => ({
    elevation: 0,
    sx: (theme) => ({
        width,
        marginTop: "4px",
        borderRadius: "8px",
        overflow: "visible",
        boxShadow: theme.color_system.boxShadow.purple_20,
        background: theme.color_system.background.paper,
    }),
});

export const MenuItemStyle: SxProps<Theme> = {
    "&:hover": { background: (theme) => theme.color_system.divider.light_grey },
    color: (theme) => theme.color_system.text.primary,
};
