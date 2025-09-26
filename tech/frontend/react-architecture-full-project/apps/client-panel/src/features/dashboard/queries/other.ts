import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { IServerError } from "ui";

import { api, apiRoutes } from "@services/index";

import {
    IGetNotifications,
    INotification,
    IUseUpdateActiveOrganizationMutationParams,
    UserOrganizationsResponse,
} from "../types";

export const useGetUserOrganizationsQuery = () => {
    return useQuery<{ data: UserOrganizationsResponse }>(["user", "organizations"], () => {
        return api.get(apiRoutes.auth.getUserOrganizationsRoute());
    });
};

export const useUpdateActiveOrganizationMutation = ({
    onSuccess,
    onError,
}: IUseUpdateActiveOrganizationMutationParams) => {
    return useMutation({
        mutationFn: (organizationID: string | number) =>
            api.post(apiRoutes.auth.UpdateUserActiveOrgRoute(organizationID)),
        onSuccess,
        onError,
    });
};

export const useGetNotificationsQuery = (URLPageNumber?: string, URLPageSize?: string) => {
    return useQuery<AxiosResponse<IGetNotifications>, AxiosError<IServerError>>(
        ["notifications", URLPageNumber, URLPageSize],
        () => {
            return api.get(apiRoutes.notifications.getNotificationsRoute(URLPageNumber, URLPageSize));
        }
    );
};

export const useUpdateNotificationsMutation = ({
    notificationId,
    onSuccess,
    onError,
}: {
    notificationId: number;
    onSuccess: any;
    onError: any;
}) => {
    return useMutation({
        mutationFn: (data: Partial<INotification>) =>
            api.patch(apiRoutes.notifications.updateSingleNotificationRoute(notificationId), { ...data }),
        onSuccess,
        onError,
    });
};

export const useMarkNotificationsAsReadMutation = ({ onSuccess, onError }: { onSuccess: any; onError: any }) => {
    return useMutation({
        mutationFn: (notification_ids: number[]) =>
            api.post(apiRoutes.notifications.markMultipleNotificationsAsReadRoute, {
                notification_ids,
            }),
        onSuccess,
        onError,
    });
};
