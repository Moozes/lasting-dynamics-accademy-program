import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FormikConfig } from "formik";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { TAddLine, TFactory } from "@app-types/index";
import { useAddLineMutation, useGetAllFactoriesQuery } from "@queries/index";

export const useAddLineForm = () => {
    const t = useTranslationV2();
    const initialValues: TAddLine = {
        name: "",
        factory: 0,
    };
    const validationSchema = yup.object({
        name: yup.string().required(t("formik.name_required_error")),
        factory: yup.number().required(t("formik.factory_required_error")).min(1, t("formik.factory_required_error")),
    });
    return { initialValues, validationSchema };
};

export const useForms = () => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const [modalOpen, setModalOpen] = useState(false);
    const { initialValues, validationSchema } = useAddLineForm();
    const queryClient = useQueryClient();
    const { data: factoriesResponse } = useGetAllFactoriesQuery({});

    const factoryOptions =
        factoriesResponse?.data?.map((factory: TFactory) => {
            return {
                value: factory.id?.toString(),
                label: factory.name,
            };
        }) || [];

    const { mutate: addLine, isLoading } = useAddLineMutation({
        onSuccess: () => {
            setModalOpen(false);
            enqueueSnackbar(t("workcycles.line_create_success"));
            queryClient.invalidateQueries(["workcycles", "lines"]);
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

    const onSubmit: FormikConfig<TAddLine>["onSubmit"] = (values) => {
        addLine({ name: values.name, factory: Number(values.factory) });
    };

    return {
        modalOpen,
        setModalOpen,
        initialValues,
        validationSchema,
        onSubmit,
        isLoading,
        factoryOptions,
    };
};
