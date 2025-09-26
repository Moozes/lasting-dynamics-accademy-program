import { FC, ReactNode } from "react";

import Box from "@mui/material/Box";

import { DonutChart } from "ui";

import { chartContainerHieght, CommonWidth, donutsMargin } from "@features/sessions/components/styles";

import ChartCardTitle from "../ChartCardTitle";

import CustomDonutTooltip from "./CustomDonutTooltip";
import DonutCenterContentLayer from "./DonutCenterContent";

interface DonutChartCardProps {
    title: ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
    average: number;
}

export const DonutChartCard: FC<DonutChartCardProps> = ({ data, title, average }) => {
    // data.reverse() will chage data itself, but i want to change a copy of data
    const formatedData = [...data].reverse();
    return (
        <Box>
            <Box height={chartContainerHieght} width={CommonWidth}>
                <ChartCardTitle title={title} />
                <DonutChart
                    data={formatedData}
                    height={400}
                    width={CommonWidth}
                    margin={donutsMargin}
                    centerComponent={DonutCenterContentLayer(average)}
                    formatArkLabelLinkValue={({ value }) => `${value}%`}
                    CustomTooltip={CustomDonutTooltip}
                />
            </Box>
        </Box>
    );
};
