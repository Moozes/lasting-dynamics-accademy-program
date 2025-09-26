import { useMemo, useState } from "react";

import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

import { Typography, useTranslationV2 } from "ui";

import { useTabData } from "../../hooks";

import { DistanceOfHandFromBodyCharts } from "./DistanceOfHandFromBodyCharts/index";
import { HrTableComponent } from "./HrTableComponent";
import { getPercentileColumns } from "./SingleSessionStatsTables.utils";
import { StatisticsTable2 } from "./StatisticsTable2";
import StatisticsTable3 from "./StatisticsTable3";
import StatisticsTableComponent from "./StatisticsTableComponent";
import TemperatureTableComponent from "./TemperatureTableComponent";
import TnoTableComponent from "./TnoTableComponent";

export const SingleSessionStatsTables = () => {
    const [anglePercentile, setAnglePercentile] = useState("10");
    const [velocityPercentile, setVelocityPercentile] = useState("50");
    const t = useTranslationV2();
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {
        reducedDonutStats,
        postureReducedDonutStats,
        FBMouvementDonutStats,
        sideMouvementDonutStats,
        speedOfMovementReducedDonutStats,
        reducedStatsisError,
        reducedStatsisLoading,
        reducedStatsError,
        detailedChartsStats,
        detailedStats,
        detailedStatsisError,
        detailedStatsisLoading,
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
    } = useTabData();

    const percentiles_columns = useMemo(
        () => getPercentileColumns({ anglePercentile, setAnglePercentile, velocityPercentile, setVelocityPercentile }),
        [anglePercentile, setAnglePercentile, velocityPercentile, setVelocityPercentile]
    );

    if (reducedStatsisError) {
        throw new Error("React query reducedStatsError thrown manually from BaseSessionTab", {
            cause: reducedStatsError,
        });
    }

    if (detailedStatsisError) {
        throw new Error("React query detailedStatsError thrown manually from BaseSessionTab", {
            cause: detailedStatsError,
        });
    }

    const wristDistanceData = detailedStats?.data?.wrist_distance && detailedStats.data.wrist_distance[0];

    return (
        <>
            <Typography weight="bold" variant="h4" my={3}>
                {t("result")}
            </Typography>
            <Typography weight="bold" variant="subtitle1" my={2}>
                {t("Posture")}
            </Typography>
            {postureReducedDonutStats.length > 0 && (
                <StatisticsTable3
                    sideMouvementDonutStats={sideMouvementDonutStats}
                    FBMouvementDonutStats={FBMouvementDonutStats}
                    donutStats={postureReducedDonutStats}
                />
            )}
            {wristDistanceData && (
                <>
                    <Typography weight="bold" variant="subtitle1" my={2}>
                        {t("Distance of hand from body")}
                    </Typography>
                    <DistanceOfHandFromBodyCharts data={detailedStats.data} />
                </>
            )}

            <Typography weight="bold" variant="subtitle1" my={2}>
                {t("Speed of movement")}
            </Typography>
            {speedOfMovementReducedDonutStats.length > 0 && (
                <StatisticsTableComponent donutStats={speedOfMovementReducedDonutStats} />
            )}
            {tasksStats?.data && (
                <Box width="100%" mt={3}>
                    <StatisticsTable2 data={tasksStats?.data} columns={percentiles_columns} />
                </Box>
            )}
            {tnoStats && <TnoTableComponent tnoStats={tnoStats.data} />}
            <Grid container spacing={2}>
                {hrStats?.data.frequency_domain_features && (
                    <Grid item lg={5} xs={12}>
                        <HrTableComponent
                            hrStats={hrStats.data.frequency_domain_features}
                            title={t("sessions_management.session_stats.frequency_domain_results")}
                        />
                    </Grid>
                )}
                {hrStats?.data.nonlinear_results && (
                    <Grid item lg={7} xs={12}>
                        <HrTableComponent
                            hrStats={hrStats.data.nonlinear_results}
                            title={t("sessions_management.session_stats.nonlinear_results")}
                        />
                    </Grid>
                )}
                {hrStats?.data.time_domain_features && (
                    <Grid item lg={5} xs={12}>
                        <HrTableComponent
                            hrStats={hrStats.data.time_domain_features}
                            title={t("sessions_management.session_stats.time_domain_results")}
                        />
                    </Grid>
                )}
                {tempStats && (
                    <Grid item lg={7} xs={12}>
                        <TemperatureTableComponent tempStats={tempStats.data} />
                    </Grid>
                )}
            </Grid>
        </>
    );
};
