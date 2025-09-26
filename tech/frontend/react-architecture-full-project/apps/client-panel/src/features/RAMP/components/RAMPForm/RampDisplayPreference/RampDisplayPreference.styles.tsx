import { styled } from "@mui/material/styles";

import { RampDisplayPreference } from "./RampDisplayPreference";

export const StyledRampDisplayPreference = styled(RampDisplayPreference)(({ theme }) => ({
    color: theme.color_system.text.primary,
    display: "flex",
    alignItems: "center",
    gap: 39,
    margin: "0 34px",
    padding: "27px 43px",
    background: theme.color_system.divider.white,
    borderRadius: 15,
    boxShadow: theme.color_system.boxShadow.gray,
    "& > .text": {
        ...theme.typography.subtitle1,
    },
    "& > .radio-buttons": {
        display: "flex",
        alignItems: "center",
        "& > label": {
            ...theme.typography.body2,
            marginRight: 20,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
        },
    },
}));
