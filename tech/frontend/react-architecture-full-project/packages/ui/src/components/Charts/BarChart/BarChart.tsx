/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";

import { Box, useTheme } from "@mui/material";

import { getChartColors } from "../style/colors";

import { BarChartProps } from "./BarChart.types";
import Histogram from "./CustomBar";

export const BarChart: FC<BarChartProps> = ({ data, height, width }) => {
    const theme = useTheme();
    const bartChartColors = getChartColors(theme);
    return (
        <Box display="flex" justifyContent="center">
            <Box height="100%" width="100%">
                <Histogram data={data} colors={bartChartColors} height={height} width={width} />
            </Box>
        </Box>
    );
};
