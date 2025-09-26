import { SxProps, Theme } from "@mui/material";

export const popoverItemStyles: SxProps<Theme> = (theme) => ({
    padding: "15px 18px",
    display: "flex",
    alignItems: "center",
    "&.border-botom": {
        borderBottom: `1px solid ${theme.color_system.divider.light_grey_20}`,
    },
    "& > .text": {
        color: theme.color_system.text.primary,
        ...theme.typography.body1,
    },
});
