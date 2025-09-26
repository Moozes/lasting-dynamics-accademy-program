import { useSearchParams } from "react-router-dom";
import { PieCustomLayer } from "@nivo/pie";

import { useTheme } from "@mui/material";

import { useTranslationV2 } from "ui";

import { SessionDetailsTabsEnum } from "@features/sessions/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DonutCenterContentLayer = (average: number): PieCustomLayer<any> => {
    const t = useTranslationV2();
    const theme = useTheme();
    const [searchParams] = useSearchParams();
    const currentTab = searchParams.get("tab");
    const unit = currentTab === SessionDetailsTabsEnum.posture ? "°" : "°/s";
    const unitDescription = currentTab === SessionDetailsTabsEnum.posture ? t("average_angle") : t("average_velocity");
    // eslint-disable-next-line react/display-name
    return ({ centerX, centerY }) => {
        const delta = 20; // for the text position
        return (
            <>
                <text
                    x={centerX}
                    y={centerY - delta}
                    textAnchor="middle"
                    dominantBaseline="central"
                    style={{
                        fontSize: "24px",
                        fontWeight: 500,
                        fill: theme.color_system.text.primary,
                    }}
                >
                    {`${average}${unit}`}
                </text>
                <text
                    x={centerX}
                    y={centerY + delta}
                    textAnchor="middle"
                    dominantBaseline="central"
                    style={{
                        fontSize: "15px",
                        fontWeight: 500,
                        fill: theme.color_system.text.primary,
                    }}
                >
                    {unitDescription}
                </text>
            </>
        );
    };
};
