import { Row } from "react-table";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const reducedCharts = atom<boolean>(true);

export const selectedSessionRowsAtom = atom<Row<{ id: string }>[]>([]);

// atomWithStorage for persistence
export const userAIConsentAtom = atomWithStorage<boolean>("userAIConsent", false);
