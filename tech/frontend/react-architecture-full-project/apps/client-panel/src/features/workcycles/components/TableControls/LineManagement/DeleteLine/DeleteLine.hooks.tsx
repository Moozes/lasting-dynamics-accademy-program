import { Dispatch, SetStateAction } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { TLine } from "@app-types/index";
import { useDeleteLineMutation, useGetAllLinesQuery } from "@queries/index";

export const useDeleteLine = (
    selectedLine: TLine | null,
    setSelectedLine: Dispatch<SetStateAction<TLine | null>>,
    setModalOpen: Dispatch<SetStateAction<boolean>>
) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();

    const { data: linesData } = useGetAllLinesQuery({});
    const lines: TLine[] = linesData?.data || [];

    const { mutate: deleteLine } = useDeleteLineMutation({
        onSuccess: () => {
            setSelectedLine(null);
            setModalOpen(false);
            enqueueSnackbar(t("workcycles.line_delete_success"), { severity: "success" });
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

    const handleSelectLine = (selectedLineId: string) => {
        const selectedLineItem = lines.find((l: TLine) => l.id === selectedLineId);
        if (selectedLineItem) {
            setSelectedLine(selectedLineItem);
            setModalOpen(true);
        }
    };

    const handleDeleteLine = () => {
        if (selectedLine?.id) {
            deleteLine(selectedLine.id);
        }
    };

    return {
        lines,
        handleSelectLine,
        handleDeleteLine,
    };
};
