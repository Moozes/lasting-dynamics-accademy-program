import { styled } from "@mui/material/styles";

import { MovementsAndRepetitionForm } from "./MovementsAndRepetitionForm";

export const StyledMovementsAndRepetitionForm = styled(MovementsAndRepetitionForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .title": {
        marginBottom: 20,
        paddingLeft: 13,
    },
    "& > .form-card": {
        marginBottom: 13,
    },
}));
