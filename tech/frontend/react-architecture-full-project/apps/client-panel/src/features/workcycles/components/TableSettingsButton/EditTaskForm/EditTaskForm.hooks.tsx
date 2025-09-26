import { Dispatch, SetStateAction, useState } from "react";
import { Row } from "react-table";
import { useQueryClient } from "@tanstack/react-query";
import { FormikConfig, FormikValues } from "formik";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { TFactory, TLine, TTask, TTaskModel, TWorkstation } from "@app-types/index";
import {
    useGetAllFactoriesQuery,
    useGetAllLinesQuery,
    useGetAllTaskModelsQuery,
    useGetAllWorkstationsQuery,
    useUpdateTaskMutation,
} from "@queries/index";

export const useEditTaskForm = (row: Row<TTask>, setModalOpen: Dispatch<SetStateAction<boolean>>) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const task = row.original;
    const [currentFactoryId, setCurrentFactoryId] = useState(
        task.task_model?.workstation?.line?.factory?.id?.toString() || ""
    );
    const [currentLineId, setCurrentLineId] = useState(task.task_model?.workstation?.line?.id?.toString() || "");
    const [currentWorkstationId, setCurrentWorkstationId] = useState(
        task.task_model?.workstation?.id?.toString() || ""
    );

    const queryClient = useQueryClient();

    const { mutate, isLoading } = useUpdateTaskMutation({
        onSuccess: () => {
            setModalOpen(false);
            enqueueSnackbar(t("workcycles.task_update_success"), { severity: "success" });
            queryClient.invalidateQueries(["workcycles", "tasks"]);
        },
        onError: (err: any) => {
            const message = err.response?.data?.detail || t("Something_went_Wrong");
            enqueueSnackbar(message, { severity: "error" });
        },
    });

    // Queries
    const { data: factoriesData } = useGetAllFactoriesQuery({});
    const { data: linesData } = useGetAllLinesQuery({
        URLFactoryId: currentFactoryId,
    });
    const { data: workstationsData } = useGetAllWorkstationsQuery({
        URLLineId: currentLineId,
    });
    const { data: taskModelsData } = useGetAllTaskModelsQuery({
        URLWorkstationId: currentWorkstationId,
    });

    // Populate options
    const factoryOptions =
        factoriesData?.data.map((factory: TFactory) => ({
            value: factory.id,
            label: factory.name,
        })) || [];

    const lineOptions =
        linesData?.data.map((line: TLine) => ({
            value: line.id,
            label: line.name,
        })) || [];

    const workstationOptions =
        workstationsData?.data.map((workstation: TWorkstation) => ({
            value: workstation.id,
            label: workstation.name,
        })) || [];

    const taskModelOptions =
        taskModelsData?.data.map((taskModel: TTaskModel) => ({
            value: taskModel.id,
            label: taskModel.name,
        })) || [];

    const handleChange = (values: FormikValues) => {
        if (values.factory && values.factory !== currentFactoryId) {
            setCurrentFactoryId(values.factory);
        }

        if (values.line && values.line !== currentLineId) {
            setCurrentLineId(values.line);
        }

        if (values.workstation && values.workstation !== currentWorkstationId) {
            setCurrentWorkstationId(values.workstation);
        }
    };

    const initialValues = {
        factory: task.task_model?.workstation?.line?.factory?.id?.toString() || "",
        line: task.task_model?.workstation?.line?.id?.toString() || "",
        workstation: task.task_model?.workstation?.id?.toString() || "",
        task_model: task.task_model?.id?.toString() || "",
        name: task.name || "",
        duration: task.duration || 0,
    };

    const validationSchema = yup.object({
        factory: yup.string().required(t("formik.factory_required_error")),
        line: yup.string().required(t("formik.linerequired_error")),
        workstation: yup.string().required(t("formik.workstation_required_error")),
        task_model: yup.string().required(t("formik.task_mode_required_error")),
        name: yup.string().required(t("formik.name_required_error")),
        duration: yup.number().min(0, t("formik.field_must_be_positive")),
    });

    const onSubmit: FormikConfig<typeof initialValues>["onSubmit"] = (values) => {
        mutate({
            id: task.id,
            task_model: Number(values.task_model),
            name: values.name,
            duration: values.duration,
        });
    };

    return {
        initialValues,
        validationSchema,
        onSubmit,
        isLoading,
        factoryOptions,
        lineOptions,
        workstationOptions,
        taskModelOptions,
        handleChange,
    };
};
