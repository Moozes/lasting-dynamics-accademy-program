import { Row } from "react-table";
import { atom } from "jotai";

export const selectedOrganizationRowsAtom = atom<Row<{ id: string }>[]>([]);
