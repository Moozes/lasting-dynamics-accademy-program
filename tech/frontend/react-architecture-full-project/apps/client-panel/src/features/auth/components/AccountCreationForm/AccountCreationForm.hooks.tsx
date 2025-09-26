import * as yup from "yup";

import { useTranslationV2 } from "ui";

const useAccountCreationForm = () => {
    const t = useTranslationV2();
    const accountCreationInitialValues = { email: "" };
    const accountCreationValidationSchema = yup.object({
        email: yup.string().email(t("formik.email_format_error")).required(t("formik.email_required_error")),
    });
    return { accountCreationInitialValues, accountCreationValidationSchema };
};

export default useAccountCreationForm;
