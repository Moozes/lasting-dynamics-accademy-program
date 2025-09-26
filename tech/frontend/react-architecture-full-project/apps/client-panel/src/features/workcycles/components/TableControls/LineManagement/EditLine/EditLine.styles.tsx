import { styled } from "@mui/material/styles";

import { EditLine } from "./EditLine";

export const StyledEditLine = styled(EditLine)(({ theme }) => ({
    "& .edit-line-button": {
        padding: "10px 10px",
        ...theme.typography.body1,
        color: theme.color_system.text.secondary,
    },
}));
