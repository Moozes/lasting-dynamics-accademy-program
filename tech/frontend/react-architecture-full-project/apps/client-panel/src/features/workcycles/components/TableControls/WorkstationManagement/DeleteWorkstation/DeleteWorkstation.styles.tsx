import { styled } from "@mui/material/styles";

import { DeleteWorkstation } from "./DeleteWorkstation";

export const StyledDeleteWorkstation = styled(DeleteWorkstation)(({ theme }) => ({
    "& .delete-workstation-button": {
        padding: "10px 10px",
        ...theme.typography.body1,
        color: theme.color_system.text.secondary,
    },
}));
