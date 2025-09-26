import { atom } from "jotai";

import { IVisitedTabsStatus } from "../types";

export const initialVisitedTabsStatus: IVisitedTabsStatus = {
    neckTrunkandLegAnalysis: false,
    armAndWristAnalysis: false,
};

export const visitedTabsStatusAtom = atom<IVisitedTabsStatus>(initialVisitedTabsStatus);
