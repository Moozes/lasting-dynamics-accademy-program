import { styled } from "@mui/material/styles";

import { RAMPForm } from "./RAMPForm";

export const StyledRAMPForm = styled(RAMPForm)(() => ({
    "& > .assessmen-information": {
        marginBottom: 33,
    },
    "& > .form-navbar": {
        marginBottom: 13,
        scrollSnapStop: "normal",
        scrollSnapAlign: "start",
    },
    "& > .ramp-display-preference": {
        marginBottom: 21,
    },
    "& > .assessment-form": {
        padding: "0 34px",
        "& > .alert-card": {
            marginBottom: 12,
        },
    },
}));
