import { styled } from "@mui/material/styles";

import { getMediaQueryMaxWidthString } from "@utils/index";

import { TableControls } from "./TableControls";

export const StyledTableControls = styled(TableControls)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
    gap: "16px",

    "& > .inputs": {
        display: "flex",
        alignItems: "center",
        gap: 20,
        flex: 1,

        "& > .search-input": {
            width: 420,
            flexShrink: 1,
        },
    },

    "& > .buttons": {
        display: "flex",
        gap: 8,
        flexShrink: 0,

        "& > .popover-group": {
            display: "flex",
            alignItems: "center",

            "& > .icon-button": {
                padding: 8.5,
                borderRadius: 8,
                border: `2px solid ${theme.color_system.primary.dark}`,
                "& > .icon": {
                    width: 24,
                    height: 24,
                    color: theme.color_system.primary.dark,
                },
            },
        },
    },

    [getMediaQueryMaxWidthString("2000px")]: {
        gap: "12px",

        "& > .inputs": {
            width: "100%",
            gap: 12,
            flexWrap: "nowrap",

            "& > .search-input": {
                width: "100%",
                maxWidth: "300px",
            },
        },

        "& > .buttons": {
            width: "auto",
            flexWrap: "wrap",
        },
    },
    [getMediaQueryMaxWidthString("1000px")]: {
        flexDirection: "column",
        alignItems: "stretch",
        gap: 10,

        "& > .inputs": {
            marginBottom: 20,
            width: "100%",
            "& > .search-input": {
                maxWidth: "100%",
            },
        },

        "& > .buttons": {
            justifyContent: "flex-end",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 12,
            flexShrink: 0,
        },
    },
}));
