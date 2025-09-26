import { Dispatch, SetStateAction } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { TTaskModel } from "@app-types/index";
import { useDeleteTaskModelMutation, useGetAllTaskModelsQuery } from "@queries/index";

export const useDeleteTaskModel = (
    selectedTaskModel: TTaskModel | null,
    setSelectedTaskModel: Dispatch<SetStateAction<TTaskModel | null>>,
    setModalOpen: Dispatch<SetStateAction<boolean>>
) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();

    const { data: taskModelsData } = useGetAllTaskModelsQuery({});
    const taskModels: TTaskModel[] = taskModelsData?.data || [];

    const { mutate: deleteTaskModel } = useDeleteTaskModelMutation({
        onSuccess: () => {
            setModalOpen(false);
            enqueueSnackbar(t("workcycles.task_model_delete_success"), { severity: "success" });
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

    const handleSelectTaskModel = (selectedTaskModelId: string) => {
        const taskModel = taskModels.find((tm: TTaskModel) => tm.id === selectedTaskModelId);
        if (taskModel) {
            setSelectedTaskModel(taskModel);
            setModalOpen(true);
        }
    };

    const handleDeleteTaskModel = () => {
        if (selectedTaskModel?.id) {
            deleteTaskModel(selectedTaskModel.id);
        }
    };

    return {
        taskModels,
        handleSelectTaskModel,
        handleDeleteTaskModel,
    };
};
