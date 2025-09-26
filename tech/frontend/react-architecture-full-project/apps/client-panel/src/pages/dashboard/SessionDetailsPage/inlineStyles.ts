import { SxProps, Theme } from "@mui/material";

export const chartsContainerStyles: SxProps<Theme> = (theme) => ({
    background: theme.color_system.divider.white,
    borderRadius: "10px",
    boxShadow: theme.color_system.boxShadow.gray,
    padding: "42px",
});
