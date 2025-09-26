import { styled } from "@mui/material/styles";

import { DeleteLine } from "./DeleteLine";

export const StyledDeleteLine = styled(DeleteLine)(({ theme }) => ({
    "& .delete-line-button": {
        padding: "10px 10px",
        ...theme.typography.body1,
        color: theme.color_system.text.secondary,
    },
}));
