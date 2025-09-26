/* eslint-disable no-useless-escape */
import { add } from "date-fns";
import * as yup from "yup";

import { UserRoleEnum, useTranslationV2 } from "ui";

export const useAddNewUserSchema = () => {
    const t = useTranslationV2();
    return {
        AddNewUserSchema: yup.object({
            email: yup.string().email(t("formik.email_format_error")).required(t("formik.email_required_error")),
            first_name: yup
                .string()
                .max(150, `${t("First Name")} ${t("is_too_long")}`)
                .required(`${t("First Name")} ${t("is_required")}`),
            last_name: yup
                .string()
                .max(150, `${t("Last Name")} ${t("is_too_long")}`)
                .required(`${t("Last Name")} ${t("is_required")}`),
            personal_number: yup
                .string()
                .max(150, `${t("Phone")} ${t("is_too_long")}`)
                .matches(
                    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
                    t("formik.Phone_number_format_error") as string
                ),
            unit: yup.string().max(150, `${t("Unit")} ${t("is_too_long")}`),
            role: yup
                .string()
                .oneOf([UserRoleEnum.ORG_ADMIN, UserRoleEnum.ERGONOMIST, UserRoleEnum.WORKER])
                .required(`${t("Role")} ${t("is_required")}`),
            send_email_to_creator: yup.boolean(),
            weight: yup
                .string()
                .max(150, `${t("weight")} ${t("is_too_long")}`)
                .matches(/^(\d+(?:\.\d+)?)$/, t("formik.weight_format_error") as string),
            resting_heart_rate: yup.string().max(150, `${t("resting heart rate")} ${t("is_too_long")}`),
            dominant_arm: yup.string().max(150, `${t("dominant arm")} ${t("is_too_long")}`),
            date_of_birth: yup.date().max(add(new Date(), { years: 10 }), `${t("formik.max_date_exceeded")}`),
            gender: yup.string().oneOf(["MALE", "FEMALE", "OTHER"]),
            consultant_id: yup.number().min(0),
        }),
    };
};
