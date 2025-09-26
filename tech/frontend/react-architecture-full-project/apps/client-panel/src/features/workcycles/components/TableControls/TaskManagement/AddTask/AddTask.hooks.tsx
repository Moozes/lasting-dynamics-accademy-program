import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FormikConfig, FormikValues } from "formik";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { TAddTaskFormValues, TFactory, TLine, TTaskModel, TWorkstation } from "@app-types/index";
import {
    useAddTaskMutation,
    useGetAllFactoriesQuery,
    useGetAllLinesQuery,
    useGetAllTaskModelsQuery,
    useGetAllWorkstationsQuery,
} from "@queries/index";

export const useAddTaskForm = () => {
    const t = useTranslationV2();
    const initialValues: TAddTaskFormValues = {
        name: "",
        factory: 0,
        line: 0,
        workstation: 0,
        task_model: 0,
        duration: 0,
    };
    const validationSchema = yup.object({
        name: yup.string().required(t("formik.name_required_error")),
        duration: yup.number().required(t("formik.duration_required_error")),
        factory: yup.number().required(t("formik.factory_required_error")).min(1, t("formik.factory_required_error")),
        line: yup.number().required(t("formik.line_required_error")).min(1, t("formik.line_required_error")),
        workstation: yup
            .number()
            .required(t("formik.workstation_required_error"))
            .min(1, t("formik.workstation_required_error")),
        task_model: yup
            .number()
            .required(t("formik.task_model_required_error"))
            .min(1, t("formik.task_model_required_error")),
    });

    return { initialValues, validationSchema };
};

export const useForms = () => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const [modalOpen, setModalOpen] = useState(false);
    const { initialValues, validationSchema } = useAddTaskForm();
    const [currentFactoryId, setCurrentFactoryId] = useState<string | undefined>(undefined);
    const [currentLineId, setCurrentLineId] = useState<string | undefined>(undefined);
    const [currentWorkstationId, setCurrentWorkstationId] = useState<string | undefined>(undefined);

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

    const { data: taskModelsResponse } = useGetAllTaskModelsQuery({
        URLWorkstationId: currentWorkstationId,
    });

    const taskModelOptions =
        taskModelsResponse?.data?.map((taskModel: TTaskModel) => ({
            value: taskModel.id.toString(),
            label: taskModel.name,
        })) || [];

    const queryClient = useQueryClient();

    const { mutate: addTask, isLoading } = useAddTaskMutation({
        onSuccess: () => {
            queryClient.invalidateQueries(["workcycles", "tasks"]);
            setModalOpen(false);
            enqueueSnackbar(t("workcycles.task_create_success"), { severity: "success" });
        },
        onError: () => {
            enqueueSnackbar(t("Something_went_Wrong"), { severity: "error" });
        },
    });

    const onSubmit: FormikConfig<TAddTaskFormValues>["onSubmit"] = (values) => {
        addTask({
            name: values.name,
            duration: Number(values.duration),
            task_model: Number(values.task_model),
        });
    };

    const handleChange = (values: FormikValues) => {
        if (values.factory) {
            setCurrentFactoryId(values.factory);
        }

        if (values.line) {
            setCurrentLineId(values.line);
        }

        if (values.workstation) {
            setCurrentWorkstationId(values.workstation);
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
        taskModelOptions,
        handleChange,
    };
};
