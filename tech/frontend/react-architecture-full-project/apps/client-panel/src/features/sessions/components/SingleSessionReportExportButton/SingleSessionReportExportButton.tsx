/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";

import { useTranslationV2 } from "ui";

import { useGetSessionQuery, useTabData2 } from "@features/sessions/queries";

import { ReportExportButton } from "./ReportExportButton";

export const SingleSessionReportExportButton: React.FC = ({}) => {
    const t = useTranslationV2();
    const { sessionId } = useParams();
    const { data: sessionData, isLoading, isError } = useGetSessionQuery(String(sessionId));

    const {
        tnoStats,
        hrStats,
        tempStats,
        tasksStats,
        reducedStats,
        reducedStatsIsError,
        tnoStatsIsError,
        hrStatsIsError,
        tempStatsIsError,
        tasksStatsIsError,
        isReducedStatsLoading,
    } = useTabData2(String(sessionId));

    if (isLoading || isReducedStatsLoading) {
        return <span>{t("loading")}</span>;
    }

    if (isError || reducedStatsIsError) {
        return <span>{t("error")}</span>;
    }

    return (
        <ReportExportButton
            session={sessionData.data}
            sessionStats={reducedStats}
            tnoStats={tnoStats?.data}
            hrStats={hrStats?.data}
            tempStats={tempStats?.data}
            tasksStats={tasksStats?.data}
        />
    );
};
