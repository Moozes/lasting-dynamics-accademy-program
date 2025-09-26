import { Dispatch, SetStateAction } from "react";
import { useMutation } from "@tanstack/react-query";
import { FormikConfig } from "formik";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { resetPassword } from "@queries/index";

const useResetPasswordMutation = (setModalOpen: Dispatch<SetStateAction<boolean>>) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();

    return useMutation({
        mutationFn: (email: string) => resetPassword(email),
        onSuccess: () => {
            enqueueSnackbar(t("queries.action_email_sent_success", { action: t("queries.actions.password_reset") }));
        },
        onError: () => {
            enqueueSnackbar(t("queries.something_went_wrong"), { severity: "error" });
        },
        onSettled: () => {
            setModalOpen(false);
        },
    });
};

export const useResetPasswordForm = (setModalOpen: Dispatch<SetStateAction<boolean>>, email: string) => {
    const t = useTranslationV2();
    const { mutate, isLoading } = useResetPasswordMutation(setModalOpen);

    const initialValues = { email };

    const validationSchema = yup.object({
        email: yup
            .string()
            .email(t<string>("formik.invalid_filed_format", { field: t("formik.fields.email") }))
            .required(t<string>("formik.field_is_required", { field: t("formik.fields.email") })),
    });

    const onSubmit: FormikConfig<typeof initialValues>["onSubmit"] = (values) => {
        mutate(values.email);
    };

    return { initialValues, validationSchema, onSubmit, isLoading };
};
