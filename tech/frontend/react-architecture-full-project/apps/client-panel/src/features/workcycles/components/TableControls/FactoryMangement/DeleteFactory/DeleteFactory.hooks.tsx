import { Dispatch, SetStateAction } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { TFactory } from "@app-types/index";
import { useDeleteFactoryMutation, useGetAllFactoriesQuery } from "@queries/index";

export const useDeleteFactory = (
    selectedFactory: TFactory | null,
    setSelectedFactory: Dispatch<SetStateAction<TFactory | null>>,
    setModalOpen: Dispatch<SetStateAction<boolean>>
) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();

    const { data: factoriesData } = useGetAllFactoriesQuery({});
    const factories: TFactory[] = factoriesData?.data || [];

    const { mutate: deleteFactory, isLoading } = useDeleteFactoryMutation({
        onSuccess: () => {
            setSelectedFactory(null);
            setModalOpen(false);
            enqueueSnackbar(t("workcycles.factory_delete_success"), { severity: "success" });
            queryClient.invalidateQueries(["workcycles", "factories"]);
            queryClient.invalidateQueries(["workcycles", "lines"]);
            queryClient.invalidateQueries(["workcycles", "workstations"]);
            queryClient.invalidateQueries(["workcycles", "models"]);
            queryClient.invalidateQueries(["workcycles", "tasks"]);
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

    const handleSelectFactory = (selectedFactoryId: string) => {
        const selected = factories.find((factory) => factory.id === selectedFactoryId);
        if (selected) {
            setSelectedFactory(selected);
            setModalOpen(true);
        }
    };

    const handleDeleteFactory = () => {
        if (selectedFactory?.id) {
            deleteFactory(selectedFactory.id);
        }
    };

    return {
        factories,
        handleSelectFactory,
        handleDeleteFactory,
        isLoading,
    };
};
