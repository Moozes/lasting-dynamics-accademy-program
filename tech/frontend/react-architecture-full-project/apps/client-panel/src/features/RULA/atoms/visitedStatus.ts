import { atom } from "jotai";

type TabsVisitedStatusAtom = {
    rightVisited: boolean;
    leftVisited: boolean;
    headTrunkAndLegsVisited: boolean;
};

export const initialTabsVisitedStatus: TabsVisitedStatusAtom = {
    rightVisited: false,
    leftVisited: false,
    headTrunkAndLegsVisited: false,
};

export const tabsVisitedStatusAtom = atom<TabsVisitedStatusAtom>(initialTabsVisitedStatus);
