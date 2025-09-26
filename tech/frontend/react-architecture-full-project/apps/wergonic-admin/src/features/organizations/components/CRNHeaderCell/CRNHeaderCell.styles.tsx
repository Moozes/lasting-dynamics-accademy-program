import { styled } from "@mui/material/styles";

import { CRNHeaderCell } from "./CRNHeaderCell";

export const StyledCRNHeaderCell = styled(CRNHeaderCell)(({ theme }) => ({
    color: theme.color_system.text.primary,
    display: "flex",
    alignItems: "center",
    gap: 5,
    "& > .icon-button": {
        display: "flex",
        alignItems: "center",
        padding: 0,
        "& > .icon": {
            width: 20,
            height: 20,
        },
    },
}));
