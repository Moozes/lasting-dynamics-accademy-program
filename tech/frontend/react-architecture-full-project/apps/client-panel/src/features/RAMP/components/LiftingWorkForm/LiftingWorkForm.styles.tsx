import { styled } from "@mui/material/styles";

import { LiftingWorkForm } from "./LiftingWorkForm";

export const StyledLiftingWorkForm = styled(LiftingWorkForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    marginBottom: 27,
    "& > .title": {
        marginBottom: 20,
        paddingLeft: 13,
    },
    "& > .card": {
        background: theme.color_system.divider.white,
        boxShadow: theme.color_system.boxShadow.gray,
        borderRadius: 10,
        "& > .divider": {
            backgroundColor: theme.color_system.divider.light_grey,
            height: 4,
        },
    },
}));
