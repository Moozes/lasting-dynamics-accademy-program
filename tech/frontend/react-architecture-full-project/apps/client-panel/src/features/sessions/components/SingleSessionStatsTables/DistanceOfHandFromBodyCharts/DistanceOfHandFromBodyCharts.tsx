import React from "react";

import { Box, Card } from "@mui/material";

import { DistanceOfHandFromBody } from "@assets/index";
import { IDetailedChartStatsAPIResponse } from "@features/sessions/types";

// import { WristDistanceLineChart } from "./DistanceOfHandFromBodyLineChart";
import { DistanceOfHandFromBodyTable } from "./DistanceOfHandFromBodyTable";
import { cardStyle } from "./inlineStyles";

interface DistanceOfHandFromBodyChartsProps {
    data: IDetailedChartStatsAPIResponse;
}

export const DistanceOfHandFromBodyCharts: React.FC<DistanceOfHandFromBodyChartsProps> = ({ data }) => {
    const wristDistanceData = data?.wrist_distance[0];

    return (
        <Card sx={cardStyle}>
            <Box sx={{ display: "flex", flexDirection: "row", width: "100%", gap: 5, flexWrap: "wrap" }}>
                <Box sx={{ flexDirection: "column", gap: 3, display: "flex" }}>
                    {/* <WristDistanceLineChart wristDistance={wristDistanceData} /> */}
                    <DistanceOfHandFromBodyTable zoneData={wristDistanceData} style={{ width: "700px" }} />
                </Box>
                <Box>
                    <DistanceOfHandFromBody />
                </Box>
            </Box>
        </Card>
    );
};
