import { FormikErrors, validateYupSchema, yupToFormErrors } from "formik";
import { useAtom } from "jotai";
import * as Yup from "yup";

import { useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";
import { checkFieldExistance } from "@features/users/queries";
import { useAddNewUserSchema } from "@features/users/schemas";
import { IAddNewUser } from "@features/users/types";

export const useAddNewUserForm = () => {
    const [auth] = useAtom(authAtom);
    const currentWergonicUserId = auth.wergonicUser?.id;
    const newUserInitialValues: IAddNewUser = {
        email: "",
        first_name: "",
        last_name: "",
        role: "",
        personal_number: "",
        unit: "",
        send_email_to_creator: true,
        weight: "",
        resting_heart_rate: "",
        dominant_arm: "",
        date_of_birth: "",
        gender: "",
        consultant_id: currentWergonicUserId,
    };
    const { AddNewUserSchema: newUserValidationSchema } = useAddNewUserSchema();
    return { newUserInitialValues, newUserValidationSchema };
};

export const useCustomValidation = (validationSchema: Yup.ObjectSchema<any>) => {
    const [auth] = useAtom(authAtom);
    const currentOrgId = auth.wergonicUser?.organization?.id;
    const t = useTranslationV2();
    const alreadyExistsString = t("users_management.already_exists");
    return {
        customValidation: async (values: IAddNewUser) => {
            let errors: FormikErrors<IAddNewUser> = {};

            // validation using yup schema---
            try {
                await validateYupSchema(values, validationSchema);
            } catch (e: any) {
                // Turn yup error to a usable object like: {first_name: "required", age: "must be a number"...}
                errors = yupToFormErrors<IAddNewUser>(e);
            }

            // validating if some fields already exist in database
            // these two dont throw errors, they are handled internally
            const emailExists = await checkFieldExistance("email", values.email, currentOrgId);
            const personalNumberExists = await checkFieldExistance(
                "personal_number",
                values.personal_number,
                currentOrgId
            );

            // concatinate existance error messages schema errors messages
            if (emailExists)
                errors.email = errors.email ? `${errors.email}, ${alreadyExistsString}` : alreadyExistsString;
            if (personalNumberExists)
                errors.personal_number = errors.personal_number
                    ? `${errors.personal_number}, ${alreadyExistsString}`
                    : alreadyExistsString;

            return errors;
        },
    };
};
