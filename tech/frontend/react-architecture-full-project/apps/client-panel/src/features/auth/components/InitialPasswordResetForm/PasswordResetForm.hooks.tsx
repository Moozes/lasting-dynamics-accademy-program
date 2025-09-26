import { useState } from "react";
import { t } from "i18next";
import { useAtomValue } from "jotai";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";
import { api, apiRoutes } from "@services/index";

export const usePasswordResetForm = () => {
    const translate = useTranslationV2();
    const auth = useAtomValue(authAtom);
    const PasswordResetInitialValues = { email: auth.user?.email || "" };
    const PasswordResetValidationSchema = yup.object({
        email: yup
            .string()
            .email(translate("formik.email_format_error"))
            .required(translate("formik.email_required_error")),
    });
    return { PasswordResetInitialValues, PasswordResetValidationSchema };
};

export const useSendResetCodeEmail = () => {
    const [emailSentLoading, setEmailSentLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");
    const { enqueueSnackbar } = useSnackbar();

    async function sendRestCodeEmail(email: string) {
        try {
            setEmailSentLoading(true);
            await api.post(apiRoutes.auth.passwordReset, { email });
            setEmailSentLoading(false);
            setSuccessMessage("Reset Password email has been sent.");
            enqueueSnackbar(t("auth.init_reset_password.reset_password_message_sent"), { variant: "success" });
        } catch (error) {
            setEmailSentLoading(false);
            setErrorMessage("Something went wrong when sending the email.");
            enqueueSnackbar(t("auth.init_reset_password.something_went_wrong"), { severity: "error" });
        } finally {
            setEmailSentLoading(false);
        }
    }

    return { emailSentLoading, errorMessage, successMessage, sendRestCodeEmail };
};
