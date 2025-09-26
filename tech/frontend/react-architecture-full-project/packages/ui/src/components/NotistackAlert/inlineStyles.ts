import { SxProps, Theme } from "@mui/material";

export const AlertStyle: SxProps<Theme> = {
    "& .MuiAlert-action": { py: 0 },
    left: "75px",
    py: 0,
    px: 2,
    boxShadow: (theme) => theme.color_system.boxShadow.purple_20,
};
export const AlertCloseButtonStyle: SxProps = { padding: 1.25 };
