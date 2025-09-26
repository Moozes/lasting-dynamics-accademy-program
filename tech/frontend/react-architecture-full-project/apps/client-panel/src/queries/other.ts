import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { IServerError, useLanguage } from "ui";

import { api, apiRoutes } from "@services/index";

export const useAcceptInvitationMutation = ({ onSuccess, onError }: { onSuccess: any; onError: any }) => {
    return useMutation<unknown, AxiosError<IServerError>, any>({
        mutationFn: (id: number | string) => api.post(apiRoutes.auth.acceptInvitationRoute(id)),
        onSuccess,
        onError,
    });
};

export const useGenerateAIReportMutation = ({
    onSuccess,
    onError,
}: {
    onSuccess?: (response: any) => void;
    onError: any;
}) => {
    const language = useLanguage();

    return useMutation<unknown, AxiosError<IServerError>, { sessionId: string; tags: string[] }>({
        mutationFn: ({ sessionId, tags }) =>
            api.post(apiRoutes.sessions.getAIExplanationRoute(sessionId), { language, tags }),
        onSuccess,
        onError,
    });
};

export const useFetchAIReportQuery = (sessionId: string) => {
    return useQuery(["fetchAIReport", sessionId], () => api.get(apiRoutes.sessions.getAIExplanationRoute(sessionId)));
};
