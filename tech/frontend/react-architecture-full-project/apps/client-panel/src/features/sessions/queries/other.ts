/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { MutationOptions, useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useAtom } from "jotai";

import { IServerError } from "ui";

import { IGeneratedMECAssessment, WergonicUserError } from "@app-types/index";
import { authAtom } from "@atoms/index";
import { api, apiRoutes } from "@services/index";

import {
    FinishedSessionsAPIResponse,
    IDetailedChartStatsAPIResponse,
    IGenerateAssessmentValues,
    IGetSelectedSessionsStatsQueryResponse,
    IHrStatsResponse,
    IServerResponseSession,
    ISession,
    ITempStatsData,
    ITnoStatsData,
    IUpdateUserData,
    TaskData,
} from "../types";

export const useGetFinishedSessionsQuery = (
    organizationId: string,
    URLPageNumber: string,
    URLPageSize: string,
    URLOrder?: string,
    URLsearchterm?: string,
    workerId?: string
) => {
    return useQuery<{ data: FinishedSessionsAPIResponse }>(
        ["sessions", URLPageNumber, URLPageSize, URLOrder, URLsearchterm, workerId],
        () => {
            return api.get(
                apiRoutes.sessions.getOrganizationSessionsRoute(
                    organizationId,
                    URLPageNumber,
                    URLPageSize,
                    URLsearchterm as string,
                    URLOrder,
                    workerId
                )
            );
        }
    );
};

export const useGetInterruptedSessionsQuery = (
    organizationId: string,
    URLPageNumber: string,
    URLPageSize: string,
    URLOrder?: string
) => {
    return useQuery<{ data: FinishedSessionsAPIResponse }>(
        ["interruptedSessions", URLPageNumber, URLPageSize, URLOrder],
        () => {
            return api.get(
                apiRoutes.sessions.getOrganizationInterruptedSessionsRoute(
                    organizationId,
                    URLPageNumber,
                    URLPageSize,
                    URLOrder
                )
            );
        }
    );
};

export const useDeleteMultipleSessionsMutation = ({
    organizationId,
    onSuccess,
}: {
    organizationId: string;
    onSuccess?: any;
}) => {
    return useMutation({
        mutationFn: (ids: number[]) =>
            api.delete(apiRoutes.sessions.getDeleteMultipleSessionsRoute(organizationId), {
                data: { ids },
            }),
        onSuccess,
    });
};

export const useMergeSessionsMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (ids: number[]) => api.post(apiRoutes.sessions.mergeSessionsRoute, { session_ids: ids }),
        onSuccess,
        onError,
    });
};

export const useSessionsStatsQuery = (sessionsId: number | string) => {
    return useQuery<{ data: any }>(["sessions", "stats", sessionsId], () => {
        return api.get(apiRoutes.sessions.getSessionStatRoute(sessionsId));
    });
};

export const useSessionsDetailedStatsQuery = (sessionsId: number | string) => {
    return useQuery<{ data: IDetailedChartStatsAPIResponse }>(["sessions", "Detailedstats", sessionsId], () => {
        return api.get(apiRoutes.sessions.getSessionDetailedStatRoute(sessionsId));
    });
};

export const useSessionsTnoStatsQuery = (sessionsId: number | string) => {
    return useQuery<{ data: ITnoStatsData[] }>(["sessions", "Tnostats", sessionsId], () => {
        return api.get(apiRoutes.sessions.getSessionTnoStatRoute(sessionsId));
    });
};

export const useSessionsHrStatsQuery = (sessionsId: number | string) => {
    return useQuery<{ data: IHrStatsResponse }>(["sessions", "heartRateStats", sessionsId], () => {
        return api.get(apiRoutes.sessions.getSessionHrStatRoute(sessionsId));
    });
};

export const useSessionsTempStatsQuery = (sessionsId: number | string) => {
    return useQuery<{ data: ITempStatsData[] }>(["sessions", "tempStats", sessionsId], () => {
        return api.get(apiRoutes.sessions.getSessionTempStatRoute(sessionsId));
    });
};

export const useSessionsTaskStatsQuery = (sessionsId: number | string) => {
    return useQuery<{ data: TaskData[] }>(["sessions", "tasksStats", sessionsId], () => {
        return api.get(apiRoutes.sessions.getSessionTasksStatRoute(sessionsId));
    });
};

export const useGetSessionQuery = (sessionsId: number | string) => {
    return useQuery<AxiosResponse<IServerResponseSession>>(["sessions", sessionsId], () => {
        return api.get(apiRoutes.sessions.getSingleSessionRoute(sessionsId));
    });
};

