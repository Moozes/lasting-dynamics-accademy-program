import { Document, Page } from "@react-pdf/renderer";

import { FooterTemplate } from "@components/index";
import { ResultsPdfTemplateProps } from "@features/sessions/types";

import { AIReportPage } from "./AIReportPage";
import { AppendixPage } from "./AppendixPage";
import { styles } from "./ResultsPdfTemplate.styles";
import { SessionInfoPage } from "./SessionInfoPage";
import { SessionStatsPage } from "./SessionStatsPage";
import { SessionStatsPage2 } from "./SessionStatsPage2";
import { SessionStatsPage3 } from "./SessionStatsPage3";

export const ResultsPdfTemplate: React.FC<ResultsPdfTemplateProps> = ({
    session,
    hrStats,
    sessionStats,
    tempStats,
    tnoStats,
    tasksStats,
}) => {
    return (
        <Document>
            <Page style={styles.page}>
                <SessionInfoPage session={session} />
                <FooterTemplate />
            </Page>
            {session.ai_report?.content && (
                <Page style={styles.page}>
                    <AIReportPage report_content={session.ai_report.content} />
                    <FooterTemplate />
                </Page>
            )}
            <Page style={styles.page}>
                <SessionStatsPage
                    session={session}
                    sessionStats={sessionStats}
                    tnoStats={tnoStats}
                    tempStats={tempStats}
                    hrStats={hrStats}
                />
                <FooterTemplate />
            </Page>
            {hrStats && (
                <Page style={styles.page}>
                    <SessionStatsPage2 session={session} hrStats={hrStats} />
                    <FooterTemplate />
                </Page>
            )}
            {tasksStats && (
                <Page style={styles.page}>
                    <SessionStatsPage3 session={session} tasksStats={tasksStats} />
                    <FooterTemplate />
                </Page>
            )}
            <Page style={styles.page}>
                <AppendixPage />
                <FooterTemplate />
            </Page>
        </Document>
    );
};
