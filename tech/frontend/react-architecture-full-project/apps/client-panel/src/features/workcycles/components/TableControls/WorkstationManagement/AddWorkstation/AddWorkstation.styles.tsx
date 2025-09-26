import { styled } from "@mui/material/styles";

import { AddWorkstation } from "./AddWorkstation";

export const StyledAddWorkstation = styled(AddWorkstation)(({ theme }) => ({
    "& .add-workstation-button": {
        padding: "10px 10px",
        ...theme.typography.body1,
        color: theme.color_system.text.secondary,
    },
}));
