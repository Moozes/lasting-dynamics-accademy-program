import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useFormikContext } from "formik";
import { enqueueSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { AssessmentDetailUnion } from "@app-types/index";
import { useSubmitAssessmentFormMutation, useUpdateAssessmentFormDataMutation } from "@queries/index";

export const usePrevious = (assessmentFormSubRoutes: string[]) => {
    const location = useLocation();
    const navigate = useNavigate();

    const currentLocationArray = location.pathname.split("/");
    const currentRoute = currentLocationArray[currentLocationArray.length - 1];
    const currentRouteindex = assessmentFormSubRoutes.findIndex((route) => route === currentRoute);
    const previousRouteIndex = currentRouteindex <= 0 ? 0 : currentRouteindex - 1;

    const onPrevious = () => {
        navigate(assessmentFormSubRoutes[previousRouteIndex]);
    };

    return { onPrevious, currentRoute };
};

export const useContinue = (assessmentFormSubRoutes: string[]) => {
    const t = useTranslationV2();
    const location = useLocation();
    const navigate = useNavigate();
    const { values } = useFormikContext<AssessmentDetailUnion>();
    const { id: AssessmentId } = useParams<{ id: string }>();
    const queryClient = useQueryClient();

    const currentLocationArray = location.pathname.split("/");
    const currentRoute = currentLocationArray[currentLocationArray.length - 1];
    const currentRouteindex = assessmentFormSubRoutes.findIndex((route) => route === currentRoute);
    const lastRouteindex = assessmentFormSubRoutes.length - 1;
    const nextRouteIndex = currentRouteindex === lastRouteindex ? lastRouteindex : currentRouteindex + 1;

    const mutation = useUpdateAssessmentFormDataMutation({
        id: AssessmentId as string,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["SingleAssessment", AssessmentId],
            });
            navigate(assessmentFormSubRoutes[nextRouteIndex]);
            enqueueSnackbar(t("ramp_assessments.assessment_update_form_data_success"));
            mutation.reset();
        },
        onError: (error) => {
            const serverErrorMessage = error.response?.data.detail || "";
            enqueueSnackbar(`${t("ramp_assessments.assessment_update_form_data_error")} (${serverErrorMessage})`, {
                severity: "error",
            });
            mutation.reset();
        },
    });

    const onContinue = () => {
        mutation.mutate(values);
    };

    return { onContinue };
};

export const useSave = () => {
    const t = useTranslationV2();
    const { values } = useFormikContext<AssessmentDetailUnion>();
    const { id: AssessmentId } = useParams<{ id: string }>();
    const queryClient = useQueryClient();

    const mutation = useUpdateAssessmentFormDataMutation({
        id: AssessmentId as string,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["SingleAssessment", AssessmentId],
            });
            enqueueSnackbar(t("ramp_assessments.assessment_update_form_data_success"));
            mutation.reset();
        },
        onError: (error) => {
            const serverErrorMessage = error.response?.data.detail || "";
            enqueueSnackbar(`${t("ramp_assessments.assessment_update_form_data_error")} (${serverErrorMessage})`, {
                severity: "error",
            });
            mutation.reset();
        },
    });

    const onSave = () => {
        mutation.mutate(values);
    };

    return { onSave };
};

export const useSubmit = (canSubmit: boolean, setAllTabsAsVisited: () => void) => {
    const t = useTranslationV2();
    const navigate = useNavigate();
    const { values } = useFormikContext<AssessmentDetailUnion>();
    const { id: AssessmentId } = useParams<{ id: string }>();
    const queryClient = useQueryClient();

    const mutation = useSubmitAssessmentFormMutation({
        id: AssessmentId as string,
        onSuccess: () => {
            queryClient
                .invalidateQueries({
                    queryKey: ["SingleAssessment", AssessmentId],
                })
                .then(() => navigate("results"));
            queryClient.invalidateQueries({
                queryKey: ["Assessments"],
            });
            enqueueSnackbar(t("ramp_assessments.assessment_submit_form_success"));
            mutation.reset();
        },
        onError: (error) => {
            const serverErrorMessage = error.response?.data.detail || "";
            enqueueSnackbar(`${t("ramp_assessments.assessment_submit_form_error")} (${serverErrorMessage})`, {
                severity: "error",
            });
            mutation.reset();
        },
    });

    const onSubmit = () => {
        if (canSubmit) {
            mutation.mutate(values);
        } else {
            enqueueSnackbar(t("ramp_assessments.assessment_can_not_submit_form_error"), { severity: "error" });
            setAllTabsAsVisited();
        }
    };

    return { onSubmit };
};
