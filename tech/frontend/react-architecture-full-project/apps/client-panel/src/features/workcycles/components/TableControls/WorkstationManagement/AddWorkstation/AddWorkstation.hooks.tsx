import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FormikConfig, FormikValues } from "formik";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { TAddWorkstationFormValues, TFactory, TLine } from "@app-types/index";
import { useAddWorkstationMutation, useGetAllFactoriesQuery, useGetAllLinesQuery } from "@queries/index";

export const useAddWorkstationForm = () => {
    const t = useTranslationV2();
    const initialValues: TAddWorkstationFormValues = {
        name: "",
        factory: 0,
        line: 0,
    };
    const validationSchema = yup.object({
        name: yup.string().required(t("formik.name_required_error")),
        factory: yup.number().required(t("formik.factory_required_error")).min(1, t("formik.factory_required_error")),
        line: yup.number().required(t("formik.line_required_error")).min(1, t("formik.line_required_error")),
    });

    return { initialValues, validationSchema };
};

export const useForms = () => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const [modalOpen, setModalOpen] = useState(false);
    const { initialValues, validationSchema } = useAddWorkstationForm();
    const [currentFactoryId, setCurrentFactoryId] = useState<string | undefined>(undefined);
    const queryClient = useQueryClient();

    const { data: linesResponse } = useGetAllLinesQuery({
        URLFactoryId: currentFactoryId,
    });

    const lineOptions =
        linesResponse?.data?.map((line: TLine) => ({
            value: line.id,
            label: line.name,
        })) || [];

    const { data: factoriesResponse } = useGetAllFactoriesQuery({});
    const factoryOptions =
        factoriesResponse?.data?.map((factory: TFactory) => ({
            value: factory.id || "",
            label: factory.name,
        })) || [];

    const { mutate: addWorkstation, isLoading } = useAddWorkstationMutation({
        onSuccess: () => {
            setModalOpen(false);
            enqueueSnackbar(t("workcycles.workstation_create_success"), { severity: "success" });
            queryClient.invalidateQueries(["workcycles", "workstations"]);
        },
        onError: (err: any) => {
            const message = err.response?.data?.detail || t("Something_went_Wrong");
            enqueueSnackbar(message, { severity: "error" });
        },
    });

    const onSubmit: FormikConfig<TAddWorkstationFormValues>["onSubmit"] = (values) => {
        addWorkstation({ name: values.name, line: Number(values.line) });
    };

    const handleChange = (values: FormikValues) => {
        if (values.factory) {
            setCurrentFactoryId(values.factory);
        }
    };

    return {
        modalOpen,
        setModalOpen,
        initialValues,
        validationSchema,
        onSubmit,
        isLoading,
        lineOptions,
        factoryOptions,
        handleChange,
    };
};
