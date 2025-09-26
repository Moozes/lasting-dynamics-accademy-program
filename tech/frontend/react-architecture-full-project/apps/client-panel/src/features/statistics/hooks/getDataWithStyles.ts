import { useTheme } from "@mui/material";

import { useTranslationV2 } from "ui";

import { Statistics } from "../types";

export const useGetDataWithStyles = (statistics: Statistics) => {
    const theme = useTheme();
    const t = useTranslationV2();
    return [
        {
            text: t("statistics.number_of_users"),
            max: statistics.organization_limit_number_of_users,
            value: statistics.organization_number_of_users,
            backgroundColor: theme.color_system.status.infos.light_light,
            progressColor: theme.color_system.status.infos.dark,
        },
        {
            text: t("statistics.number_of_admins"),
            max: statistics.organization_limit_number_of_admins,
            value: statistics.organization_number_of_admins,
            backgroundColor: theme.color_system.primary.light_light,
            progressColor: theme.color_system.primary.dark,
        },
        {
            text: t("statistics.number_of_work_sessions_per_month"),
            max: statistics.organization_limit_number_of_sessions_per_month,
            value: statistics.organization_number_of_sessions_per_month,
            backgroundColor: theme.color_system.status.success.light_light,
            progressColor: theme.color_system.status.success.dark,
        },
        {
            text: t("statistics.assessment_reports_per_month"),
            max: statistics.organization_limit_number_of_assessment_reports_per_month,
            value: statistics.organization_number_of_assessment_reports_per_month,
            backgroundColor: theme.color_system.status.error.light_light,
            progressColor: theme.color_system.status.error.light,
        },
    ];
};
