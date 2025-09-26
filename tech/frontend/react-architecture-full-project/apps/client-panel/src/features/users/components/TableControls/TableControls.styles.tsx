import { styled } from "@mui/material/styles";

import { getMediaQueryMaxWidthString } from "@utils/index";

import { TableControls } from "./TableControls";

export const StyledTableControls = styled(TableControls)(() => ({
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
        "& > .role-input": {
            width: "180px",
        },
        "& > .status-input": {
            width: "183px",
        },
    },
    "& > .buttons": {
        display: "flex",
        alignItems: "center",
        gap: 24,
        "& > .add-new": {},
        "& > .delete-multiple": {},
    },

    [getMediaQueryMaxWidthString("1436px")]: {
        flexDirection: "column",
        alignItems: "stretch",
        "&  .inputs": {
            marginBottom: 20,
            "& > .search-input": {},
            "& > .role-input": {},
        },
        "& > .buttons": {
            justifyContent: "flex-end",
            "& > .add-new": {},
            "& > .delete-multiple": {},
        },
    },
}));
