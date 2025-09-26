import { SxProps, Theme } from "@mui/material";

export const contentStyles: SxProps<Theme> = (theme) => ({
    color: theme.color_system.text.primary,
    width: "min(761px, 90vw)",
    "& > .content": {
        padding: "22px 43px 16px",
        "& > .title": {
            ...theme.typography.h4,
            marginBottom: "15px",
        },
    },
});
