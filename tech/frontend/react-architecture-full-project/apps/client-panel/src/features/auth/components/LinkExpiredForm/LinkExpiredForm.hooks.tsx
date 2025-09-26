import * as yup from "yup";

import { useTranslationV2 } from "ui";

const useLinkExpiredForm = () => {
    const t = useTranslationV2();
    const ExpiredLinkInitialValues = { email: "" };
    const ExpiredLinkValidationSchema = yup.object({
        email: yup.string().email(t("formik.email_format_error")).required(t("formik.email_required_error")),
    });
    return { ExpiredLinkInitialValues, ExpiredLinkValidationSchema };
};

export default useLinkExpiredForm;
