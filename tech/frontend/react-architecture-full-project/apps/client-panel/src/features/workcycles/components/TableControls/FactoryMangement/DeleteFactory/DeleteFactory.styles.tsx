import { styled } from "@mui/material/styles";

import { DeleteFactory } from "./DeleteFactory";

export const StyledDeleteFactory = styled(DeleteFactory)(({ theme }) => ({
    "& .delete-factory-button": {
        padding: "10px 10px",
        ...theme.typography.body1,
        color: theme.color_system.text.secondary,
    },
}));
