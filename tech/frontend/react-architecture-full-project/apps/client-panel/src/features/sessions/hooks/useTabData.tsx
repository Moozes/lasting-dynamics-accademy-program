/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import {
    useSessionsDetailedStatsQuery,
    useSessionsHrStatsQuery,
    useSessionsStatsQuery,
    useSessionsTaskStatsQuery,
    useSessionsTempStatsQuery,
    useSessionsTnoStatsQuery,
} from "../queries";
import { IDetailedChartStatsItem, SessionDetailsTabsEnum } from "../types";

export function useTabData() {
    const [searchParams] = useSearchParams();
    const { sessionId } = useParams();

    const {
        data: reducedStats,
        isLoading: reducedStatsisLoading,
        isError: reducedStatsisError,
        error: reducedStatsError,
    } = useSessionsStatsQuery(String(sessionId));
    const {
        data: detailedStats,
        isLoading: detailedStatsisLoading,
        isError: detailedStatsisError,
        error: detailedStatsError,
    } = useSessionsDetailedStatsQuery(String(sessionId));

    const {
        data: tnoStats,
        isLoading: tnoStatsisLoading,
        isError: tnoStatsisError,
        error: tnoStatsError,
    } = useSessionsTnoStatsQuery(String(sessionId));

    const {
        data: hrStats,
        isLoading: hrStatsisLoading,
        isError: hrStatsisError,
        error: hrStatsError,
    } = useSessionsHrStatsQuery(String(sessionId));

    const {
        data: tempStats,
        isLoading: tempStatsisLoading,
        isError: tempStatsisError,
        error: tempStatsError,
    } = useSessionsTempStatsQuery(String(sessionId));

    const {
        data: tasksStats,
        isLoading: tasksStatsisLoading,
        isError: tasksStatsisError,
        error: tasksStatsError,
    } = useSessionsTaskStatsQuery(String(sessionId));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reducedDonutStats: Array<any> = useMemo(() => {
        if (reducedStats) {
            if (searchParams.get("tab") === SessionDetailsTabsEnum.posture) {
                return Object.values(reducedStats?.data.posture);
            }
            if (searchParams.get("tab") === SessionDetailsTabsEnum.speedOfMovement) {
                return Object.values(reducedStats?.data.speed_of_movement);
            }
        }
        return [];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reducedStats]);
    const postureReducedDonutStats: Array<any> = useMemo(() => {
        if (reducedStats) {
            return Object.values(reducedStats?.data.posture);
        }
        return [];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reducedStats]);
    const FBMouvementDonutStats: Array<any> = useMemo(() => {
        if (reducedStats) {
            if (reducedStats.data.forward_mouvement) return Object.values(reducedStats?.data.forward_mouvement);
            return [];
        }
        return [];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reducedStats]);
    const sideMouvementDonutStats: Array<any> = useMemo(() => {
        if (reducedStats) {
            if (reducedStats.data.side_mouvement) return Object.values(reducedStats?.data.side_mouvement);
            return [];
        }
        return [];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reducedStats]);
    const speedOfMovementReducedDonutStats: Array<any> = useMemo(() => {
        if (reducedStats) {
            return Object.values(reducedStats?.data.speed_of_movement);
        }
        return [];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reducedStats]);

    const detailedChartsStats: IDetailedChartStatsItem[] = useMemo(() => {
        if (detailedStats) {
            if (searchParams.get("tab") === SessionDetailsTabsEnum.posture) {
                return detailedStats?.data.posture;
            }
            if (searchParams.get("tab") === SessionDetailsTabsEnum.speedOfMovement) {
                return detailedStats?.data.speed_of_movement;
            }
        }
        return [];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detailedStats]);

    const postureDetailedChartsStats: IDetailedChartStatsItem[] = useMemo(() => {
        if (detailedStats) {
            return detailedStats?.data.posture;
        }
        return [];
    }, [detailedStats]);

    const speedOfMovementDetailedChartsStats: IDetailedChartStatsItem[] = useMemo(() => {
        if (detailedStats) {
            return detailedStats?.data.speed_of_movement;
        }
        return [];
    }, [detailedStats]);

    return {
        reducedDonutStats,
        postureReducedDonutStats,
        FBMouvementDonutStats,
        sideMouvementDonutStats,
        speedOfMovementReducedDonutStats,
        reducedStatsisLoading,
        reducedStatsisError,
        reducedStatsError,
        detailedChartsStats,
        detailedStats,
        detailedStatsisLoading,
        detailedStatsisError,
        detailedStatsError,
        tnoStats,
        tnoStatsisLoading,
        tnoStatsisError,
        tnoStatsError,
        hrStats,
        hrStatsisLoading,
        hrStatsisError,
        hrStatsError,
        tempStats,
        tempStatsisLoading,
        tempStatsisError,
        tempStatsError,
        tasksStats,
        tasksStatsisLoading,
        tasksStatsisError,
        tasksStatsError,
        postureDetailedChartsStats,
        speedOfMovementDetailedChartsStats,
    };
}
