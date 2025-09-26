import { round } from "lodash";

import { TranslationFunction } from "ui";

import { Statistics } from "@features/statistics/types";

type Stats = {
    trending: "up" | "down";
    title: string;
    text: number;
    percentage: number;
    tooltipText: string;
    ongoing?: number;
    time?: boolean;
};

export const getStats = (
    t: TranslationFunction,
    statistics: Statistics,
    tooltipMessage: string
): { general_stats_1: Stats[]; general_stats_2: Stats[]; per_user_stats_1: Stats[]; per_user_stats_2: Stats[] } => {
    return {
        general_stats_1: [
            {
                title: t("total"),
                trending: statistics.sessions_count_percentage_change >= 0 ? "up" : "down",
                text: round(statistics.sessions_count, 2),
                percentage: round(statistics.sessions_count_percentage_change, 2),
                tooltipText: tooltipMessage,
                ongoing: statistics.ongoing_sessions_count,
            },
            {
                title: t("statistics.average_duration"),
                trending: statistics.session_avg_duration_percentage_change >= 0 ? "up" : "down",
                text: round(statistics.session_avg_duration, 2),
                percentage: round(statistics.session_avg_duration, 2),
                tooltipText: tooltipMessage,
                time: true,
            },
        ],
        general_stats_2: [
            {
                title: t("statistics.longest_session"),
                trending: statistics.session_longest_duration_percentage_change >= 0 ? "up" : "down",
                text: round(statistics.session_longest_duration, 2),
                percentage: round(statistics.session_longest_duration_percentage_change, 2),
                tooltipText: tooltipMessage,
                time: true,
            },
            {
                title: t("statistics.shortest_session"),
                trending: statistics.session_shortest_duration_percentage_change >= 0 ? "up" : "down",
                text: round(statistics.session_shortest_duration, 2),
                percentage: round(statistics.session_shortest_duration_percentage_change, 2),
                tooltipText: tooltipMessage,
                time: true,
            },
        ],
        per_user_stats_1: [
            {
                title: t("statistics.average_session_per_user"),
                trending: statistics.avg_session_per_user_percentage_change >= 0 ? "up" : "down",
                text: round(statistics.avg_session_per_user, 2),
                percentage: round(statistics.avg_session_per_user_percentage_change, 2),
                tooltipText: tooltipMessage,
            },
            {
                title: t("statistics.maximum_session_per_user"),
                trending: statistics.max_session_per_user_percentage_change >= 0 ? "up" : "down",
                text: round(statistics.max_session_per_user, 2),
                percentage: round(statistics.max_session_per_user_percentage_change, 2),
                tooltipText: tooltipMessage,
            },
        ],
        per_user_stats_2: [
            {
                title: t("statistics.minimum_session_per_user"),
                trending: statistics.min_session_per_user_percentage_change >= 0 ? "up" : "down",
                text: round(statistics.min_session_per_user, 2),
                percentage: round(statistics.min_session_per_user_percentage_change, 2),
                tooltipText: tooltipMessage,
            },
        ],
    };
};
