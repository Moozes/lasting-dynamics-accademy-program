import { styled } from "@mui/material/styles";

import { getMediaQueryMaxWidthString } from "@utils/index";

import { TableControls } from "./TableControls";

export const StyledTableControls = styled(TableControls)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 28,
    "& .inputs": {
        display: "flex",
        alignItems: "center",
        gap: 20,
        "& > .search-input": {
            width: 420,
        },
    },

    [getMediaQueryMaxWidthString("970px")]: {
        flexDirection: "column",
        alignItems: "stretch",
        "& .inputs": {
            marginBottom: 20,
            "& > .search-input": {},
        },
    },
}));
