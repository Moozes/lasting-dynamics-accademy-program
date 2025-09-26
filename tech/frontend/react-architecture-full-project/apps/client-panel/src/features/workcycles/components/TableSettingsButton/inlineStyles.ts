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
        width: "20px",
        height: "20px",
        "& path": {
            stroke: theme.color_system.primary.dark,
        },
    },
    "&  .text": {
        color: theme.color_system.text.primary,
        ...theme.typography.body1,
    },
});
