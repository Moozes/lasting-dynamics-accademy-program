import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";

import { HTMLDivProps } from "ui";

import { IDetailedChartStatsItem } from "@features/sessions/types";

import { LineAndBarChartDetails } from "../LineAndBarChartDetails";

type Props = HTMLDivProps & {
    postureDetailedChartsStats: IDetailedChartStatsItem[];
    speedOfMovementDetailedChartsStats: IDetailedChartStatsItem[];
    onPostureCapture: (image: string | null) => void;
    onSpeedOfMovementCapture: (image: string | null) => void;
};

export const ChartsCapture: React.FC<Props> = ({
    postureDetailedChartsStats,
    speedOfMovementDetailedChartsStats,
    onPostureCapture,
    onSpeedOfMovementCapture,
    ...props
}) => {
    const postureRef = useRef<HTMLDivElement>(null);
    const speedOfMovementRef = useRef<HTMLDivElement>(null);

    const captureImage = async (ref: React.RefObject<HTMLDivElement>, callback: (image: string | null) => void) => {
        if (ref.current) {
            try {
                const canvas = await html2canvas(ref.current, { scale: 2 });
                const image = canvas.toDataURL("image/png");
                callback(image.startsWith("data:image/png;base64,") ? image : null);
            } catch (error) {
                callback(null);
            }
        } else {
            callback(null);
        }
    };

    useEffect(() => {
        const captureCharts = async () => {
            // eslint-disable-next-line no-promise-executor-return
            await new Promise((resolve) => setTimeout(resolve, 500));
            await captureImage(postureRef, onPostureCapture);
            await captureImage(speedOfMovementRef, onSpeedOfMovementCapture);
        };

        captureCharts();
    }, [postureDetailedChartsStats, speedOfMovementDetailedChartsStats, onPostureCapture, onSpeedOfMovementCapture]);

    return (
        <div {...props}>
            <div className="charts-container">
                <div ref={postureRef} className="posture-chart">
                    <LineAndBarChartDetails stats={postureDetailedChartsStats} />
                </div>
                <div ref={speedOfMovementRef} className="speed-chart">
                    <LineAndBarChartDetails stats={speedOfMovementDetailedChartsStats} />
                </div>
            </div>
        </div>
    );
};
