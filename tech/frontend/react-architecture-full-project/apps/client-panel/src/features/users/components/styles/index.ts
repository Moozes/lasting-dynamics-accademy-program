import { SxProps, Theme } from "@mui/material";

export const DialogStyle: SxProps = { "& .MuiDialog-paper": { maxWidth: "780px" } };
export const InputStyle: SxProps = { flexBasis: "47%" };
export const DisabledInputStyle: SxProps = {
    bgcolor: "divider",
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
};

export const MenuItemStyles: SxProps<Theme> = (theme) => ({
    background: theme.color_system.background.paper,
    color: theme.color_system.text.primary,
    ...theme.typography.h6,
    "&:hover": {
        background: theme.color_system.divider.light_grey,
    },
    "&.Mui-selected": {
        background: theme.color_system.divider.light_grey,
        "&:hover": {
            background: theme.color_system.divider.light_grey,
        },
    },
});

export const DialogTitleStyle: SxProps = { display: "flex", flexGrow: 1, justifyContent: "space-between", ml: 2 };

export const DialogeActionsStyle: SxProps = {
    bgcolor: "primary.blueFade",
    display: "flex",
    justifyContent: "space-between",
    py: 2,
    px: 4.5,
};

export const DeleteDialogeActionsStyle: SxProps = {
    bgcolor: "primary.blueFade",
    display: "flex",
    justifyContent: "flex-end",
    py: 2,
    px: 4.5,
};
export const DeleteDialogeWarningStyle: SxProps = { bgcolor: "grey.300", mb: 2, px: 6, pt: 2 };
export const titleStyle: SxProps = { fontSize: "24px" };
export const cancelButtonStyle: SxProps = { mr: 1, bgcolor: "common.white", borderColor: "common.white" };

export const cancelButtonStyle2: SxProps<Theme> = (theme) => ({
    mr: 1,
    bgcolor: theme.color_system.divider.white,
    color: theme.color_system.primary.dark,
    border: 0,
    "&:hover": {
        border: 0,
    },
});

export const CheckBoxStyle: SxProps = { ml: 1, display: "flex", alignItems: "center", gap: "26px" };
export const AddNewuserAlertStyle: SxProps = {
    color: "grey.500",
    bgcolor: "grey.200",
    border: "1px solid",
    borderColor: "divider",
    fontSize: "24px",
    alignItems: "center",
};

export const AddNewuserAlertStyle2: SxProps<Theme> = (theme) => ({
    color: theme.color_system.text.secondary,
    bgcolor: theme.color_system.divider.light_grey_20,
    border: 0,
    fontSize: "14px",
    alignItems: "center",
    ...theme.typography.subtitle2,
    "svg path": {
        fill: theme.color_system.text.secondary,
    },
});
export const UpdateUserDialogAction: SxProps = { justifyContent: "space-between", px: 3 };

// activate deactivate user

export const AlertAvatarStyle: SxProps = { width: "94px", height: "94px", bgcolor: "rgba(242, 78, 30, 0.05)" };
export const AlertAvatarStyle2: SxProps<Theme> = (theme) => ({
    width: "94px",
    height: "94px",
    bgcolor: `${theme.color_system.status.error.dark}1a`,
    "svg path": {
        stroke: theme.color_system.status.error.dark,
    },
});

export const ActivateMenuItemStyle = (hasPermission: boolean): SxProps => ({
    opacity: hasPermission ? 1 : 0.15,
    pointerEvents: hasPermission ? "initial" : "none",
});
export const ActivateMenuItemStyle2 = (hasPermission: boolean): SxProps<Theme> => ({
    opacity: hasPermission ? 1 : 0.15,
    pointerEvents: hasPermission ? "initial" : "none",
    "svg path": {
        fill: (theme) => theme.color_system.primary.dark,
    },
});
