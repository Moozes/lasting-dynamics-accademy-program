/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { useAtom } from "jotai";

import { LinearProgress } from "@mui/material";
import Box from "@mui/material/Box";

import { useTranslateLimb } from "ui";

import { reducedCharts } from "../../atoms";
import { useTabData } from "../../hooks/useTabData";
import { ContainerStyles, ContainerStyles2 } from "../styles";

import { DonutChartCard } from "./DonutChartCard";
import { LineAndBarChartDetails } from "./LineAndBarChartDetails";

export const BaseSessionTab: React.FC = () => {
    const [reducedChartsOption] = useAtom(reducedCharts);
    const { translateLimb } = useTranslateLimb();

    const {
        reducedDonutStats,
        postureReducedDonutStats,
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

    return (
        <Box mt={4}>
            {reducedStatsisLoading && (
                <>
                    <Box sx={{ width: "100%" }}>
                        <LinearProgress />
                    </Box>
                    <Box display="flex" sx={ContainerStyles} borderRadius={2.2} p={3} />
                </>
            )}

            <Box display="flex" sx={ContainerStyles2} borderRadius={2.2}>
                {reducedDonutStats.map((limb) => (
                    <DonutChartCard
                        key={limb.title}
                        data={limb.data}
                        title={translateLimb(
                            limb.title
                                .split(/(?=[A-Z])/)
                                .join(" ")
                                .toLowerCase()
                        )}
                        average={limb.average}
                    />
                ))}
            </Box>
        </Box>
    );
};
