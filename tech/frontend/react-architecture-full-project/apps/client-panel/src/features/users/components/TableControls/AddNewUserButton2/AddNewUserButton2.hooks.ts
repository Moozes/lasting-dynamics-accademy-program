import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormikErrors, FormikHelpers, validateYupSchema, yupToFormErrors } from "formik";
import { useAtom } from "jotai";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { UserRoleEnum, useTranslationV2 } from "ui";

import { WergonicUserError } from "@app-types/index";
import { authAtom } from "@atoms/index";
import { useUserForm1Schema, useUserForm2Schema } from "@features/users/hooks";
import { checkFieldExistance } from "@features/users/queries";
import { IAddNewUser } from "@features/users/types";
import { api, apiRoutes } from "@services/index";

const useInitialValues = () => {
    const [auth] = useAtom(authAtom);
    const currentWergonicUserId = auth.wergonicUser?.id;
    const initialValues: IAddNewUser = {
        // shared
        send_email_to_creator: true,
        // form1
        email: "",
        first_name: "",
        last_name: "",
        role: "",
        personal_number: "",
        unit: "",
        // form2
        weight: "",
        resting_heart_rate: "",
        dominant_arm: "",
        date_of_birth: "",
        gender: "",
        consultant_id: currentWergonicUserId,
    };
    return { initialValues };
};

const useCustomValidation = (validationSchema: yup.ObjectSchema<any>) => {
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

const useAddUserMutation = (setOpen: Dispatch<SetStateAction<boolean>>) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();
    const {
        mutate: addUser,
        isLoading,
        reset,
    } = useMutation({
        mutationFn: (data: IAddNewUser) => api.post(apiRoutes.auth.addNewUserRoute, data),
        onSuccess: () => {
            setOpen(false);
            queryClient.invalidateQueries({
                queryKey: ["users"],
            });
            enqueueSnackbar(t("users_management.add_new_user.user_create_success"));
            reset();
        },
        onError: (err: WergonicUserError) => {
            let message;
            if (err.response.data?.detail) {
                message = err.response.data?.detail;
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
            setOpen(false);
        },
    });
    return {
        addUser,
        isAddUserLoading: isLoading,
    };
};

export const useForm = () => {
    const [open, setOpen] = useState(false);
    const { addUser, isAddUserLoading } = useAddUserMutation(setOpen);
    const { initialValues } = useInitialValues();
    const [currentForm, setCurrentForm] = useState<1 | 2>(1);

    const { form1Schema } = useUserForm1Schema();
    const { form2Schema } = useUserForm2Schema();
    const validationSchema = currentForm === 1 ? form1Schema : form2Schema;
    const { customValidation } = useCustomValidation(validationSchema as any);

    const handleSubmit = (values: IAddNewUser, helpers: FormikHelpers<IAddNewUser>) => {
        if (values.role === UserRoleEnum.WORKER && currentForm === 1) {
            setCurrentForm(2);
            helpers.setTouched({});
        } else {
            addUser(values);
        }
        helpers.setSubmitting(false);
    };

    useEffect(() => {
        setCurrentForm(1);
    }, [open]);

    return {
        open,
        setOpen,
        currentForm,
        setCurrentForm,
        initialValues,
        validate: customValidation,
        handleSubmit,
        isAddUserLoading,
    };
};
