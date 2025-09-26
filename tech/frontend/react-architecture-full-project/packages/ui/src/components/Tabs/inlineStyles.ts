import { SxProps, Theme } from "@mui/material";

export const TabsStyles: SxProps<Theme> = {
    backgroundColor: (theme: Theme) => (theme.palette.mode === "light" ? "#E8E8E8" : theme.palette.divider),
    borderRadius: 2,
    "& .MuiTabs-flexContainer": {
        display: "inline-flex",
        position: "relative",
        zIndex: 1,
    },
    "& .MuiTabs-indicator": {
        top: 3,
        bottom: 3,
        right: 3,
        height: "auto",
        background: "none",
        "&:after": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            left: 4,
            right: 4,
            bottom: 0,
            borderRadius: 2,
            backgroundColor: ({ palette }) => (palette.mode === "light" ? "#fff" : palette.action.selected),
            boxShadow: "none",
        },
    },
};
export const TabsStyles2: SxProps<Theme> = {
    backgroundColor: (theme: Theme) => theme.color_system.accent.grey,
    borderRadius: 2,
    "& .MuiTabs-flexContainer": {
        display: "inline-flex",
        position: "relative",
        zIndex: 1,
    },
    "& .MuiTabs-indicator": {
        top: 3,
        bottom: 3,
        right: 3,
        height: "auto",
        background: "none",
        "&:after": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            left: 4,
            right: 4,
            bottom: 0,
            borderRadius: 2,
            backgroundColor: (theme) => theme.color_system.accent.light_grey,
            boxShadow: "none",
        },
    },
    "& .MuiTab-root": {
        color: (theme) => theme.color_system.button.disabled.text,
        "&.Mui-selected": {
            color: (theme) => theme.color_system.primary.dark,
        },
    },
};

export const TabStyles = (theme: Theme): SxProps<Theme> => ({
    px: 3,
    py: 0,
    textTransform: "capitalize",
    ...theme.typography.h6,
});
