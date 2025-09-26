import { styled } from "@mui/material/styles";

import { PushingAndPullingForm } from "./PushingAndPullingForm";

export const StyledPushingAndPullingForm = styled(PushingAndPullingForm)(({ theme }) => ({
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
