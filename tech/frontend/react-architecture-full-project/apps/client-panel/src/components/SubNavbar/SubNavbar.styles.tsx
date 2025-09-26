import { styled } from "@mui/material/styles";

import { SubNavbar } from "./SubNavbar";

export const StyledSubNavbar = styled(SubNavbar)(({ theme }) => ({
    borderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
    padding: "0 48px",
    display: "flex",
    "& > .links-container": {
        display: "flex",
        alignItems: "center",
        gap: 9,
        overflowX: "auto",
        "& > .link": {
            display: "inline-block",
            flex: "0 0 auto",
            color: theme.color_system.text.light,
            textDecoration: "none",
            padding: "12px 25px 11px 26px",
            borderRadius: "10px 10px 0 0",
            background: "transparent",
            ...theme.typography.subtitle2,
            "&.active": {
                background: theme.color_system.divider.white,
                color: theme.color_system.text.primary,
                ...theme.typography.body2,
            },
            "&.completed": {
                color: theme.color_system.status.infos.dark,
            },
            "&.non-completed": {
                "& > .link-content": {
                    "& > .error-icon": {
                        display: "block",
                    },
                },
            },
            "& > .link-content": {
                display: "flex",
                alignItems: "center",
                gap: 5,
                "& > .error-icon": {
                    display: "none",
                },
            },
        },
    },
}));
