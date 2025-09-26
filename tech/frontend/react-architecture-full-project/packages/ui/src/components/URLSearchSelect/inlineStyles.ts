import { SxProps, Theme } from "@mui/material";

export const SelectStyles: SxProps<Theme> = (theme) => ({
    background: theme.color_system.divider.white,
    label: {
        color: theme.color_system.divider.light_grey,
        fontWeight: 300,
        ...theme.typography.body2,
        "&.Mui-focused": {
            color: theme.color_system.divider.light_grey,
        },
    },
    "& .MuiSelect-select": {
        color: theme.color_system.text.primary,
        ...theme.typography.body1,
    },
    fieldset: {
        borderWidth: "0.5px",
        borderColor: theme.color_system.divider.light_grey,
        borderRadius: "8px",
    },
    "& .MuiInputBase-root": {
        height: "39px",
    },
    "& .MuiInputBase-root.Mui-focused fieldset": {
        borderWidth: "0.5px",
        borderColor: theme.color_system.divider.light_grey,
        borderRadius: "8px",
    },
    "& .MuiInputBase-root:hover fieldset": {
        borderWidth: "0.5px",
        borderColor: theme.color_system.divider.light_grey,
        borderRadius: "8px",
    },
});
