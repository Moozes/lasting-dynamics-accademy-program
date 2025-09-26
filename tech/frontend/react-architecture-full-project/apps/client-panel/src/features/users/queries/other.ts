/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "@tanstack/react-query";

import { WergonicUser } from "@app-types/index";
import { api, apiRoutes } from "@services/index";

type UserApiResponse = {
    results: Array<WergonicUser>;
    count: string;
    next: string;
    previous: string;
    num_pages: number;
};

export const useGetUsersQuery = (
    URLPageNumber: string,
    URLPageSize: string,
    URLOrder?: string,
    URLsearchterm?: string,
    URLRoleIn?: string,
    URLIsActive?: string
) => {
    return useQuery<{ data: UserApiResponse }>(
        ["users", URLPageNumber, URLPageSize, URLOrder, URLsearchterm, URLRoleIn, URLIsActive],
        () => {
            return api.get(
                apiRoutes.auth.getOrganizationUsersRoute(
                    URLPageNumber,
                    URLPageSize,
                    URLsearchterm as string,
                    URLOrder,
                    URLRoleIn,
                    URLIsActive
                )
            );
        }
    );
};

export const useGetUsersByRoleQuery = (URLPageNumber: string, URLPageSize: string, URLRole: string) => {
    return useQuery<{ data: UserApiResponse }>(["usersByRole", URLPageNumber, URLPageSize, URLRole], () => {
        return api.get(apiRoutes.auth.getOrganizationUsersByRoleRoute(URLPageNumber, URLPageSize, URLRole as string));
    });
};

export const useGetAdminsAndErgonomists = () => {
    return useQuery<{ data: { id: string; first_name: string; last_name: string }[] }>(["adminsAndErgonomists"], () => {
        return api.get(apiRoutes.auth.getOrganizationAdminsAndErgonomists);
    });
};

export const useUpdateUserMutation = ({ onSuccess, onError }: { onSuccess: any; onError: any }) => {
    return useMutation({
        mutationFn: (data: WergonicUser) => api.patch(apiRoutes.auth.updateUserRoute(data.id as string), data),
        onSuccess,
        onError,
    });
};

export const useDeactivateUserMutation = ({ onSuccess, onError }: { onSuccess: any; onError: any }) => {
    return useMutation({
        mutationFn: (data: { id?: string; org_id?: string }) =>
            api.post(apiRoutes.auth.deactivateUserRoute(data.id as string)),
        onSuccess,
        onError,
    });
};

export const useDeleteSingleUserMutation = ({
    id,
    onSuccess,
    onError,
}: {
    onSuccess?: any;
    onError: any;
    id: string;
}) => {
    return useMutation({
        mutationFn: () => api.delete(apiRoutes.auth.deleteSingleUserRoute(id)),
        onSuccess,
        onError,
    });
};

export const useDeleteMultipleUsersMutation = ({ onSuccess }: { onSuccess?: any }) => {
    return useMutation({
        mutationFn: (ids: number[]) =>
            api.delete(apiRoutes.auth.deleteMultipleUsersRoute, {
                data: { ids },
            }),
        onSuccess,
    });
};

export const checkFieldExistance = async (fieldName: string, value: any, orgId?: string) => {
    let exists = false;
    try {
        const body: Record<string, any> = { [fieldName]: value, org_id: orgId };
        const axiosResponse = await api.post<{ exists: boolean }>(
            apiRoutes.auth.getCheckUserFieldRoute(fieldName),
            body
        );
        exists = axiosResponse.data.exists;
    } catch (e) {
        /* empty */
    }
    return exists;
};
