import * as Yup from "yup";

import { useTranslationV2 } from "ui";

const useInviteWorkerForm = () => {
    const t = useTranslationV2();
    const initialValues = { email: "" };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email(t("formik.email_format_error")).required(t("formik.email_required_error")),
    });

    return { initialValues, validationSchema };
};

export default useInviteWorkerForm;
