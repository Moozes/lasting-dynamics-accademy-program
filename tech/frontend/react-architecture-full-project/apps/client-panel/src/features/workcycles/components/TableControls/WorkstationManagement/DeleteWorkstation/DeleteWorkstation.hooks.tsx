import { Dispatch, SetStateAction } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { TWorkstation } from "@app-types/index";
import { useDeleteWorkstationMutation, useGetAllWorkstationsQuery } from "@queries/index";

export const useDeleteWorkstation = (
    selectedWorkstation: TWorkstation | null,
    setSelectedWorkstation: Dispatch<SetStateAction<TWorkstation | null>>,
    setModalOpen: Dispatch<SetStateAction<boolean>>
) => {
    const { enqueueSnackbar } = useSnackbar();
    const t = useTranslationV2();
    const queryClient = useQueryClient();

    const { data: workstationsData } = useGetAllWorkstationsQuery({});
    const workstations: TWorkstation[] = workstationsData?.data || [];

    const { mutate: deleteWorkstation } = useDeleteWorkstationMutation({
        onSuccess: () => {
            setModalOpen(false);
            enqueueSnackbar(t("workcycles.workstation_delete_success"), { severity: "success" });
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

    const handleSelectWorkstation = (selectedWorkstationId: string) => {
        const workstation = workstations.find((ws: TWorkstation) => ws.id === selectedWorkstationId);
        if (workstation) {
            setSelectedWorkstation(workstation);
            setModalOpen(true);
        }
    };

    const handleDeleteWorkstation = () => {
        if (selectedWorkstation?.id) {
            deleteWorkstation(selectedWorkstation.id);
        }
    };

    return {
        workstations,
        handleSelectWorkstation,
        handleDeleteWorkstation,
    };
};
