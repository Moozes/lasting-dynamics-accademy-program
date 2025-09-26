import { round } from "lodash";

import { useTheme } from "@mui/material";

import type { HTMLDivProps } from "ui";
import { DocumentAddIcon, UsersGroupIcon, useTranslationV2 } from "ui";

import { useTooltipMessage } from "@features/statistics/hooks";
import { Statistics } from "@features/statistics/types";

import { StatisticsCardLarge } from "./StatisticsCardLarge";

type Props = HTMLDivProps & {
    statistics: Statistics;
};

export const UsersStatistics = ({ statistics, ...props }: Props) => {
    const theme = useTheme();
    const t = useTranslationV2();
    const { activeUsersTooltipMessage, rampAssesmentsTooltipMessage } = useTooltipMessage();
    return (
        <div {...props}>
            <StatisticsCardLarge
                Icon={DocumentAddIcon}
                iconBackground={theme.color_system.status.infos.light_light}
                trending={statistics.assessment_percentage_change >= 0 ? "up" : "down"}
                title={t("assessment_other")}
                number={`${statistics.assessment_count}`}
                perscentage={round(statistics.assessment_percentage_change, 2)}
                tooltipText={rampAssesmentsTooltipMessage}
                className="card"
                urlParamsToChange="ramp_dates"
            />
            <StatisticsCardLarge
                Icon={UsersGroupIcon}
                iconBackground={theme.color_system.status.success.light_light}
                trending={statistics.active_users_percentage_change >= 0 ? "up" : "down"}
                title={t("statistics.active_users")}
                number={`${round(statistics.active_users_count, 2)}`}
                perscentage={round(statistics.active_users_percentage_change, 2)}
                tooltipText={activeUsersTooltipMessage}
                className="card"
                urlParamsToChange="user_dates"
            />
        </div>
    );
};
