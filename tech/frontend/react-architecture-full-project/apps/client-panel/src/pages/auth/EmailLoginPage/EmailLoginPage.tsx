import { AuthPageLayout2, EmailLoginForm } from "@features/auth";

export const EmailLoginPage = () => {
    return <AuthPageLayout2 form={<EmailLoginForm />} />;
};
