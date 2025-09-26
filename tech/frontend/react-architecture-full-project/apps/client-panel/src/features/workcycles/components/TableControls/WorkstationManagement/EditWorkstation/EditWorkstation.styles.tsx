import { styled } from "@mui/material/styles";

import { EditWorkstation } from "./EditWorkstation";

export const StyledEditWorkstation = styled(EditWorkstation)(({ theme }) => ({
    ".edit-workstation-button": {
        padding: "10px 10px",
        ...theme.typography.body1,
        color: theme.color_system.text.secondary,
        cursor: "pointer",
        "&:hover": {
            opacity: 0.8,
        },
    },
}));
