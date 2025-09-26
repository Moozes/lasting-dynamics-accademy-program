import { SxProps, Theme } from "@mui/material";
import { tooltipClasses } from "@mui/material/Tooltip";

export const TooltipPopperStyles: SxProps<Theme> = {
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: (theme) => theme.palette.primary.blue,
        color: (theme) => theme.palette.common.white,
        boxShadow: (theme) => theme.color_system.boxShadow.purple_20,
        fontSize: 16,
        fontWeight: 400,
        padding: 1,
    },
};

export const IntroTextStyles: SxProps<Theme> = {
    mb: 2,
    color: (theme) => theme.color_system.text.secondary,
};

export const WarningContainerStyles: SxProps<Theme> = (theme) => ({
    background: theme.color_system.divider.light_grey_20,
    padding: "10px",
    borderRadius: "8px",
});

export const WarningTextStyles: SxProps<Theme> = {
    fontWeight: 600,
    color: (theme) => theme.color_system.text.primary,
};

export const ContentCopyOutlinedIconStyles: SxProps<Theme> = (theme) => ({
    color: theme.color_system.text.secondary,
});
