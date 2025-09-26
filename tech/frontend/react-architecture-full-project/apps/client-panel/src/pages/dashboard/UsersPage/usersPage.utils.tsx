import { Row } from "react-table";

export const isRowDisabled = (row: Row) => !row.values.is_active;

export const sortingKeymap = new Map<string, string>();
sortingKeymap.set("full_name", "first_name");
