import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { SessionDetailsTabsEnum } from "@features/sessions/index";

const DEFAULT_TAB = SessionDetailsTabsEnum.posture;

export const useURLTabSearchParam = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentTab = searchParams.get("tab") || DEFAULT_TAB;

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        searchParams.set("tab", newValue);
        setSearchParams(searchParams);
    };

    useEffect(() => {
        if (!searchParams.has("tab")) {
            searchParams.set("tab", DEFAULT_TAB);
            setSearchParams(searchParams, { replace: true });
        }
    }, [searchParams, setSearchParams]);
    return { currentTab, handleChange };
};
