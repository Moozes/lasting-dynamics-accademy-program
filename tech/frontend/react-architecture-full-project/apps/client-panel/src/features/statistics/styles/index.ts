import { SxProps, Theme } from "@mui/material";
import { tooltipClasses } from "@mui/material/Tooltip";

export const MenuItemStyles: SxProps<Theme> = (theme) => ({
    color: theme.color_system.text.light,
    background: theme.color_system.divider.light_grey_20,
    padding: "13px 18px",
    justifyContent: "center",
    ...theme.typography.caption,
    "&:hover": {
        background: theme.color_system.divider.light_grey,
    },
    "&.Mui-selected": {
        background: theme.color_system.divider.light_grey,
        "&:hover": {
            background: theme.color_system.divider.light_grey,
        },
        "&.Mui-focusVisible": {
            background: theme.color_system.divider.light_grey,
        },
    },
});

export const TooltipPopperStyles: SxProps<Theme> = (theme) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        padding: "2px 18px 3px",
        borderRadius: 5,
        color: theme.color_system.text.light,
        background: theme.color_system.divider.light_grey_20,
        ...theme.typography.caption,
    },
});
