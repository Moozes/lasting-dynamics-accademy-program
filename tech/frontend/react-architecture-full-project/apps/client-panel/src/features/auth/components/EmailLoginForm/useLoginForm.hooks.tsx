import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { WergonicUserError } from "@app-types/index";
import { useMagicLinkMutation } from "@features/auth/api";
import { useEmailSigninSchema } from "@features/auth/schemas";
import routes from "@routes/routes";

export const useEmailLoginForm = () => {
    const loginInitialValues = { email: "" };
    const { signinSchema: loginValidationSchema } = useEmailSigninSchema();
    return { loginInitialValues, loginValidationSchema };
};

export const useEmailSignIn = () => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const {
        mutate: emailSignIn,
        isLoading,
        reset,
    } = useMagicLinkMutation({
        onSuccess: () => {
            enqueueSnackbar(t("auth.login.Magic_Link_Success_Message"));
            navigate(routes.auth.login);
            reset();
        },
        onError: (err: WergonicUserError) => {
            let message;
            if (err.response?.data?.detail) {
                message = err.response.data.detail;
            } else if (err.response?.data?.error) {
                if (err.response.data.error === "User not found.") {
                    message = t("auth.login.user_not_found");
                } else {
                    message = err.response.data.error;
                }
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
        },
    });

    return { isLoading, emailSignIn };
};
