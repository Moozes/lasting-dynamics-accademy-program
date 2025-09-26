import { styled } from "@mui/material/styles";

import { EditFactory } from "./EditFactory";

export const StyledEditFactory = styled(EditFactory)(({ theme }) => ({
    "& .edit-factory-button": {
        padding: "10px 10px",
        ...theme.typography.body1,
        color: theme.color_system.text.secondary,
    },
}));
