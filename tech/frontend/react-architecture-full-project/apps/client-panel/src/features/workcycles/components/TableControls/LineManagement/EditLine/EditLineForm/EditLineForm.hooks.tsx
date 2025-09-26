import { Dispatch, SetStateAction } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FormikConfig } from "formik";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { TFactory, TLine } from "@app-types/index";
import { useGetAllFactoriesQuery, useUpdateLineMutation } from "@queries/index";

export const useEditLineForm = (
    item: TLine,
    setModalOpen: Dispatch<SetStateAction<boolean>>,
    onModalClose: () => void
) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();

    const { mutate, isLoading } = useUpdateLineMutation({
        onSuccess: () => {
            queryClient.invalidateQueries(["workcycles", "lines"]);
            queryClient.invalidateQueries(["workcycles", "tasks"]);
            setModalOpen(false);
            enqueueSnackbar(t("workcycles.line_update_success"), { severity: "success" });
            onModalClose();
        },
        onError: () => {
            enqueueSnackbar(t("Something_went_Wrong"), { severity: "error" });
            setModalOpen(false);
            onModalClose();
        },
    });

    const { data: factoriesData } = useGetAllFactoriesQuery({});

    const factoryOptions =
        factoriesData?.data.map((factory: TFactory) => ({
            value: factory.id,
            label: factory.name,
        })) || [];

    const initialValues = {
        factory: item.factory?.id?.toString() || "",
        name: item.name || "",
    };

    const validationSchema = yup.object({
        factory: yup.string().required(t("formik.factory_required_error")),
        name: yup.string().required(t("formik.line_required_errro")),
    });

    const onSubmit: FormikConfig<typeof initialValues>["onSubmit"] = (values) => {
        mutate({
            id: item.id,
            factory: Number(values.factory),
            name: values.name,
        });
    };

    return {
        initialValues,
        validationSchema,
        onSubmit,
        isLoading,
        factoryOptions,
    };
};
