import { styled } from "@mui/material/styles";

import { UsersPage } from "./UsersPage";

export const StyledUsersPage = styled(UsersPage)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "0 32px 77px 32px",
    "& > .title": {
        ...theme.typography.h4,
        marginBottom: 28,
    },
    "& > .table-controls": {
        marginBottom: 28,
    },
}));
