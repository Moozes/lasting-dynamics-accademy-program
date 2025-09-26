import { styled } from "@mui/material/styles";

import { StrenuousWorkForm } from "./StrenuousWorkForm";

export const StyledStrenuousWorkForm = styled(StrenuousWorkForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .title": {
        marginBottom: 20,
        paddingLeft: 13,
        ...theme.typography.h4,
    },
    "& > .form-card": {
        marginBottom: 20,
    },
}));