export const useUpdateSessionMutation = ({ onSuccess, onError }: { onSuccess: any; onError: any }) => {
    return useMutation({
        mutationFn: (data: { id: string } & Partial<ISession>) =>
            api.patch(apiRoutes.sessions.updateSessionRoute(data.id), data),
        onSuccess,
        onError,
    });
};

export const useRedoSessionCalculationsMutation = ({ onSuccess, onError }: { onSuccess: any; onError: any }) => {
    return useMutation({
        mutationFn: (sessionsId: number | string) =>
            api.post(apiRoutes.sessions.redoSessionCalculationsRoute(sessionsId)),
        onSuccess,
        onError,
    });
};

export const useDownloadSessionsStatsMutation = ({ onSuccess, onError }: { onSuccess: any; onError: any }) => {
    return useMutation({
        mutationFn: (sessionsId: number | string) => {
            return api.get(apiRoutes.sessions.sessionMeasurementDownloadRoute(sessionsId), {
                responseType: "blob",
            });
        },
        onSuccess,
        onError,
    });
};

export const useDownloadSessionExcelStatsMutation = ({ onSuccess, onError }: { onSuccess: any; onError: any }) => {
    return useMutation({
        mutationFn: (sessionsId: number | string) => {
            return api.get(apiRoutes.sessions.sessionStatsDownloadRoute(sessionsId), {
                responseType: "blob",
            });
        },
        onSuccess,
        onError,
    });
};

export const useDownloadMultiSessionExcelStatsMutation = ({ onSuccess, onError }: { onSuccess: any; onError: any }) => {
    return useMutation({
        mutationFn: (sessionsIds: string) => {
            return api.get(apiRoutes.sessions.MultiSessionStatsDownloadRoute(sessionsIds), {
                responseType: "blob",
            });
        },
        onSuccess,
        onError,
    });
};

export const useGetSelectedSessionsStatsQuery = (ids: string) => {
    return useQuery<AxiosResponse<IGetSelectedSessionsStatsQueryResponse>, AxiosError<IServerError>>(
        ["Sessions", { ids }],
        () => {
            return api.get(apiRoutes.sessions.getSelectedSessionsStatsRoute(ids));
        }
    );
};

export const useGenerateAssessmentMutation = (
    sessionId: string,
    {
        onSuccess,
        onError,
    }: {
        onSuccess: MutationOptions<AxiosResponse<IGeneratedMECAssessment>, AxiosError<any>, any>["onSuccess"];
        onError: MutationOptions<unknown, AxiosError<IServerError>, any>["onError"];
    }
) => {
    return useMutation({
        mutationFn: (data: Omit<IGenerateAssessmentValues, "sessionSegment">) => {
            return api.post(apiRoutes.sessions.getGenerateAssessmentRoute(sessionId), data);
        },
        onSuccess,
        onError,
    });
};

export const useUpdateUserMutation = ({
    onSuccess,
    onError,
}: {
    org_id: string;
    onSuccess?: (response: any) => void;
    onError: (error: WergonicUserError) => void;
}) => {
    const [auth] = useAtom(authAtom);
    return useMutation({
        mutationFn: (data: IUpdateUserData) => {
            if (!auth.wergonicUser?.id) {
                throw new Error("User ID is undefined");
            }
            return api.patch(apiRoutes.auth.updateUserRoute(auth.wergonicUser.id), data);
        },
        onSuccess,
        onError,
    });
};

export function useTabData2(sessionId: string) {
    const {
        data: reducedStats,
        isError: reducedStatsIsError,
        isLoading: isReducedStatsLoading,
    } = useSessionsStatsQuery(String(sessionId));

    const { data: tnoStats, isError: tnoStatsIsError } = useSessionsTnoStatsQuery(String(sessionId));

    const { data: hrStats, isError: hrStatsIsError } = useSessionsHrStatsQuery(String(sessionId));

    const { data: tempStats, isError: tempStatsIsError } = useSessionsTempStatsQuery(String(sessionId));

    const { data: tasksStats, isError: tasksStatsIsError } = useSessionsTaskStatsQuery(String(sessionId));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reducedDonutStats: Array<any> = useMemo(() => {
        if (reducedStats) {
            return Object.values(reducedStats?.data.posture);
        }
        return [];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reducedStats]);

    return {
        reducedDonutStats,
        isReducedStatsLoading,
        tnoStats,
        hrStats,
        tempStats,
        tasksStats,
        reducedStats,
        reducedStatsIsError,
        tnoStatsIsError,
        hrStatsIsError,
        tempStatsIsError,
        tasksStatsIsError,
    };
}
