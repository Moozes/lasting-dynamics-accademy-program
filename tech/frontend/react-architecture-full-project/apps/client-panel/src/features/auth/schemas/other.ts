/* eslint-disable no-useless-escape */
import * as yup from "yup";

import { useTranslationV2 } from "ui";

export const useSigninSchema = () => {
    const t = useTranslationV2();
    return {
        signinSchema: yup.object({
            password: yup
                .string()
                .required(t("formik.password_required_error"))
                .min(8, t("formik.password_length_error")),
            email: yup.string().email(t("formik.email_format_error")).required(t("formik.email_required_error")),
        }),
    };
};

export const useEmailSigninSchema = () => {
    const t = useTranslationV2();
    return {
        signinSchema: yup.object({
            email: yup.string().email(t("formik.email_format_error")).required(t("formik.email_required_error")),
        }),
    };
};

export const usePasswordConfirmationSchema = () => {
    const t = useTranslationV2();
    return {
        passwordConfirmationSchema: yup.object({
            password: yup
                .string()
                .required(t("formik.password_required_error"))
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    t("formik.password_format_error")
                ),
            "password confirmation": yup
                .string()
                .required()
                .oneOf([yup.ref("password"), ""], t("formik.password_match_error")),
        }),
    };
};
