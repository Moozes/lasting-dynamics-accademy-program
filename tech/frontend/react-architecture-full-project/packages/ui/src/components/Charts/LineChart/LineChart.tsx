import { FC, useMemo } from "react";
import { AxisProps } from "@nivo/axes";
import { OrdinalColorScaleConfig } from "@nivo/colors";
import { Margin } from "@nivo/core";
import { ComputedDatum, ResponsiveLine } from "@nivo/line";
import { ScaleSpec } from "@nivo/scales";

import { Box, useTheme } from "@mui/material";

interface LineChartProps {
    data: any;
    height: number;
    width: number;
    margin?: Partial<Margin>;
    colors?: OrdinalColorScaleConfig<Omit<ComputedDatum, "color" | "fill" | "arc">>;
    xScale?: ScaleSpec;
    yScale?: ScaleSpec;
    axisBottom?: AxisProps<any>;
    axisLeft?: AxisProps<any>;
}

export const LineChart: FC<LineChartProps> = ({
    data,
    height,
    width,
    colors,
    axisBottom = {
        tickValues: "every 1 hour",
        format: "%Hh",
    },
    axisLeft = {
        tickValues: 6,
        format: (value) => `${value}°`,
    },
    margin = { top: 100, right: 100, bottom: 100, left: 100 },
    xScale = { type: "time", format: "%H:%M", precision: "hour", min: "08:00", max: "18:00", nice: true }, // Added "nice" for cleaner intervals
    yScale,
}) => {
    const theme = useTheme();

    const { lineStyles, textStyle } = useMemo(
        () => ({
            lineStyles: {
                stroke: theme.color_system.text.primary as string,
                strokeWidth: 1.2,
            },
            textStyle: {
                fontWeight: 400,
                stroke: theme.color_system.text.primary as string,
            },
        }),
        [theme]
    );

    const defaultAxisBottomValues: AxisProps<any> = useMemo(() => {
        return {
            tickSize: 4,
            tickPadding: 10,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: "middle",
        };
    }, []);

    const defaultAxisLeftValues: AxisProps<any> = useMemo(() => {
        return {
            tickSize: 8,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: -40,
        };
    }, []);

    return (
        <Box height={height} width={width} display="flex" justifyContent="center">
            <ResponsiveLine
                theme={{
                    axis: {
                        domain: {
                            line: lineStyles,
                        },
                        ticks: {
                            line: lineStyles,
                            text: textStyle,
                        },
                    },
                }}
                isInteractive
                useMesh
                colors={colors || (() => theme.color_system.divider.dark_grey as string)}
                data={data}
                margin={margin}
                xScale={xScale}
                yScale={yScale}
                axisBottom={{
                    ...defaultAxisBottomValues,
                    ...axisBottom,
                }}
                axisLeft={{
                    ...defaultAxisLeftValues,
                    ...axisLeft,
                }}
                lineWidth={3}
                enableGridX={false}
                enableGridY={false}
                enablePoints={false}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-4}
                legends={[]}
                animate={false}
                markers={[
                    {
                        axis: "y",
                        lineStyle: lineStyles,
                        value: 0,
                    },
                ]}
                // eslint-disable-next-line react/no-unstable-nested-components
                tooltip={({ point }) => {
                    return <div>{`${point.data.y}`}</div>;
                }}
            />
        </Box>
    );
};
