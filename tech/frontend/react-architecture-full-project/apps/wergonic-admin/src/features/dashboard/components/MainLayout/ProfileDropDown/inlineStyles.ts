import { SxProps, Theme } from "@mui/material";

export const popoverItemStyles: SxProps<Theme> = (theme) => ({
    color: theme.color_system.text.primary,
    padding: "22px 35px",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    ...theme.typography.h6,
    width: "240px",
    "& > .icon": {},
    "& > .text": {},
});

export const popoverLogoutItemStyles: SxProps<Theme> = (theme) => ({
    color: theme.color_system.status.error.light,
    padding: "22px 35px",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    ...theme.typography.h6,
    width: "240px",
    "& > .icon": {},
    "& > .text": {},
});
