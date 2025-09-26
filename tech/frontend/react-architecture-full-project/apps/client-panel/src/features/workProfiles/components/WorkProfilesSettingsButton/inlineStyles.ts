import { styled, SxProps, Theme } from "@mui/material";
import { PopoverProps } from "@mui/material/Popover";

import { SettingsIcon2 } from "ui";

export const StyledSettingsIcon = styled(SettingsIcon2)(({ theme }) => ({
    path: {
        stroke: theme.color_system.divider.dark_grey,
    },
}));

export const MenuItemStyles = (hasBorderBottom: boolean): SxProps<Theme> => ({
    p: 0,
    "&:hover": { bgcolor: (theme) => theme.color_system.divider.light_grey },
    ...(hasBorderBottom && {
        borderBottom: (theme) => `1px solid ${theme.color_system.divider.light_grey_20}`,
    }),
});

export const defaultPopoverProps: Omit<PopoverProps, "open" | "anchorEl" | "onClose"> = {
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
    },
    transformOrigin: {
        vertical: "top",
        horizontal: "right",
    },
    PaperProps: {
        sx: {
            overflow: "visible",
        },
    },
};
