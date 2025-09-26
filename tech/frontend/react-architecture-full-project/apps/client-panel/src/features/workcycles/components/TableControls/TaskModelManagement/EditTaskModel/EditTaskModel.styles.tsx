import { styled } from "@mui/material/styles";

import { EditTaskModel } from "./EditTaskModel";

export const StyledEditTaskModel = styled(EditTaskModel)(({ theme }) => ({
    "& .edit-taskmodel-button": {
        padding: "10px 10px",
        ...theme.typography.body1,
        color: theme.color_system.text.secondary,
    },
}));
