import { useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";

import { Box, useTheme } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

import { Typography, useTranslationV2 } from "ui";

import { useGetSessionQuery, useTabData2 } from "@features/sessions/queries";

import { CategoriesAndLabels } from "./CategoriesAndLabels";
import { GeneratedAssessmentsLinks } from "./GeneratedAssessmentsLinks";
import { categoriesAndLabelsStyles } from "./inlineStyles";

export const SessionDetailesInfoSection = () => {
    const t = useTranslationV2();
    const theme = useTheme();
    const { sessionId } = useParams();
    const { data: sessionData, isLoading, isError } = useGetSessionQuery(String(sessionId));
    const { reducedStatsIsError, tnoStatsIsError, hrStatsIsError, tempStatsIsError, tasksStatsIsError } = useTabData2(
        String(sessionId)
    );

    if (isLoading) {
        return (
            <>
                <Skeleton animation="wave" width="50%" />
                <Skeleton animation="wave" width="50%" />
            </>
        );
    }

    if (isError) {
        return (
            <Typography weight="regular" color={theme.color_system.status.error.light}>
                {t("sessions_management.sessions_info_error")}
            </Typography>
        );
    }

    if (reducedStatsIsError && tnoStatsIsError && hrStatsIsError && tempStatsIsError && tasksStatsIsError) {
        return (
            <Typography weight="regular" color={theme.color_system.status.error.light}>
                {t("sessions_management.sessions_info_error")}
            </Typography>
        );
    }

    return (
        <Box display="flex" justifyContent="space-between">
            <Box>
                <Typography variant="h5" color={theme.color_system.text.secondary}>
                    {t("sessions_management.sessions_detailes_header")}
                </Typography>
                <Typography variant="h6" color={theme.color_system.text.secondary} mb="18px">
                    {t("sessions_management.sessions_detailes_paragraph.summary_for")}{" "}
                    {sessionData.data.worker.first_name} {sessionData.data.worker.last_name}{" "}
                    {t("sessions_management.sessions_detailes_paragraph.session")},{" "}
                    {format(parseISO(sessionData.data.started_at), "yyyy-MM-dd")},{" "}
                    {t("sessions_management.sessions_detailes_paragraph.recorded_by")}{" "}
                    {sessionData.data.recorded_by.first_name} {sessionData.data.recorded_by.last_name}
                </Typography>
                <CategoriesAndLabels style={categoriesAndLabelsStyles} sessionData={sessionData.data} />
                <GeneratedAssessmentsLinks assessments={sessionData.data.assessments} />
            </Box>
        </Box>
    );
};
