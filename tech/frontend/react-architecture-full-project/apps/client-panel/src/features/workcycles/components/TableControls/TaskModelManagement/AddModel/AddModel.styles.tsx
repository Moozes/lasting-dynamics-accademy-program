import { styled } from "@mui/material/styles";

import { AddModel } from "./AddModel";

export const StyledAddModel = styled(AddModel)(({ theme }) => ({
    "& .add-model-button": {
        padding: "10px 10px",
        ...theme.typography.body1,
        color: theme.color_system.text.secondary,
    },
}));
