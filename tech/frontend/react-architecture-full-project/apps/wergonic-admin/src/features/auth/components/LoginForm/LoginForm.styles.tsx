import { styled } from "@mui/material/styles";

import { LoginForm } from "./LoginForm";

export const StyledLoginForm = styled(LoginForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    background: theme.color_system.background.default,
    padding: "40px 45px",
    overFlowY: "auto",
    height: "min(720px, 100vh)",
    overflowY: "auto",
    "& > .logo-container": {
        textAlign: "center",
        marginBottom: 23,
        "& > .logo": {},
    },
    "& > .title": {
        ...theme.typography.h4,
        "&.mb": {
            marginBottom: 37,
        },
    },
    "& > form ": {
        "& > .reset-password-container": {
            textAlign: "right",
            marginBottom: 48,
            "& > .reset-password-link": {
                cursor: "pointer",
                color: theme.color_system.status.infos.light,
            },
        },
        "& > .submit-button": {
            width: "100%",
            justifyContent: "center",
            paddingTop: 17,
            paddingBottom: 17,
            ...theme.typography.body1,
            marginBottom: 37,
        },
    },
    "&  .terms-and-services": {
        textAlign: "center",
        "& > .terms-and-services-text": {
            ...theme.typography.body1,
            color: theme.color_system.text.secondary,
        },
        "& > .terms-and-services-link": {
            cursor: "pointer",
            ...theme.typography.body1,
            color: theme.color_system.status.infos.light,
        },
    },
}));
