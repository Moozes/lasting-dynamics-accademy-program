import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { TabItem, TabPanel, Tabs, useTranslationV2 } from "ui";

import { DashboardInnerLayout } from "@features/dashboard";
import { ActiveSessionsTable, FinishedSessionsTable } from "@features/sessions/index";

import { useSetInitialTabURLParam } from "./SessionsPage.hooks";

const items: TabItem[] = [
    {
        label: "Active",
        tabContent: <ActiveSessionsTable />,
    },
    {
        label: "Finished",
        tabContent: <FinishedSessionsTable />,
    },
];

export const SessionsPage = () => {
    const t = useTranslationV2();
    const [searchParams] = useSearchParams();
    const { currentTab, setCurrentTab } = useSetInitialTabURLParam();
    const [selectedTab, setSelectedTab] = useState(currentTab || items[0].label);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedTab(newValue);
    };

    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab) {
            setSelectedTab(tab);
        }
    }, [searchParams]);

    return (
        <DashboardInnerLayout
            header={t("sessions_management.pageHeader")}
            pageActions={
                <Tabs
                    items={items}
                    selectedTab={selectedTab}
                    onChangeHandler={handleChange}
                    onClickhandler={setCurrentTab}
                />
            }
        >
            {items.map((item) => (
                <TabPanel key={item.label} value={selectedTab} id={item.label}>
                    {item.tabContent}
                </TabPanel>
            ))}
        </DashboardInnerLayout>
    );
};
