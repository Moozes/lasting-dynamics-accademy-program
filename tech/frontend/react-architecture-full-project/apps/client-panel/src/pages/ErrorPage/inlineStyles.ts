import { SxProps, Theme } from "@mui/material";

export const BoxStyles: SxProps<Theme> = (theme) => ({
    color: theme.color_system.text.primary,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "26px",
});
