import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { useUpdateAssessmentMutation } from "@queries/index";

export const useUpdateAssessmentResultsComment = () => {
    const t = useTranslationV2();
    const queryClient = useQueryClient();
    const { id } = useParams<{ id: string }>();
    const { enqueueSnackbar } = useSnackbar();
    const {
        mutate: updateAssessment,
        isLoading: isMutationLoading,
        reset,
    } = useUpdateAssessmentMutation({
        id: id!,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["SingleAssessment", id],
            });
            enqueueSnackbar(t("assessments.assessment_comment_uploaded_successfully"));
            reset();
        },
        onError: (error) => {
            const serverErrorMessage = error.response?.data.detail || "";
            enqueueSnackbar(`${t("assessments.assessment_comment_uploading_failed")} (${serverErrorMessage})`, {
                severity: "error",
            });
            reset();
        },
    });

    return {
        updateAssessment,
        isMutationLoading,
    };
};
