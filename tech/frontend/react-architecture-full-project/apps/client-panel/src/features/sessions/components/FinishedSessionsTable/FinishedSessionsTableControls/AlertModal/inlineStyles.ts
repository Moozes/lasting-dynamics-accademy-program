import { SxProps, Theme } from "@mui/material";

export const modalContentStyles: SxProps<Theme> = (theme) => ({
    width: "575px",
    textAlign: "center",
    "& > .info": {
        padding: "21px 51px",
        "& > .icon-button": {
            padding: "24px",
            background: theme.color_system.status.error.light_light,
            marginBottom: "28px",
            "& > .icon": {},
        },
        "& > .title": {
            ...theme.typography.h4,
            color: theme.color_system.primary.dark,
            marginBottom: "26px",
        },
        "& > ul.list": {
            padding: 0,
            margin: 0,
            ...theme.typography.body1,
            color: theme.color_system.text.primary,
            textAlign: "left",
            listStylePosition: "inside",
            "& > li": {
                ":last-of-type": {
                    marginBottom: 0,
                },
                marginBottom: "15px",
            },
        },
    },
    "& > .actions": {
        padding: "0 16px 20px 16px",
        display: "flex",
        justifyContent: "flex-end",
    },
});
