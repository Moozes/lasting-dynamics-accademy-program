import { styled } from "@mui/material/styles";

import { TableControls } from "./TableControls";

export const StyledTableControls = styled(TableControls)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .search-input": {
        width: 420,
    },
}));
