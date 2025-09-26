import { useMutation, useQuery } from "@tanstack/react-query";

import { api, apiRoutes } from "@services/index";

import { IWorkerAccountCreationRequest, IWorkerProfileApiResponse } from "../types";

export const useGetProfilesQuery = (
    URLPageNumber: string,
    URLPageSize: string,
    URLOrder?: string,
    URLsearchterm?: string
) => {
    return useQuery<{ data: IWorkerProfileApiResponse }>(
        ["profiles", URLPageNumber, URLPageSize, URLOrder, URLsearchterm],
        () => {
            return api.get(
                apiRoutes.auth.getOrganizationProfilesRoute(
                    URLPageNumber,
                    URLPageSize,
                    URLsearchterm as string,
                    URLOrder
                )
            );
        }
    );
};

export const useCreateWorkerAccountMutation = ({ onSuccess, onError }: { onSuccess: any; onError: any }) => {
    return useMutation({
        mutationFn: (newAccountData: IWorkerAccountCreationRequest) =>
            api.post(apiRoutes.auth.createWorkerAccount, newAccountData),
        onSuccess,
        onError,
    });
};
