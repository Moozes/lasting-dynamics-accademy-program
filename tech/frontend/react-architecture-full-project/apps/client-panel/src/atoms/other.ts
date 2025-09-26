import { Row } from "react-table";
import { atom } from "jotai";

export const selectedAssessmentRowsAtom = atom<Row<{ id: string }>[]>([]);

export const settingsModalOpenAtom = atom<boolean>(false);
