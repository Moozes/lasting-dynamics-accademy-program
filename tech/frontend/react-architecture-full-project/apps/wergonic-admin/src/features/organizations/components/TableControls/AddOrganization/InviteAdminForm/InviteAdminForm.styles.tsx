import { styled } from "@mui/material/styles";

import { InviteAdminForm } from "./InviteAdminForm";

export const StyledInviteAdminForm = styled(InviteAdminForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "35px 39px 32px",
    "& > .icon-button": {
        padding: 0,
        borderRadius: 8,
        marginBottom: 31,
        "& > .icon": {},
    },
    "& > .form-title": {
        ...theme.typography.h4,
        marginBottom: 4,
    },
    "& > .description": {
        ...theme.typography.body2,
        marginBottom: 37,
    },
    "& > .input": {},
}));
