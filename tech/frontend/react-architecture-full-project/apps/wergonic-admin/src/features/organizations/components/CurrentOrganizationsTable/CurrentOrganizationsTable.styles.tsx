import { styled } from "@mui/material/styles";

import { CurrentOrganizationsTable } from "./CurrentOrganizationsTable";

export const StyledCurrentOrganizationsTable = styled(CurrentOrganizationsTable)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: 0,
    "& > .table-controls": {
        marginBottom: 28,
    },
}));
