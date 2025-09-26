import { useAtomValue } from "jotai";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";

export const useSettingsModal2Form = () => {
    const auth = useAtomValue(authAtom);
    const user = { ...auth.wergonicUser };
    // handle null values, because input values doesnt accept null
    user.unit = user.unit || "";
    if (user.profile) {
        user.profile[0].date_of_birth = user.profile[0].date_of_birth || "";
        user.profile[0].weight = user.profile[0].weight || "";
        user.profile[0].dominant_arm = user.profile[0].dominant_arm || "";
        user.profile[0].resting_heart_rate = user.profile[0].resting_heart_rate || "";
    }

    const t = useTranslationV2();
    const initialValues = user;
    const validationSchema = yup.object({
        email: yup.string().email(t("formik.email_format_error")),
        first_name: yup.string().max(150, `${t("First Name")} ${t("is_too_long")}`),
        last_name: yup.string().max(150, `${t("Last Name")} ${t("is_too_long")}`),
        personal_number: yup
            .string()
            .max(150, `${t("Phone")} ${t("is_too_long")}`)
            .matches(
                /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
                t("formik.Phone_number_format_error") as string
            ),
        unit: yup.string().max(150, `${t("Unit")} ${t("is_too_long")}`),
        weight: yup.string().max(150, `${t("weight")} ${t("is_too_long")}`),
        resting_heart_rate: yup.string().max(150, `${t("resting heart rate")} ${t("is_too_long")}`),
        dominant_arm: yup.string().max(150, `${t("dominant arm")} ${t("is_too_long")}`),
        date_of_birth: yup.string().max(150, `${t("date of birth")} ${t("is_too_long")}`),
        ai_consent: yup
            .boolean()
            .transform((value) => value === "on" || value === true)
            .required(),
    });
    return { initialValues, validationSchema };
};
