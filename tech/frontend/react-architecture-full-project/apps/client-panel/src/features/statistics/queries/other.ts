import { useQuery } from "@tanstack/react-query";

import { api, apiRoutes } from "@services/index";

import { Statistics } from "../types";

export type StatisticsApiResponse = {
    stats: Statistics;
};

export const useGetOrganizationStatisticsQuery = (
    user_start_date: string,
    user_end_date: string,
    session_start_date: string,
    session_end_date: string,
    RAMP_start_date: string,
    RAMP_end_date: string
) => {
    return useQuery<{ data: StatisticsApiResponse }>(
        [
            "statistics",
            user_start_date,
            user_end_date,
            session_start_date,
            session_end_date,
            RAMP_start_date,
            RAMP_end_date,
        ],
        () => {
            return api.get(
                apiRoutes.statistics.getOrganizationStataisticsRoute(
                    user_start_date,
                    user_end_date,
                    session_start_date,
                    session_end_date,
                    RAMP_start_date,
                    RAMP_end_date
                )
            );
        }
    );
};
