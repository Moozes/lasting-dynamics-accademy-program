import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { TabItem, TabPanel, Tabs, useTranslationV2 } from "ui";

import { DashboardInnerLayout } from "@features/dashboard";
import { ArchivedOrganizationsTable, CurrentOrganizationsTable } from "@features/organizations";

import { useSetInitialTabURLParam } from "./OrganizationsPage.hooks";

export const OrganizationsPage = () => {
    const t = useTranslationV2();
    const [searchParams] = useSearchParams();
    const { currentTab, setCurrentTab } = useSetInitialTabURLParam();
    const items: TabItem[] = useMemo(
        () => [
            {
                label: "Current",
                tabContent: <CurrentOrganizationsTable />,
            },
            {
                label: "Archived",
                tabContent: <ArchivedOrganizationsTable />,
            },
        ],
        [t]
    );
    const [selectedTab, setSelectedTab] = useState(currentTab || items[0].label);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedTab(newValue);
    };

    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab && tab !== selectedTab) {
            setSelectedTab(tab);
        }
    }, [searchParams, selectedTab]);

    return (
        <DashboardInnerLayout
            header={t("organizations")}
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
