import { SxProps, Theme } from "@mui/material";

export const popoverItemStyles: SxProps<Theme> = (theme) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "21px 29px 18px 29px",
    "& > svg": {},
    "& > .text": {
        color: theme.color_system.text.primary,
        ...theme.typography.h6,
    },
});
