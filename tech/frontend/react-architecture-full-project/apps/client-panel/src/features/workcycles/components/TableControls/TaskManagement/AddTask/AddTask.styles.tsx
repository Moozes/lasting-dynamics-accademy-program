import { styled } from "@mui/material/styles";

import { AddTask } from "./AddTask";

export const StyledAddTask = styled(AddTask)(({ theme }) => ({
    "& .add-task-button": {
        padding: "10px 10px",
        ...theme.typography.body1,
        color: theme.color_system.text.secondary,
    },
}));
