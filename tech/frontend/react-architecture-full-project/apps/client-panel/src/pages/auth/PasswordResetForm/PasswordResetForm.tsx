import { useTheme } from "@mui/material/styles";

import { GlobalLoader, WergonicLogoPurple } from "ui";

import { AuthPageLayout, BackToLoginButton } from "@features/auth/index";

import { usePasswordResetUI, useVerifyPasswordResetPage } from "./PasswordResetForm.hooks";

export const PasswordResetPage = () => {
    const theme = useTheme();
    const { isResetCodeValid, resetCodeVerificationLoading } = useVerifyPasswordResetPage();
    const { RightSideAsset, Form } = usePasswordResetUI(isResetCodeValid);

    if (resetCodeVerificationLoading) {
        return <GlobalLoader />;
    }

    return (
        <AuthPageLayout
            leftSideAsset={<WergonicLogoPurple />}
            rightSideBgColor={theme.palette.primary.main}
            rightSideAsset={<RightSideAsset />}
            form={<Form />}
            footer={<BackToLoginButton />}
        />
    );
};
