import { styled } from "@mui/material/styles";

import { getMediaQueryMaxWidthString } from "@utils/index";

import { Sidebar } from "./Sidebar";

export const StyledSidebar = styled(Sidebar)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "39px 39px 23px 39px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& > .top": {
        "& > .title": {
            ...theme.typography.h4,
            marginBottom: 25,
        },
        "& > .list-item": {
            ...theme.typography.body1,
            color: theme.color_system.text.light,
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            gap: 18,
            padding: 11,
            cursor: "pointer",
            borderRadius: 5,
            "&.active, &:hover": {
                color: theme.color_system.primary.dark,
                background: theme.color_system.accent.purple,
                "& > svg": {
                    "&.fill": {
                        "& path": {
                            fill: theme.color_system.primary.dark,
                        },
                    },
                    "&.stroke": {
                        "& path": {
                            stroke: theme.color_system.primary.dark,
                        },
                    },
                },
                "& > .list-item-text": {},
            },
            "& > svg": {
                "&.fill": {
                    "& path": {
                        fill: theme.color_system.text.light,
                    },
                },
                "&.stroke": {
                    "& path": {
                        stroke: theme.color_system.text.light,
                    },
                },
            },
            "& > .list-item-text": {},
        },
    },
    "& > .bottom": {
        "& > .add-ticket-button": {
            marginBottom: 11,
        },
        "& > .policy-links": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            "& .separator": {
                color: theme.color_system.text.secondary,
            },
        },
    },
    [getMediaQueryMaxWidthString("834px")]: {
        padding: "39px 10px 20px",
        "& > .top": {
            "& > .title": {},
            "& > .list-item": {
                ...theme.typography.body2,
                gap: 10,
                "&.active, &:hover": {
                    "& > svg": {
                        "&.fill": {
                            "& path": {},
                        },
                        "&.stroke": {
                            "& path": {},
                        },
                    },
                    "& > .list-item-text": {},
                },
                "& > svg": {
                    "&.fill": {
                        "& path": {},
                    },
                    "&.stroke": {
                        "& path": {},
                    },
                },
                "& > .list-item-text": {},
            },
        },
        "& > .bottom": {
            "& > .add-ticket-button": {
                marginBottom: 13,
            },
            "& > .policy-links": {
                gap: 4,
            },
        },
    },
}));
