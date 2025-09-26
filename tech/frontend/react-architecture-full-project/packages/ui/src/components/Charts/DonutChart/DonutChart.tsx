/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType, FC } from "react";
import { OrdinalColorScaleConfig } from "@nivo/colors";
import { Margin, PropertyAccessor } from "@nivo/core";
import { LegendProps } from "@nivo/legends";
import { ComputedDatum, PieCustomLayer, ResponsivePie } from "@nivo/pie";
import { animated } from "@react-spring/web";

import { Box, useTheme } from "@mui/material";

import { getChartColors, LIGHT_THEME_COLORS } from "../style/colors";

interface DonutChartProps {
    data: any;
    height: number;
    width: number;
    fontSize?: number;
    arcLinkLabel?: PropertyAccessor<ComputedDatum<any>, string>;
    margin?: Partial<Margin>;
    colors?: OrdinalColorScaleConfig<Omit<ComputedDatum<any>, "color" | "fill" | "arc">>;
    centerComponent?: PieCustomLayer<any>;
    CustomTooltip?: ElementType;
    Legends?: LegendProps[];
    formatArkLabelLinkValue?: (value: any) => string;
}

export const DonutChart: FC<DonutChartProps> = ({
    data,
    height,
    width,
    fontSize = 20,
    margin = { top: 100, right: 100, bottom: 100, left: 100 },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    colors = LIGHT_THEME_COLORS,
    Legends = [
        {
            anchor: "bottom",
            direction: "row",
            translateX: 40,
            translateY: 100,
            itemsSpacing: 40,
            itemWidth: 100,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 14,
            symbolShape: "circle",
        },
    ],
    centerComponent,
    CustomTooltip,
    arcLinkLabel = "value",
    formatArkLabelLinkValue,
}) => {
    const theme = useTheme();
    const chartColors = getChartColors(theme);
    return (
        <Box height={height} width={width} display="flex" justifyContent="center">
            <ResponsivePie
                theme={{
                    text: {
                        fontSize,
                        fill: theme.color_system.text.primary,
                    },
                    legends: {
                        text: {
                            fill: theme.color_system.text.primary,
                        },
                    },
                }}
                animate={false}
                data={data}
                arcLinkLabel={arcLinkLabel}
                margin={margin}
                innerRadius={0.7}
                padAngle={2.5}
                cornerRadius={7}
                colors={chartColors}
                borderWidth={0}
                enableArcLabels={false}
                arcLinkLabelsDiagonalLength={20}
                arcLinkLabelsStraightLength={30}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                }}
                layers={
                    centerComponent
                        ? ["arcs", "arcLabels", "arcLinkLabels", "legends", centerComponent]
                        : ["arcs", "arcLabels", "arcLinkLabels", "legends"]
                }
                // eslint-disable-next-line react/no-unstable-nested-components
                tooltip={CustomTooltip ? (props) => <CustomTooltip {...props} /> : undefined}
                legends={Legends}
                // eslint-disable-next-line react/no-unstable-nested-components
                arcLinkLabelComponent={({ style, datum }) => {
                    return (
                        <animated.g opacity={style.opacity}>
                            <animated.path
                                fill="none"
                                stroke={style.linkColor}
                                strokeWidth={style.thickness}
                                d={style.path}
                            />
                            <animated.text
                                transform={style.textPosition}
                                textAnchor={style.textAnchor}
                                dominantBaseline="central"
                                style={{
                                    fill: style.textColor,
                                    fontSize: 17,
                                    fontWeight: 700,
                                }}
                            >
                                {formatArkLabelLinkValue ? formatArkLabelLinkValue(datum) : datum.value}
                            </animated.text>
                        </animated.g>
                    );
                }}
            />
        </Box>
    );
};
