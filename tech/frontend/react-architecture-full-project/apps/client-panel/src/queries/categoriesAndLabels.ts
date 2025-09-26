import { MutationOptions, useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useAtomValue } from "jotai";

import { IServerError } from "ui";

import { IAddEvent, IUpdateEvent, IuseGetLabelsQueryResponse } from "@app-types/index";
import { authAtom } from "@atoms/index";
import { api, apiRoutes } from "@services/index";

export const useGetCategoriesAndLabelsQuery = (
    URLPageNumber: string,
    URLPageSize: string,
    URLOrder?: string,
    URLsearchterm?: string,
    URLCategoryType?: string,
    organizationId?: string
) => {
    return useQuery(
        ["categoriesAndLabels", organizationId, URLPageNumber, URLPageSize, URLOrder, URLsearchterm, URLCategoryType],
        () => {
            return api.get(
                apiRoutes.categoryAndLabels.getCategoriesAndLabelsRoute(
                    URLPageNumber,
                    URLPageSize,
                    URLOrder,
                    URLsearchterm,
                    URLCategoryType,
                    organizationId
                )
            );
        }
    );
};

export const useDeleteCategoryMutation = ({
    onSuccess,
    onError,
}: {
    onSuccess?: any;
    onError?: MutationOptions<unknown, AxiosError<IServerError>, any>["onError"];
}) => {
    const orgId = useAtomValue(authAtom).wergonicUser?.organization?.id;
    return useMutation({
        mutationFn: (categoryId: number) =>
            api.delete(apiRoutes.categoryAndLabels.deleteCategoryRoute(categoryId, orgId)),
        onSuccess,
        onError,
    });
};

type IuseGetLabelsQueryArgs = {
    urlOptions: {
        organizationId?: string;
        URLPageNumber?: string;
        URLPageSize?: string;
        URLsearchterm?: string;
    };
    queryOptions?: any;
};

export const useGetLabelsQuery = ({ urlOptions, queryOptions }: IuseGetLabelsQueryArgs) => {
    return useQuery(
        [
            "labels",
            urlOptions.organizationId,
            urlOptions.URLPageNumber,
            urlOptions.URLPageSize,
            urlOptions.URLsearchterm,
        ],
        () => {
            return api.get<IuseGetLabelsQueryResponse>(
                apiRoutes.categoryAndLabels.getLabelsRoute(
                    urlOptions.organizationId,
                    urlOptions.URLPageNumber,
                    urlOptions.URLPageSize,
                    urlOptions.URLsearchterm
                )
            );
        },
        queryOptions
    );
};

export const useAddEventMutation = ({
    sessionId,
    onSuccess,
    onError,
}: {
    sessionId: string;
    onSuccess?: any;
    onError?: any;
}) => {
    return useMutation({
        mutationFn: (data: IAddEvent) => {
            return api.post(apiRoutes.categoryAndLabels.addEventRoute(sessionId), data);
        },
        onSuccess,
        onError,
    });
};

export const useDeleteEventMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (eventId: number) => api.delete(apiRoutes.categoryAndLabels.deleteEventRoute(eventId)),
        onSuccess,
        onError,
    });
};

export const useUpdateEventMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (data: IUpdateEvent) =>
            api.patch(apiRoutes.categoryAndLabels.updateEventRoute(data.id), {
                ...data,
            }),
        onSuccess,
        onError,
    });
};
