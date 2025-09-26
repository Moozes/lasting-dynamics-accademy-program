import { Dispatch, SetStateAction, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FormikConfig, FormikValues } from "formik";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { TFactory, TLine, TTaskModel, TWorkstation } from "@app-types/index";
import {
    useGetAllFactoriesQuery,
    useGetAllLinesQuery,
    useGetAllWorkstationsQuery,
    useUpdateTaskModelMutation,
} from "@queries/index";

export const useEditTaskModelForm = (
    item: TTaskModel,
    setModalOpen: Dispatch<SetStateAction<boolean>>,
    onModalClose: () => void
) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const [currentFactoryId, setCurrentFactoryId] = useState(item.workstation?.line?.factory?.id?.toString() || "");
    const [currentLineId, setCurrentLineId] = useState(item.workstation?.line?.id?.toString() || "");

    const queryClient = useQueryClient();

    const { mutate, isLoading } = useUpdateTaskModelMutation({
        onSuccess: () => {
            queryClient.invalidateQueries(["workcycles", "models"]);
            queryClient.invalidateQueries(["workcycles", "tasks"]);
            setModalOpen(false);
            enqueueSnackbar(t("workcycles.task_model_update_success"), { severity: "success" });
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

    // Queries
    const { data: factoriesData } = useGetAllFactoriesQuery({});
    const { data: linesData } = useGetAllLinesQuery({
        URLFactoryId: currentFactoryId,
    });
    const { data: workstationsData } = useGetAllWorkstationsQuery({
        URLLineId: currentLineId,
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

    const handleChange = (values: FormikValues) => {
        if (values.factory && values.factory !== currentFactoryId) {
            setCurrentFactoryId(values.factory);
        }

        if (values.line && values.line !== currentLineId) {
            setCurrentLineId(values.line);
        }
    };

    const initialValues = {
        factory: item.workstation?.line?.factory?.id?.toString() || "",
        line: item.workstation?.line?.id?.toString() || "",
        workstation: item.workstation?.id?.toString() || "",
        name: item.name || "",
    };

    const validationSchema = yup.object({
        factory: yup.string().required(t("formik.factory_required_error")),
        line: yup.string().required(t("formik.line_required_error")),
        workstation: yup.string().required(t("formik.workstation_required_error")),
        name: yup.string().required(t("formik.name_required_error")),
    });

    const onSubmit: FormikConfig<typeof initialValues>["onSubmit"] = (values) => {
        mutate({
            id: item.id,
            workstation: Number(values.workstation),
            name: values.name,
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
        handleChange,
    };
};
