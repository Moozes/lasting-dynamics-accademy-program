import { SxProps, Theme } from "@mui/material";

import { TABLE_SETTINGS_MENU_ITEM_PADDING } from "@utils/index";

export const boxStyles: SxProps<Theme> = (theme) => ({
    p: TABLE_SETTINGS_MENU_ITEM_PADDING,
    "& > svg > path": {
        stroke: theme.color_system.primary.dark,
    },
});

export const containerStyles: SxProps<Theme> = {
    width: "min(50vw, 700px)",
    padding: "10px 15px 15px 15px",
};

export const inputContainerStyles: SxProps<Theme> = {
    marginBottom: "6px",
};
export const inputContainerStyles2: SxProps<Theme> = {
    marginBottom: "15px",
};

export const addButtonContainerStyles: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: "5px",
};

export const addButtonStyles: SxProps<Theme> = {
    color: (theme) => theme.color_system.status.infos.dark,
    cursor: "pointer",
    "&:hover": {
        opacity: "0.8",
    },
};

export const inputFieldStyles: SxProps<Theme> = (theme) => ({
    fieldset: {
        borderWidth: "0.5px",
        borderColor: `${theme.color_system.text.primary}4d`,
    },
    "& .MuiInputBase-root.Mui-focused fieldset": {
        borderWidth: "0.5px",
        borderColor: theme.color_system.text.primary,
    },
    label: {
        color: theme.color_system.text.primary,
        fontWeight: 600,
        ...theme.typography.body2,
        "&.Mui-focused": {
            color: theme.color_system.text.primary,
        },
    },
    input: {
        color: theme.color_system.text.secondary,
        fontWeight: 300,
        ...theme.typography.h6,
    },
});

export const errorStyles: SxProps<Theme> = {
    ml: 0.5,
};

export const iconButtonStyles: SxProps<Theme> = (theme) => ({
    padding: 0,
    color: theme.color_system.text.secondary,
});
