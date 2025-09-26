import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { UserRoleEnum } from "ui";

import { confirmPassword } from "@features/auth/api";
import { usePasswordConfirmationSchema } from "@features/auth/schemas";
import routes from "@routes/routes";
import { ROLE, URL_CODE_KEY } from "@utils/index";

export const useCreateNewPasswordForm = () => {
    const CreateNewPasswordFormInitialValues = { password: "", password_confirmation: "" };
    const { passwordConfirmationSchema: CreateNewPasswordFormValidationSchema } = usePasswordConfirmationSchema();
    return { CreateNewPasswordFormInitialValues, CreateNewPasswordFormValidationSchema };
};

export const useFirebaseResetPassword = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [passwordResetLoading, setPasswordResetLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const resetCode = searchParams.get(URL_CODE_KEY) as string;
    const userRole = searchParams.get(ROLE) as string;

    async function resetPassword(values: any) {
        try {
            setPasswordResetLoading(true);
            await confirmPassword(resetCode, values.password);
            setPasswordResetLoading(false);
            // Redirect based on the user's role
            if (userRole === UserRoleEnum.WORKER) {
                navigate(routes.auth.mobileRedirect); // Redirect to the mobile redirect
            } else {
                navigate(routes.auth.login);
            }
        } catch (error) {
            setPasswordResetLoading(false);
            setErrorMessage("something went wrong, try sending another reset code");
        } finally {
            setPasswordResetLoading(false);
        }
    }

    return { passwordResetLoading, resetCode, resetPassword, errorMessage };
};
