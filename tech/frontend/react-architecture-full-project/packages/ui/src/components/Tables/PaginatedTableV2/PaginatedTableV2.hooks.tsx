/* eslint-disable @typescript-eslint/no-shadow */
import { useSearchParams } from "react-router-dom";
import { Column, useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from "react-table";

import { ISelectedReactTableRowsAtom } from "../../../types";
import { Checkbox } from "../../inputsV2/Checkbox";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "../utils";

type FunctionParams = {
    columns: Column[];
    data: object[];
    meta: { next: string; previous: string; pageCount: number };
    hideColumns?: string[];
    // we cant use WergonicUser type, because UI package doesnt have access to client-panel auth types
    authenticatedUser: { [key: string]: any } | null;
    section?: string;
    selectedReactTableRowsAtom?: ISelectedReactTableRowsAtom;
    withRowSelection?: boolean;
};

export const usePaginatedTableV2 = ({
    columns,
    data,
    meta,
    hideColumns,
    authenticatedUser,
    section,
    selectedReactTableRowsAtom,
    withRowSelection = true,
}: FunctionParams) => {
    const [searchParams] = useSearchParams();
    const {
        getTableProps,
        headerGroups,
        page,
        prepareRow,
        setPageSize,
        selectedFlatRows,
        setGlobalFilter,
        state: { globalFilter },
    } = useTable(
        {
            columns,
            data,
            manualGlobalFilter: true,
            initialState: {
                pageIndex: Number(searchParams.get("page") || DEFAULT_PAGE) - 1,
                pageSize: Number(searchParams.get("page_size") || DEFAULT_PAGE_SIZE),
                hiddenColumns: hideColumns || [],
                selectedRowIds: selectedReactTableRowsAtom ? selectedReactTableRowsAtom.selectedRowIds : {},
            },
            pageCount: meta.pageCount,
            manualPagination: true,
            manualSortBy: true,
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        (hooks) => {
            if (withRowSelection) {
                hooks.visibleColumns.push((columns) => [
                    {
                        id: "selection",
                        // @ts-ignore
                        Cell: ({ row }) => {
                            const isCheckboxDisabled = Boolean(
                                section === "userManagment" && authenticatedUser?.id === row.values.id
                            );
                            const toggleRowSelectedProps = row.getToggleRowSelectedProps();
                            return (
                                <Checkbox
                                    disabled={isCheckboxDisabled}
                                    size="small"
                                    {...toggleRowSelectedProps}
                                    onChange={(e) => {
                                        if (toggleRowSelectedProps.onChange) {
                                            toggleRowSelectedProps.onChange(e);
                                            if (selectedReactTableRowsAtom)
                                                selectedReactTableRowsAtom.toggleRowSelection(row);
                                        }
                                    }}
                                />
                            );
                        },
                    },
                    ...columns,
                ]);
            }
        }
    );

    return {
        getTableProps,
        headerGroups,
        page,
        prepareRow,
        setPageSize,
        selectedFlatRows,
        setGlobalFilter,
        globalFilter,
        selectedReactTableRows: selectedReactTableRowsAtom ? selectedReactTableRowsAtom.selectedReactTableRows : [],
    };
};
