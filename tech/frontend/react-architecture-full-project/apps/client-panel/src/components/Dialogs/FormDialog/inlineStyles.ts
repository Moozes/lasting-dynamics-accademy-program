import { SxProps, Theme } from "@mui/material";

export const DialogStyle: SxProps<Theme> = {
    "& .MuiDialog-paper": {
        maxWidth: "780px",
    },
};

export const DialogStyle2: SxProps<Theme> = (theme) => ({
    "& .MuiDialog-paper": {
        maxWidth: "780px",
        minWidth: "680px",
        background: theme.color_system.divider.white,
    },
});

export const DialogTitleStyle: SxProps<Theme> = {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    marginLeft: 2,
};

export const titleStyle: SxProps<Theme> = {
    fontSize: "24px",
};

export const DialogeActionsStyle: SxProps<Theme> = {
    backgroundColor: "primary.blueFade",
    display: "flex",
    justifyContent: "space-between",
    paddingY: 2,
    paddingX: 4.5,
};

export const DialogeActionsStyle2: SxProps<Theme> = (theme) => ({
    backgroundColor: theme.color_system.divider.light_purple,
    display: "flex",
    justifyContent: "space-between",
    paddingY: 2,
    paddingX: 4.5,
});

export const cancelButtonStyle: SxProps<Theme> = {
    marginRight: 1,
    backgroundColor: "common.white",
    borderColor: "common.white",
};
