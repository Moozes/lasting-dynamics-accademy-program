import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { useTooltipMessage } from "@features/statistics/hooks";
import { Statistics } from "@features/statistics/types";

import { DateSelectInput } from "../DateSelectInput";

import { getStats } from "./SessionsStatistics.helpers";
import { StatisticsCardSmall } from "./StatisticsCardSmall";

type Props = HTMLDivProps & {
    statistics: Statistics;
};

export const SessionsStatistics = ({ statistics, ...props }: Props) => {
    const t = useTranslationV2();
    const { sessionsTooltipMessage } = useTooltipMessage();
    const data = getStats(t, statistics, sessionsTooltipMessage);
    return (
        <div {...props}>
            <div className="left">
                <Typography className="title">{t("Sessions")}</Typography>
                <div className="grid">
                    {data.general_stats_1.map((elm) => (
                        <StatisticsCardSmall
                            key={elm.title}
                            className="stat-card"
                            title={elm.title}
                            trending={elm.trending}
                            text={elm.text}
                            percentage={elm.percentage}
                            tooltipText={elm.tooltipText}
                            ongoing={elm.ongoing}
                            time={elm.time}
                        />
                    ))}
                </div>
                <div className="grid">
                    {data.general_stats_2.map((elm) => (
                        <StatisticsCardSmall
                            key={elm.title}
                            className="stat-card"
                            title={elm.title}
                            trending={elm.trending}
                            text={elm.text}
                            percentage={elm.percentage}
                            tooltipText={elm.tooltipText}
                            ongoing={elm.ongoing}
                            time={elm.time}
                        />
                    ))}
                </div>
            </div>
            <Divider className="divider" orientation="vertical" flexItem />
            <div className="right">
                <div className="grid">
                    {data.per_user_stats_1.map((elm) => (
                        <StatisticsCardSmall
                            key={elm.title}
                            className="stat-card"
                            title={elm.title}
                            trending={elm.trending}
                            text={elm.text}
                            percentage={elm.percentage}
                            tooltipText={elm.tooltipText}
                            ongoing={elm.ongoing}
                        />
                    ))}
                </div>
                <div className="grid">
                    {data.per_user_stats_2.map((elm) => (
                        <StatisticsCardSmall
                            key={elm.title}
                            className="stat-card last"
                            title={elm.title}
                            trending={elm.trending}
                            text={elm.text}
                            percentage={elm.percentage}
                            tooltipText={elm.tooltipText}
                            ongoing={elm.ongoing}
                        />
                    ))}
                </div>
            </div>
            <DateSelectInput urlParamsToChange="session_dates" className="date-select-input" />
        </div>
    );
};
