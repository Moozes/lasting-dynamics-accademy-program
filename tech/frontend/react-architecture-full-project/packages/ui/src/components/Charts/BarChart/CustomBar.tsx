import React from "react";

import { useTheme } from "@mui/material";

import { HistogramProps } from "./BarChart.types";

const Plot = React.lazy(() => import("react-plotly.js"));

const Histogram: React.FC<HistogramProps> = ({ data, colors, width, height }) => {
    const muiTheme = useTheme();
    // format data in order to match the histogram input
    const xValues = data.map((point) => point.label);
    const yValues = data.map((point) => point.value);
    const layout = {
        xaxis: {
            range: [0, 180],
            zerolinecolor: muiTheme.color_system.text.primary,
            tickfont: {
                color: muiTheme.color_system.text.primary,
            },
        },
        yaxis: {
            zerolinecolor: muiTheme.color_system.text.primary,
            tickfont: {
                color: muiTheme.color_system.text.primary,
            },
        },
        paper_bgcolor: "transparent",
        plot_bgcolor: "transparent",
    };
    const binSize = 5;
    let traces: number[] = [];
    for (let i = 0; i <= xValues.length - 1; i++) {
        const yarray = new Array(yValues[i]).fill(Math.floor(parseInt(xValues[i], 10) / binSize) * binSize);
        traces = traces.concat(yarray);
    }

    return (
        <Plot
            data={[
                {
                    x: traces,
                    type: "histogram",
                    /* eslint-disable prefer-template */
                    marker: {
                        color: colors[1],
                    },
                    hovertemplate: "Value: %{x} <br>Percentage: %{y} %",
                    xbins: {
                        start: 0,
                        end: 180,
                        size: 5,
                    },
                },
            ]}
            layout={layout}
            style={{ width, height }}
        />
    );
};

export default Histogram;
