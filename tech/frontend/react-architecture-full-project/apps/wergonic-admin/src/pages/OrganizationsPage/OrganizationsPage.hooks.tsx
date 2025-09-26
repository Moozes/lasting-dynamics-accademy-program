import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { TabItem } from "ui";

export const useSetInitialTabURLParam = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentTab = searchParams.get("tab") || "Current";

    const setCurrentTab = useCallback(
        (item: TabItem) => {
            const tabLabel = item.label;
            if (tabLabel !== currentTab) {
                const newSearchParams = new URLSearchParams(searchParams);
                newSearchParams.set("tab", tabLabel);
                setSearchParams(newSearchParams);
            }
        },
        [setSearchParams]
    );

    useEffect(() => {
        const tabFromURL = searchParams.get("tab");
        if (!tabFromURL) {
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set("tab", "Current");
            setSearchParams(newSearchParams, { replace: true });
        }
    }, [setSearchParams]);

    return { currentTab, setCurrentTab };
};
