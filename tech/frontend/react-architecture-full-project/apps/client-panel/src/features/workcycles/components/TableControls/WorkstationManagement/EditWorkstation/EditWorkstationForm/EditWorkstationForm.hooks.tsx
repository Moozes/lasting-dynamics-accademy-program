import { Dispatch, SetStateAction, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FormikConfig, FormikValues } from "formik";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { TFactory, TLine, TWorkstation } from "@app-types/index";
import { useGetAllFactoriesQuery, useGetAllLinesQuery, useUpdateWorkstationMutation } from "@queries/index";

export const useEditWorkstationForm = (
    item: TWorkstation,
    setModalOpen: Dispatch<SetStateAction<boolean>>,
    onModalClose: () => void
) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const [currentFactoryId, setCurrentFactoryId] = useState(item.line?.factory?.id?.toString() || "");

    const queryClient = useQueryClient();

    const { mutate, isLoading } = useUpdateWorkstationMutation({
        onSuccess: () => {
            setModalOpen(false);
            enqueueSnackbar(t("workcycles.workstation_update_success"), { severity: "success" });
            queryClient.invalidateQueries(["workcycles", "workstations"]);
            queryClient.invalidateQueries(["workcycles", "tasks"]);
            onModalClose();
        },
        onError: (err: any) => {
            const message = err.response?.data?.detail || t("Something_went_Wrong");
            enqueueSnackbar(message, { severity: "error" });
            onModalClose();
        },
    });

    // Queries
    const { data: factoriesData } = useGetAllFactoriesQuery({});
    const { data: linesData } = useGetAllLinesQuery({
        URLFactoryId: currentFactoryId,
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

    const handleChange = (values: FormikValues) => {
        if (values.factory && values.factory !== currentFactoryId) {
            setCurrentFactoryId(values.factory);
        }
    };

    const initialValues = {
        factory: item.line?.factory?.id?.toString() || "",
        line: item.line?.id?.toString() || "",
        name: item.name || "",
    };

    const validationSchema = yup.object({
        factory: yup.string().required(t("formik.factory_required_error")),
        line: yup.string().required(t("formik.line_required_error")),
        name: yup.string().required(t("formik.name_required_error")),
    });

    const onSubmit: FormikConfig<typeof initialValues>["onSubmit"] = (values) => {
        mutate({
            id: item.id,
            line: Number(values.line),
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
        handleChange,
    };
};
