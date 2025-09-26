import { styled } from "@mui/material/styles";

import { getMediaQueryMaxWidthString } from "@utils/index";

import { TableControls } from "./TableControls";

export const StyledTableControls = styled(TableControls, { shouldForwardProp: (prop) => prop !== "isDrawerOpen" })(
    ({ isDrawerOpen }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        marginBottom: 28,
        "&  .inputs": {
            display: "flex",
            alignItems: "center",
            gap: 20,
            "& > .search-input": {
                width: 420,
            },
            "& > .status-input": {
                width: "180px",
            },
            "& > .date-range-container": {
                display: "flex",
                alignItems: "center",
                "& > .clear-icon-button": {
                    padding: 2,
                },
            },
        },
        "& > .buttons": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 17,
            "& > .add-new": {},
            "& > .delete-multiple": {},
        },

        [getMediaQueryMaxWidthString(isDrawerOpen ? "1708px" : "1568px")]: {
            flexDirection: "column",
            alignItems: "stretch",
            "&  .inputs": {
                marginBottom: 20,
                "& > .search-input": {
                    width: 300,
                },
                "& > .status-input": {},
            },
            "& > .buttons": {
                justifyContent: "flex-end",
                "& > .add-new": {},
                "& > .delete-multiple": {},
                "& > .date-range-container": {
                    "& > .clear-icon-button": {},
                },
            },
        },
    })
);
