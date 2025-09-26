import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FormikConfig, FormikValues } from "formik";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { TAddTaskModelFormValues, TFactory, TLine, TWorkstation } from "@app-types/index";
import {
    useAddTaskModelMutation,
    useGetAllFactoriesQuery,
    useGetAllLinesQuery,
    useGetAllWorkstationsQuery,
} from "@queries/index";

export const useAddModelForm = () => {
    const t = useTranslationV2();
    const initialValues: TAddTaskModelFormValues = {
        name: "",
        factory: 0,
        line: 0,
        workstation: 0,
    };
    const validationSchema = yup.object({
        name: yup.string().required(t("formik.name_required_error")),
        factory: yup.number().required(t("formik.factory_required_error")).min(1, t("formik.factory_required_error")),
        line: yup.number().required(t("formik.line_required_error")).min(1, t("formik.line_required_error")),
        workstation: yup
            .number()
            .required(t("formik.workstation_required_error"))
            .min(1, t("formik.workstation_required_error")),
    });

    return { initialValues, validationSchema };
};

export const useForms = () => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const [modalOpen, setModalOpen] = useState(false);
    const { initialValues, validationSchema } = useAddModelForm();
    const [currentFactoryId, setCurrentFactoryId] = useState<string | undefined>(undefined);
    const [currentLineId, setCurrentLineId] = useState<string | undefined>(undefined);
    const queryClient = useQueryClient();

    const { data: linesResponse } = useGetAllLinesQuery({
        URLFactoryId: currentFactoryId,
    });

    const lineOptions =
        linesResponse?.data?.map((line: TLine) => ({
            value: line.id.toString(),
            label: line.name,
        })) || [];

    const { data: factoriesResponse } = useGetAllFactoriesQuery({});
    const factoryOptions =
        factoriesResponse?.data?.map((factory: TFactory) => ({
            value: factory.id?.toString(),
            label: factory.name,
        })) || [];

    const { data: workstationsResponse } = useGetAllWorkstationsQuery({
        URLLineId: currentLineId,
    });

    const workstationOptions =
        workstationsResponse?.data?.map((workstation: TWorkstation) => ({
            value: workstation.id.toString(),
            label: workstation.name,
        })) || [];

    const { mutate: addTaskModel, isLoading } = useAddTaskModelMutation({
        onSuccess: () => {
            setModalOpen(false);
            enqueueSnackbar(t("workcycles.model_create_success"), { severity: "success" });
            queryClient.invalidateQueries(["workcycles", "models"]);
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

    const onSubmit: FormikConfig<TAddTaskModelFormValues>["onSubmit"] = (values) => {
        addTaskModel({ name: values.name, workstation: Number(values.workstation) });
    };

    const handleChange = (values: FormikValues) => {
        if (values.factory) {
            setCurrentFactoryId(values.factory);
        }

        if (values.line) {
            setCurrentLineId(values.line);
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
        workstationOptions,
        handleChange,
    };
};
