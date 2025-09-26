import { FC, ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { format } from "date-fns";

import Box from "@mui/material/Box";

import { BarChart, LineChart } from "ui";

import { ChartCardStyle } from "@features/sessions/components/styles";
import { SessionDetailsTabsEnum } from "@features/sessions/types";

import ChartCardTitle from "../../ChartCardTitle";

const lineMargins = { top: 10, right: 70, bottom: 120, left: 70 };

interface LineAndBarChartCardProps {
    title: ReactNode;
    barData: any;
    lineData: any;
    lineMinDeg: number;
    lineMaxDeg: number;
}

export const LineAndBarChartCard: FC<LineAndBarChartCardProps> = ({
    title,
    lineData,
    barData,
    lineMaxDeg,
    lineMinDeg,
}) => {
    const [searchParams] = useSearchParams();
    const formattedLineData = lineData.map((dataSet: any) => {
        const formattedData = dataSet.data
            .map((point: { x: string; y: number }) => {
                const [hours, minutes] = point.x.split(":").map(Number);
                const utcDate = new Date(Date.UTC(1970, 0, 1, hours, minutes));

                const localDate = new Date(utcDate.getTime() + new Date().getTimezoneOffset() * -60000);
                return {
                    ...point,
                    x: localDate,
                };
            })
            .sort((a: { x: Date }, b: { x: Date }) => a.x.getTime() - b.x.getTime());

        return {
            ...dataSet,
            data: formattedData,
        };
    });

    const allXValues = formattedLineData.flatMap((dataSet: { data: { x: Date }[] }) =>
        dataSet.data.map((point: { x: Date }) => point.x.getTime())
    );

    const minX = new Date(Math.min(...allXValues));
    const maxX = new Date(Math.max(...allXValues));

    const xScale = {
        type: "time" as const,
        format: "%H:%M",
        precision: "minute" as const,
        min: minX,
        max: maxX,
        nice: true,
    };

    const axisBottomFormat = (value: Date | number) => {
        const date = typeof value === "number" ? new Date(value) : value;
        const formattedLabel = format(date, "HH:mm");
        return formattedLabel;
    };

    let axisLeftFormat;
    const currentTab = searchParams.get("tab") || SessionDetailsTabsEnum.posture;
    if (currentTab === SessionDetailsTabsEnum.posture) {
        axisLeftFormat = (value: any) => `${value}°`;
    } else {
        axisLeftFormat = (value: any) => `${value}°/s`;
    }

    return (
        <Box sx={ChartCardStyle}>
            <Box height={592} width={630}>
                <ChartCardTitle title={title} />
                <BarChart data={barData} height={280} width={630} />
                <LineChart
                    data={formattedLineData}
                    height={280}
                    width={630}
                    margin={lineMargins}
                    yScale={{ type: "linear", max: lineMaxDeg, min: lineMinDeg }}
                    xScale={xScale}
                    axisBottom={{
                        format: axisBottomFormat,
                    }}
                    axisLeft={{
                        tickValues: 6,
                        format: axisLeftFormat,
                    }}
                />
            </Box>
        </Box>
    );
};
