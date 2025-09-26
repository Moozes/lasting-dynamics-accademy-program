import { SxProps, Theme } from "@mui/material";

export const popoverItemStyles: SxProps<Theme> = (theme) => ({
    padding: "15px 14px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    "&.border-botom": {
        borderBottom: `1px solid ${theme.color_system.divider.light_grey_20}`,
    },
    "&  .icon": {
        width: "24px",
        height: "24px",
        "& path": {
            fill: theme.color_system.primary.dark,
        },
    },
    "&  .text": {
        color: theme.color_system.text.primary,
        ...theme.typography.body1,
    },
});
