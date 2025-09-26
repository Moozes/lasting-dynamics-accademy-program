import { useQuery } from "@tanstack/react-query";

import { api, apiRoutes } from "@services/index";

import { SessionLogssAPIResponse } from "./ViewLogButton.types";

export const useSessionsLogsQuery = (sessionsId: number | string) => {
    return useQuery<{ data: SessionLogssAPIResponse }>(["sessions", "Logs", "get", sessionsId.toString()], () => {
        return api.get(apiRoutes.sessions.getSessionLogsRoute(sessionsId));
    });
};
