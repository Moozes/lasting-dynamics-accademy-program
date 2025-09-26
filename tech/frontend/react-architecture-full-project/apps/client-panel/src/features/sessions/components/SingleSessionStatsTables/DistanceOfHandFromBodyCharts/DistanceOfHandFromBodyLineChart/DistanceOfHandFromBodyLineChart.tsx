import React, { useMemo } from "react";
import { format } from "date-fns";

import { Card, Typography } from "@mui/material";

import { LineChart, useTranslationV2 } from "ui";

import { IWristDistanceItem } from "@features/sessions/types/index";

import { cardStyle, typographyStyle } from "./inlineStyles";

interface WristDistanceLineChartProps {
    wristDistance?: IWristDistanceItem;
}

export const WristDistanceLineChart: React.FC<WristDistanceLineChartProps> = ({ wristDistance }) => {
    const t = useTranslationV2();

    const lineData = useMemo(() => {
        if (!wristDistance) return [];

        return wristDistance.line_data.map((point) => {
            const [hours, minutes] = point.x.split(":").map(Number);
            const utcDate = new Date(Date.UTC(1970, 0, 1, hours, minutes));
            const localDate = new Date(utcDate.getTime() + new Date().getTimezoneOffset() * -60000);

            return {
                x: localDate,
                y: point.y,
            };
        });
    }, [wristDistance]);

    const { minYAdjusted, maxYAdjusted, tickValuesXAdjusted } = useMemo(() => {
        if (!wristDistance || lineData.length === 0) {
            return { minYAdjusted: 0, maxYAdjusted: 0, tickValuesXAdjusted: [] };
        }

        const minY = wristDistance.minVal;
        const maxY = wristDistance.maxVal;

        const numberOfTicksX = 10;
        const tickValuesX = lineData
            .filter((_, index, arr) => index % Math.ceil(arr.length / numberOfTicksX) === 0)
            .map((item) => item.x);

        return {
            minYAdjusted: minY - 1,
            maxYAdjusted: maxY + 1,
            tickValuesXAdjusted: tickValuesX,
        };
    }, [lineData, wristDistance]);

    const axisBottomFormat = (value: Date | number) => {
        const date = typeof value === "number" ? new Date(value) : value;
        const formattedLabel = format(date, "HH:mm");
        return formattedLabel;
    };

    if (!wristDistance) {
        return (
            <Typography variant="h6" sx={{ ...typographyStyle, padding: 2 }}>
                {t("sessions_management.wrist_distance.no_data")}
            </Typography>
        );
    }

    return (
        <Card sx={cardStyle}>
            <Typography variant="h6" sx={typographyStyle}>
                {t("sessions_management.wrist_distance.title")}
            </Typography>
            <LineChart
                data={[{ id: t("sessions_management.wrist_distance.chart_id"), data: lineData }]}
                height={232}
                width={570}
                margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
                xScale={{ type: "time" }}
                yScale={{
                    type: "linear",
                    min: minYAdjusted,
                    max: maxYAdjusted,
                }}
                axisBottom={{
                    format: axisBottomFormat,
                    tickValues: tickValuesXAdjusted,
                    legendOffset: -12,
                }}
                axisLeft={{
                    tickValues: 5,
                    format: (v) => `${v} cm`,
                    legendOffset: -40,
                }}
            />
        </Card>
    );
};
