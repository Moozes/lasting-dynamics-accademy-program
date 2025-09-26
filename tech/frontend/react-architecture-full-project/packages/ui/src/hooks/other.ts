import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Row } from "react-table";
import { PrimitiveAtom, useAtom } from "jotai";

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "../components/Tables/utils";
import { ISelectedReactTableRowsAtom } from "../types";
import { AnyObjectWithId } from "../types/global";

export const useSelectedReactTableRowsAtom = (
    data: object[],
    selectedReactTableRowsAtom: PrimitiveAtom<
        Row<{
            id: string;
        }>[]
    >
): ISelectedReactTableRowsAtom => {
    const [selectedReactTableRows, setSelectedReactTableRows] = useAtom(selectedReactTableRowsAtom);

    const toggleRowSelection = (row: Row) => {
        const typedRow = row as unknown as Row<AnyObjectWithId>;
        setSelectedReactTableRows((prev) => {
            const rowAlreadyExists =
                prev.findIndex((currentRow) => currentRow.original.id == typedRow.original.id) !== -1;
            if (!rowAlreadyExists) {
                // add row
                return prev.concat(typedRow);
            }
            // remove row
            return prev.filter((currentRow) => currentRow.original.id !== typedRow.original.id);
        });
    };

    const elementIsSelected = (elm: AnyObjectWithId) => {
        return selectedReactTableRows.findIndex((row) => row.original.id == elm.id) !== -1;
    };

    const typedData = data as AnyObjectWithId[];
    const selectedRowIds: Record<string, boolean> = typedData.reduce((acc, current, idx) => {
        return {
            ...acc,
            [idx]: elementIsSelected(current),
        };
    }, {});

    useEffect(() => {
        // clear selected rows on unmount
        return () => {
            setSelectedReactTableRows([]);
        };
    }, [setSelectedReactTableRows]);

    return {
        toggleRowSelection,
        selectedReactTableRows,
        selectedRowIds,
        setSelectedReactTableRows,
    };
};

export const useSetDefaultQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const URLpageNumber = searchParams.get("page");
        const URLpageSize = searchParams.get("page_size");

        if (!URLpageNumber || !URLpageSize) {
            searchParams.set("page", DEFAULT_PAGE);
            searchParams.set("page_size", DEFAULT_PAGE_SIZE);
            setSearchParams(searchParams, { replace: true });
        }
    }, [searchParams, setSearchParams]);
};
