import { Row } from "react-table";
import { atom } from "jotai";

export const selectedReactTableRowsAtom = atom<Row<{ id: string }>[]>([]);
