import { styled } from "@mui/material/styles";

import { TableControls } from "./TableControls";

export const StyledTableControls = styled(TableControls)(({ theme }) => ({
    color: theme.color_system.text.primary,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    margin: "0 0 28px 0",
    "& > .inputs": {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 20,
        "& > .search-input": {
            width: 420,
        },
        "& > .country-input": {
            width: 183,
        },
        "& > .is-active-input": {
            width: 183,
        },
    },
    "& > .buttons": {
        display: "flex",
        alignItems: "right",
        justifyContent: "flex-end",
        flexGrow: 1,
        gap: "20px",
        "& > .icon-button": {
            padding: 8.5,
            borderRadius: 8,
            border: `2px solid ${theme.color_system.primary.dark}`,
            "& > .icon": {
                width: 24,
                height: 24,
                "& > path": {
                    fill: theme.color_system.primary.dark,
                },
            },
            "& > .add-organization": {},
        },
    },
}));
