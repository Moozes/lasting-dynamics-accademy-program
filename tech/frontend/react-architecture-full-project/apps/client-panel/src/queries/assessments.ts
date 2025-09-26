import { MutationOptions, useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { IServerError } from "ui";

import { Assessment, AssessmentDetailUnion, AssessmentSourceEnum, AssessmentStatusEnum } from "@app-types/index";
import { api, apiRoutes } from "@services/index";

export const useSendResetPasswordEmailMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (data: { email: string }) => api.post(apiRoutes.auth.passwordReset, data),
        onSuccess,
        onError,
    });
};

export const useGetAssessmentsQuery = (
    URLPageNumber: string,
    URLPageSize: string,
    URLOrder?: string,
    URLsearchterm?: string,
    URLStatus?: string,
    URLDateRange?: string,
    URLAssessmentCategory?: string,
    workerId?: string
) => {
    return useQuery(
        [
            "Assessments",
            URLPageNumber,
            URLPageSize,
            URLOrder,
            URLsearchterm,
            URLStatus,
            URLDateRange,
            URLAssessmentCategory,
            workerId,
        ],
        () => {
            return api.get(
                apiRoutes.assessments.getOrganizationAssessmentsRoute(
                    URLPageNumber,
                    URLPageSize,
                    URLOrder,
                    URLsearchterm,
                    URLStatus,
                    URLDateRange,
                    URLAssessmentCategory,
                    workerId
                )
            );
        }
    );
};

export const useGetSelectedAssessmentsQuery = (ids: string) => {
    return useQuery(["Assessments", { ids }], () => {
        return api.get<Assessment[]>(apiRoutes.assessments.getSelectedAssessmentsRoute(ids));
    });
};

export const useDeleteMultipleAssessmentsMutation = ({ onSuccess }: { onSuccess?: any }) => {
    return useMutation({
        mutationFn: (ids: number[]) =>
            api.delete(apiRoutes.assessments.deleteMultipleAssessmentsRoute, {
                data: { ids },
            }),
        onSuccess,
    });
};

export const useAddAssessmentMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (data: Assessment) => api.post(apiRoutes.assessments.addNewAssessmentRoute, data),
        onSuccess,
        onError,
    });
};

export const useGetSingleAssessmentQuery = (id: string) => {
    return useQuery(["SingleAssessment", id], () => {
        return api.get(apiRoutes.assessments.getSingleAssessmentRoute(id));
    });
};

export const useUpdateAssessmentFormDataMutation = ({
    id,
    onSuccess,
    onError,
}: {
    id: string;
    onSuccess: any;
    onError: MutationOptions<unknown, AxiosError<IServerError>, any>["onError"];
}) => {
    return useMutation<unknown, AxiosError<IServerError>, any>({
        mutationFn: (data: AssessmentDetailUnion) =>
            api.patch(apiRoutes.assessments.updateAssessmentRoute(id), {
                assessment: data,
            }),
        onSuccess,
        onError,
    });
};

export const useUpdateAssessmentMutation = ({
    id,
    onSuccess,
    onError,
}: {
    id: string;
    onSuccess: any;
    onError: MutationOptions<unknown, AxiosError<IServerError>, any>["onError"];
}) => {
    return useMutation<unknown, AxiosError<IServerError>, any>({
        mutationFn: (data: Partial<Assessment>) =>
            api.patch(apiRoutes.assessments.updateAssessmentRoute(id), {
                ...data,
            }),
        onSuccess,
        onError,
    });
};

export const useSubmitAssessmentFormMutation = ({
    id,
    onSuccess,
    onError,
}: {
    id: string;
    onSuccess: any;
    onError: MutationOptions<unknown, AxiosError<IServerError>, any>["onError"];
}) => {
    return useMutation<unknown, AxiosError<IServerError>, any>({
        mutationFn: (data: AssessmentDetailUnion) =>
            api.patch(apiRoutes.assessments.updateAssessmentRoute(id), {
                assessment: data,
                status: AssessmentStatusEnum.COMPLETED,
                source: AssessmentSourceEnum.MANUAL,
            }),
        onSuccess,
        onError,
    });
};
