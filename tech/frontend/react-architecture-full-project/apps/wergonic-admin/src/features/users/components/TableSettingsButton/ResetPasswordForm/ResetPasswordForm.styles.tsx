import { styled } from "@mui/material/styles";

import { ResetPasswordForm } from "./ResetPasswordForm";

export const StyledResetPasswordForm = styled(ResetPasswordForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& .reset-password-form": {
        width: 600,
        padding: "20px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > .text": {
            marginBottom: 24,
            textAlign: "left",
            "& > .title": {
                ...theme.typography.h4,
                marginBottom: 8,
            },
            "& > .description": {
                ...theme.typography.body1,
                color: theme.color_system.text.secondary,
            },
        },
        "& > .email-input": {
            width: "100%",
            marginBottom: 24,
        },
        "& > .submit-btn": {
            borderRadius: "5px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px 0",
            textAlign: "center",
        },
    },
}));
