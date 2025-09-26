import { round } from "lodash";

import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { HTMLDivProps, TrendingDownIcon, TrendingUpIcon, useTranslationV2 } from "ui";

import { TooltipPopperStyles } from "@features/statistics/styles";

type Props = HTMLDivProps & {
    trending: "up" | "down";
    title: string;
    text: number;
    percentage: number;
    tooltipText: string;
    ongoing?: number;
    time?: boolean;
};

export const StatisticsCardSmall = ({
    trending,
    title,
    text,
    percentage,
    tooltipText,
    ongoing,
    time,
    ...props
}: Props) => {
    const t = useTranslationV2();
    let timeFormat = "/min";
    let formatedText = text;
    if (time && text > 120) {
        timeFormat = "/hr";
        formatedText = round(text / 60, 1);
    }
    return (
        <div {...props}>
            <Typography variant="subtitle1" className="title">
                {title}
            </Typography>
            <div className="content">
                <Typography variant="h3" className="number">
                    {formatedText}
                    {time && timeFormat}
                </Typography>
                {percentage !== 0 && (
                    <div className="trending">
                        <Tooltip title={tooltipText} slotProps={{ popper: { sx: TooltipPopperStyles } }}>
                            <div>
                                {trending === "up" ? <TrendingUpIcon /> : <TrendingDownIcon />}
                                <Typography variant="caption" className={`percentage ${trending}`}>
                                    {trending === "up" && "+"}
                                    {percentage}%
                                </Typography>
                            </div>
                        </Tooltip>
                    </div>
                )}
            </div>
            {(ongoing || ongoing === 0) && (
                <Typography className="ongoing" variant="caption">
                    {t("ongoing")}: {ongoing}
                </Typography>
            )}
        </div>
    );
};
