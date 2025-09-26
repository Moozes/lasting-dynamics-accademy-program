import { styled } from "@mui/material/styles";

import { AddFactory } from "./AddFactory";

export const StyledAddFactory = styled(AddFactory)(({ theme }) => ({
    "& .add-factory-button": {
        padding: "10px 10px",
        ...theme.typography.body1,
        color: theme.color_system.text.secondary,
    },
}));
