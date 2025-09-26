import { SxProps, Theme } from "@mui/material";

export const popoverItemStyles: SxProps<Theme> = (theme) => ({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    gap: "10px",
    padding: "5px",
    minWidth: "216px",
    "& > .initials": {
        ...theme.typography.subtitle2,
        padding: "6px",
        color: theme.color_system.primary.dark,
        borderRadius: "4px",
        background: theme.color_system.divider.white,
    },
    "& > .name": {
        ...theme.typography.button,
        color: theme.color_system.text.light,
    },
});
