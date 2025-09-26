import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";

import { TabItem, TabPanel, Tabs, useTranslationV2 } from "ui";

import { GoBackButton } from "@components/index";
import { DashboardInnerLayout } from "@features/dashboard";
import { Appendix } from "@features/sessions";
import {
    AIExplanation,
    BaseSessionTab,
    RawDataExportTemplate,
    SessionDetailesInfoSection,
    SessionDetailsTabsEnum,
    SingleSessionReportExportButton,
    SingleSessionStatsTables,
} from "@features/sessions/index";

import { chartsContainerStyles } from "./inlineStyles";
import { useURLTabSearchParam } from "./SessionDetailsPage.hooks";

export const SessionDetailsPage = () => {
    const t = useTranslationV2();
    const { sessionId } = useParams();

    const { currentTab, handleChange } = useURLTabSearchParam();

    const sessionsItems: TabItem[] = [
        {
            label: SessionDetailsTabsEnum.posture,
            tabContent: <BaseSessionTab />,
        },
        {
            label: SessionDetailsTabsEnum.speedOfMovement,
            tabContent: <BaseSessionTab />,
        },
    ];

    return (
        <DashboardInnerLayout header={t("Review_work_session")} goBackButton={<GoBackButton />}>
            <SessionDetailesInfoSection />
            <Box mt={2}>
                <Box display="flex" justifyContent="space-between">
                    {sessionId && <RawDataExportTemplate sessionId={sessionId} />}
                    <SingleSessionReportExportButton />
                </Box>
            </Box>
            <Box mt={2}>{sessionId && <AIExplanation sessionId={sessionId} />}</Box>
            <Box mt={2} sx={chartsContainerStyles}>
                <Box display="flex" justifyContent="space-between">
                    <Tabs items={sessionsItems} selectedTab={currentTab} onChangeHandler={handleChange} />
                </Box>
                {sessionsItems.map((item) => (
                    <TabPanel key={item.label} value={currentTab} id={item.label}>
                        {item.tabContent}
                    </TabPanel>
                ))}
            </Box>
            <SingleSessionStatsTables />
            <Appendix />
        </DashboardInnerLayout>
    );
};
