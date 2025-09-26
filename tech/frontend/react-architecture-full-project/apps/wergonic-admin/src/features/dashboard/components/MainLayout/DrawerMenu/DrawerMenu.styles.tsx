import { styled } from "@mui/material/styles";

import { DrawerMenu } from "./DrawerMenu";

export const StyledDrawerMenu = styled(DrawerMenu)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    "& > .list": {
        padding: "29px 23px",
        width: "100%",
        "& > .link": {
            display: "flex",
            alignItems: "center",
            gap: 7,
            color: theme.color_system.text.light,
            ...theme.typography.subtitle1,
            padding: "8px 10px",
            borderRadius: 5,
            textDecoration: "none",
            marginBottom: 13,
            "&:last-of-type": {
                marginBottom: 0,
            },
            "&.active, &:hover": {
                // this className is provided by react-router
                background: theme.color_system.accent.purple,
                color: theme.color_system.primary.dark,
                "& > svg.icon": {
                    width: 24,
                    height: 24,
                    "&.fill path": {
                        fill: theme.color_system.primary.dark,
                    },
                    "&.stroke path": {
                        stroke: theme.color_system.primary.dark,
                    },
                },
            },
            "& > svg.icon": {
                flexShrink: 0,
                width: 24,
                height: 24,
                "&.fill path": {
                    fill: theme.color_system.text.light,
                },
                "&.stroke path": {
                    stroke: theme.color_system.text.light,
                },
            },
            "& > .text": {},
        },
    },
    "& > .logo": {
        padding: "32px 18px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        "& path": {
            fill: theme.color_system.primary.dark,
        },
    },
}));
