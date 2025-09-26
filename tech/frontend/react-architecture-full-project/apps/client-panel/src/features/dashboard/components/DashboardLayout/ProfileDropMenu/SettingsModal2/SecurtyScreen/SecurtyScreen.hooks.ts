/* eslint-disable no-useless-escape */
import * as yup from "yup";

import { useTranslationV2 } from "ui";

export const useForm = () => {
    const t = useTranslationV2();
    return {
        initialValues: {
            password: "",
            new_password: "",
            password_confirmation: "",
        },
        validationSchame: yup.object({
            password: yup.string().required(t("formik.password_required_error")),
            new_password: yup
                .string()
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    t("formik.password_format_error")
                )
                .required(t("formik.password_required_error")),
            password_confirmation: yup
                .string()
                .oneOf([yup.ref("new_password"), ""], t("formik.password_match_error"))
                .required(t("formik.password_required_error")),
        }),
    };
};
