import { SxProps, Theme } from "@mui/material";

export const modalContentStyles: SxProps<Theme> = (theme) => ({
    color: theme.color_system.accent.grey,
    width: "581px",
    "& > .form-actions": {
        background: theme.color_system.divider.light_purple,
        padding: "23px 43px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "13px",
        "& > .btn": {
            borderRadius: "8px",
            height: "40px",
        },
    },
});
