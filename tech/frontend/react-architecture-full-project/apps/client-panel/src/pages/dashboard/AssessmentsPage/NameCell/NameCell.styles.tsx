import { styled } from "@mui/material/styles";

import { NameCell } from "./NameCell";

export const StyledNameCell = styled(NameCell)(({ theme }) => ({
    color: theme.color_system.text.primary,
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    gap: 11,
    flexWrap: "wrap",
    "& > .name": {
        maxWidth: 150,
        textOverflow: "ellipsis",
        overflow: "hidden",
    },
    "& > .tag": {
        ...theme.typography.body2,
        color: theme.color_system.primary.dark,
        padding: "2px 10px",
        borderRadius: 31,
        background: theme.color_system.primary.light_35,
        display: "inline-block",
    },
}));
