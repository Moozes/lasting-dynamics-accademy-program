import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FormikConfig } from "formik";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { TFactory } from "@app-types/index";
import { useAddFactoryMutation } from "@queries/index";

export const useAddFactoryForm = () => {
    const t = useTranslationV2();
    const initialValues: TFactory = {
        name: "",
    };
    const validationSchema = yup.object({
        name: yup.string().required(t("formik.name_required_error")),
    });
    return { initialValues, validationSchema };
};

export const useForms = () => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const [modalOpen, setModalOpen] = useState(false);
    const { initialValues, validationSchema } = useAddFactoryForm();
    const queryClient = useQueryClient();

    const { mutate: addFactory, isLoading } = useAddFactoryMutation({
        onSuccess: () => {
            setModalOpen(false);
            enqueueSnackbar(t("workcycles.factory_create_success"));
            queryClient.invalidateQueries(["workcycles", "factories"]);
        },
        onError: (err: any) => {
            let message;
            if (err.response?.data?.detail) {
                message = err.response.data.detail;
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
        },
    });

    const onSubmit: FormikConfig<TFactory>["onSubmit"] = (values) => {
        addFactory(values);
    };

    return {
        modalOpen,
        setModalOpen,
        initialValues,
        validationSchema,
        onSubmit,
        isLoading,
    };
};
