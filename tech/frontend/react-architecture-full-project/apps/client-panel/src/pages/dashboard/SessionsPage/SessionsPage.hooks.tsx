import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { TabItem } from "ui";

const DEFAULT_TAB = "Active";

export const useSetInitialTabURLParam = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentTab, setTab] = useState(searchParams.get("tab") || DEFAULT_TAB);

    function setCurrentTab(item: TabItem) {
        setTab(item.label);
        searchParams.set("tab", item.label);
        setSearchParams(searchParams);
    }

    useEffect(() => {
        if (!searchParams.has("tab")) {
            searchParams.set("tab", DEFAULT_TAB);
            setSearchParams(searchParams, { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return { currentTab, setCurrentTab };
};
