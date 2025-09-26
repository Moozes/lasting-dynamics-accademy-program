import { styled } from "@mui/material/styles";

import { PerceivedPhysicalDiscomfortForm } from "./PerceivedPhysicalDiscomfortForm";

export const StyledPerceivedPhysicalDiscomfortForm = styled(PerceivedPhysicalDiscomfortForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .title": {
        marginBottom: 20,
        paddingLeft: 13,
        ...theme.typography.h4,
    },
    "& > .form-card": {
        marginBottom: 20,
    },
    "& > .sub-form": {
        marginBottom: 20,
    },
}));
