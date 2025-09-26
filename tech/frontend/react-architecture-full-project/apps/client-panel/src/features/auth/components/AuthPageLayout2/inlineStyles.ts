import { SxProps, Theme } from "@mui/material";

export const SphereStyle: SxProps<Theme> = (theme) => ({
    position: "absolute",
    width: "110vw",
    height: "90vw",
    background: theme.color_system.primary.dark,
    borderRadius: "50%",
    top: "-120%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: -1,
});
