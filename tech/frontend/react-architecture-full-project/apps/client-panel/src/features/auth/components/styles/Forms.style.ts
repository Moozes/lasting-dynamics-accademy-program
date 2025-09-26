import { CSSProperties } from "react";

import { SxProps, Theme } from "@mui/material";

export const ContainerStyle: SxProps<Theme> = (theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    bgcolor: theme.color_system.background.paper,
    borderRadius: "10px",
    pt: "40px",
    boxShadow: theme.color_system.boxShadow.gray,
});
export const FirebaseErrorMessage: SxProps = {
    p: 2,
    textTransform: { p: 2, color: "error.main" },
};

export const ResetPasswordLinkColor: SxProps = { color: "info.main" };

export const SocialButton = (theme: Theme): CSSProperties => ({
    textTransform: "capitalize",
    height: "55px",
    gap: "30px",
    borderColor: theme.color_system.divider.light_grey,
    color: theme.color_system.text.secondary,
});

export const DividerStyle: SxProps = { display: "flex", alignItems: "center", my: 2 };

export const FirstMessageStyles: SxProps = { color: "text.secondary" };

export const SecondMessageStyles: SxProps = { color: "info.main" };

export const PolicyTextContainer: SxProps = {
    px: {
        xs: 2,
        sm: 2,
        md: 6,
        lg: 10,
    },
    py: 2,
    textAlign: "center",
};

export const passwordLoginLink: SxProps<Theme> = (theme) => ({
    color: theme.color_system.status.infos.light,
});
