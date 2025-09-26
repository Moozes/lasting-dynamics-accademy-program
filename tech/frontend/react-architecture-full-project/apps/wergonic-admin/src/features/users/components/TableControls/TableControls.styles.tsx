import { styled } from "@mui/material/styles";

import { TableControls } from "./TableControls";

export const StyledTableControls = styled(TableControls)(({ theme }) => ({
    color: theme.color_system.text.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > .inputs": {
        display: "flex",
        alignItems: "center",
        gap: 20,
        "& > .search-input": {
            width: 420,
        },
        "& > .role-input": {
            width: "180px",
        },
    },
}));
