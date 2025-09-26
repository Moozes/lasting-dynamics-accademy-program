import { styled } from "@mui/material/styles";

import { LoginPage } from "./LoginPage";

export const StyledLoginPage = styled(LoginPage)(({ theme }) => ({
    color: theme.color_system.text.primary,
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > .backgound-circle": {
        position: "absolute",
        top: "-50%",
        left: 0,
        width: "100vw",
        height: "100vh",
        borderRadius: "50%",
        background: theme.color_system.primary.dark,
        zIndex: 1,
    },
    "& > .login-form": {
        position: "relative",
        zIndex: 2,
        width: "min(623px, 100vw)",
    },
}));
