import { styled } from "@mui/material/styles";

import { DeleteTaskModel } from "./DeleteTaskModel";

export const StyledDeleteTaskModel = styled(DeleteTaskModel)(({ theme }) => ({
    "& .delete-taskmodel-button": {
        padding: "10px 10px",
        ...theme.typography.body1,
        color: theme.color_system.text.secondary,
    },
}));
