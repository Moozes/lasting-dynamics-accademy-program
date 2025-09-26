import { atom } from "jotai";

type TabsVisitedStatusAtom = {
    posturesVisited: boolean;
    movementsAndRepetitionVisited: boolean;
    liftingWorkVisited: boolean;
    pushingAndPullingVisited: boolean;
    influencingFactorsVisited: boolean;
    strenuousWorkVisited: boolean;
    perceivedPhysicalDiscomfortVisited: boolean;
};

export const initialTabsVisitedStatus: TabsVisitedStatusAtom = {
    posturesVisited: false,
    movementsAndRepetitionVisited: false,
    liftingWorkVisited: false,
    pushingAndPullingVisited: false,
    influencingFactorsVisited: false,
    strenuousWorkVisited: false,
    perceivedPhysicalDiscomfortVisited: false,
};

export const tabsVisitedStatusAtom = atom<TabsVisitedStatusAtom>(initialTabsVisitedStatus);
