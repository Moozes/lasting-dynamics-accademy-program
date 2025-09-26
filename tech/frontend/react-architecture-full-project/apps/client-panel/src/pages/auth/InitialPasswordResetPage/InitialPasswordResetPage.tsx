import { useTheme } from "@mui/material/styles";

import { WergonicLogoPurple } from "ui";

import { SecureLaptop } from "@assets/index";
import { AuthPageLayout, BackToLoginButton, InitialPasswordResetForm } from "@features/auth/index";

export const InitialPasswordResetPage = () => {
    const theme = useTheme();
    return (
        <AuthPageLayout
            leftSideAsset={<WergonicLogoPurple />}
            rightSideBgColor={theme.palette.primary.main}
            rightSideAsset={<SecureLaptop />}
            form={<InitialPasswordResetForm />}
            footer={<BackToLoginButton />}
        />
    );
};
