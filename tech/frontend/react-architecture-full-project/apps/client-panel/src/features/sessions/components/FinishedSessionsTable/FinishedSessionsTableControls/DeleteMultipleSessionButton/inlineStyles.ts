import { SxProps, Theme } from "@mui/material";

export const PopupIntroStyles: SxProps<Theme> = {
    mb: 2,
    color: (theme) => theme.color_system.text.secondary,
};

export const AlertTextStyles: SxProps<Theme> = {
    color: (theme) => theme.color_system.text.primary,
};

export const popoverItemStyles: SxProps<Theme> = (theme) => ({
    padding: "10px 19px",
    ...theme.typography.body1,
    color: theme.color_system.status.error.light,
});
