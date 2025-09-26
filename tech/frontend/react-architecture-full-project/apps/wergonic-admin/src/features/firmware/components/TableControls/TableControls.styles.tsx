import { styled } from "@mui/material/styles";

import { TableControls } from "./TableControls";

export const StyledTableControls = styled(TableControls)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "48px",
    "& > .inputs": {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        "& > .search-input": {
            width: 420,
        },
    },
    "& > .add-firmware": {
        padding: "16px 32px",
    },
}));
