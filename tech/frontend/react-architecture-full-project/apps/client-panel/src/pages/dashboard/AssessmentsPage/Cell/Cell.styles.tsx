import { styled } from "@mui/material/styles";

import { Cell } from "./Cell";

export const StyledCell = styled(Cell)(({ theme, width = "150px" }) => ({
    color: theme.color_system.text.primary,
    textOverflow: "ellipsis",
    overflow: "hidden",
    width,
}));
