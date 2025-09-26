import { styled } from "@mui/material/styles";

import { ArchivedOrganizationsTable } from "./ArchivedOrganizationsTable";

export const StyledArchivedOrganizationsTable = styled(ArchivedOrganizationsTable)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: 0,
    "& > .table-controls": {
        marginBottom: 28,
    },
}));
