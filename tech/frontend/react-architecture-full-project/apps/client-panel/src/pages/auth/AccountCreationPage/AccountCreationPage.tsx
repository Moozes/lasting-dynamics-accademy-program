import { useTheme } from "@mui/material/styles";

import { WergonicLogoPurple } from "ui";

import { WorkingWomen } from "@assets/index";
import { AccountCreationForm, AuthPageLayout, BackToLoginButton } from "@features/auth/index";

export const AccountCreationPage = () => {
    const theme = useTheme();
    return (
        <AuthPageLayout
            leftSideAsset={<WergonicLogoPurple />}
            rightSideBgColor={theme.palette.primary.main}
            rightSideAsset={<WorkingWomen />}
            form={<AccountCreationForm />}
            footer={<BackToLoginButton />}
        />
    );
};
