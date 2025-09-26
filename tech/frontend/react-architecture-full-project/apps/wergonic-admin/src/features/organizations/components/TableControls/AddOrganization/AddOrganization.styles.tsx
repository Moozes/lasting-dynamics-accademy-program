import { styled } from "@mui/material/styles";

import { AddOrganization } from "./AddOrganization";

export const StyledAddOrganization = styled(AddOrganization)(({ theme }) => ({
    "& > .add-button": {
        padding: "8px 14px",
        display: "flex",
        alignItems: "center",
        gap: 3,
        ...theme.typography.h6,
    },
}));
