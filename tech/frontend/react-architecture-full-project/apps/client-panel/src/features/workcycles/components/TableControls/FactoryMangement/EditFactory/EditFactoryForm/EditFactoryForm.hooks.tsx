import { Dispatch, SetStateAction } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FormikConfig } from "formik";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { TFactory } from "@app-types/index";
import { useUpdateFactoryMutation } from "@queries/index";

export const useEditFactoryForm = (
    item: TFactory,
    setModalOpen: Dispatch<SetStateAction<boolean>>,
    onModalClose: () => void
) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();

    const { mutate, isLoading } = useUpdateFactoryMutation({
        onSuccess: () => {
            queryClient.invalidateQueries(["workcycles", "factories"]);
            queryClient.invalidateQueries(["workcycles", "tasks"]);
            setModalOpen(false);
            enqueueSnackbar(t("workcycles.factory_update_success"), { severity: "success" });
            onModalClose();
        },
        onError: (err: any) => {
            let message;
            if (err.response?.data?.detail) {
                message = err.response.data.detail;
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
            onModalClose();
        },
    });

    const initialValues = {
        name: item.name || "",
    };

    const validationSchema = yup.object({
        name: yup.string().required(t("formik.name_is_required")),
    });

    const onSubmit: FormikConfig<typeof initialValues>["onSubmit"] = (values) => {
        if (item.id) {
            mutate({
                id: item.id,
                name: values.name,
            });
        }
    };

    return {
        initialValues,
        validationSchema,
        onSubmit,
        isLoading,
    };
};
