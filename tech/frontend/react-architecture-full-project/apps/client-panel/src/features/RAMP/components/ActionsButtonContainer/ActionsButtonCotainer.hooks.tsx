import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { useUpdateAssessmentMutation } from "@queries/index";

export const useUpdateAssessmentStatus = () => {
    const t = useTranslationV2();
    const queryClient = useQueryClient();
    const { id } = useParams<{ id: string }>();
    const { enqueueSnackbar } = useSnackbar();

    const { mutate: updateAssessmentStatus, isLoading: isUpdatingStatus } = useUpdateAssessmentMutation({
        id: id!,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["SingleAssessment", id],
            });
            enqueueSnackbar(t("ramp_assessments.assessment_completed_successfully"));
        },
        onError: (error) => {
            const serverErrorMessage = error.response?.data.detail || "";
            enqueueSnackbar(`${t("ramp_assessments.assessment_completed_failed")} (${serverErrorMessage})`, {
                severity: "error",
            });
        },
    });

    return {
        updateAssessmentStatus,
        isUpdatingStatus,
    };
};
