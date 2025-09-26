import { styled } from "@mui/material/styles";

import { AddLine } from "./AddLine";

export const StyledAddLine = styled(AddLine)(({ theme }) => ({
    "& .add-line-button": {
        padding: "10px 10px",
        ...theme.typography.body1,
        color: theme.color_system.text.secondary,
    },
}));
