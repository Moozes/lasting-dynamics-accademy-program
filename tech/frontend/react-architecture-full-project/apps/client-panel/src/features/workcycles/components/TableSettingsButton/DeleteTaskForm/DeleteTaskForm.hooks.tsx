import { Dispatch, SetStateAction } from "react";
import { Row } from "react-table";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { TTask } from "@app-types/index";
import { useDeleteTaskMutation } from "@queries/index";

export const useDeleteTaskForm = (row: Row<TTask>, setModalOpen: Dispatch<SetStateAction<boolean>>) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();
    const task = row.original;

    const { mutate: deleteTask, isLoading } = useDeleteTaskMutation({
        onSuccess: () => {
            enqueueSnackbar(t("workcycles.task_delete_success"), { severity: "success" });
            setModalOpen(false);
            queryClient.invalidateQueries(["workcycles", "tasks"]);
        },
        onError: (err: any) => {
            const message = err.response?.data?.detail || t("Something_went_Wrong");
            enqueueSnackbar(message, { severity: "error" });
        },
    });

    const handleDelete = () => {
        if (task.id) {
            deleteTask(task.id);
        }
    };

    return {
        handleDelete,
        isLoading,
    };
};
