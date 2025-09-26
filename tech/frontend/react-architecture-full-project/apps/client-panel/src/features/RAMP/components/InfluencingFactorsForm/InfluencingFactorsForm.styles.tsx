import { styled } from "@mui/material/styles";

import { InfluencingFactorsForm } from "./InfluencingFactorsForm";

export const StyledInfluencingFactorsForm = styled(InfluencingFactorsForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .title": {
        marginBottom: 20,
        paddingLeft: 13,
    },
    "& > .form-card": {
        marginBottom: 20,
    },
}));
