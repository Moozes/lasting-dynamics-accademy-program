import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useAtom } from "jotai";

import Box from "@mui/material/Box";

import {
    DEFAULT_PAGE,
    DEFAULT_PAGE_SIZE,
    DEFAULT_SEARCH_TERM,
    PaginatedTableV2,
    usePaginatedTableV2,
    useSelectedReactTableRowsAtom,
    useSetDefaultQueryParams,
    useTranslationV2,
} from "ui";

import { authAtom } from "@atoms/index";

import { selectedSessionRowsAtom } from "../../atoms";
import { useGetFinishedSessionsQuery } from "../../queries";

import { useColumns } from "./FinishedSessionsTable.hooks";
import { FinishedSessionsTableControls } from "./FinishedSessionsTableControls";

export const FinishedSessionsTable = () => {
    useSetDefaultQueryParams();

    const [searchParams] = useSearchParams();
    const [auth] = useAtom(authAtom);
    const t = useTranslationV2();

    const columns = useColumns();
    const { data, isLoading, isFetching, isError, error } = useGetFinishedSessionsQuery(
        auth.wergonicUser?.organization?.id || "", // empty string will cause backend error, for good debuging
        searchParams.get("page") || DEFAULT_PAGE,
        searchParams.get("page_size") || DEFAULT_PAGE_SIZE,
        searchParams.get("ordering") || undefined,
        searchParams.get("search") || DEFAULT_SEARCH_TERM,
        searchParams.get("worker_id") || undefined
    );
    const { sessions, meta } = useMemo(() => {
        return {
            sessions: data?.data.results || [],
            meta: {
                next: data?.data.next as string,
                previous: data?.data.previous as string,
                pageCount: data?.data.num_pages as number,
            },
        };
    }, [data]);

    const displayMessage = sessions.length === 0 ? t("no_records_to_display") : undefined;

    const { selectedReactTableRows, setSelectedReactTableRows, toggleRowSelection, selectedRowIds } =
        useSelectedReactTableRowsAtom(sessions, selectedSessionRowsAtom);

    if (isError) throw new Error("React query error thrown manually from FinishedSessionsTable", { cause: error });

    const authenticatedUser = auth.wergonicUser;
    const hideColumns: string[] = [];
    const paginatedTableProps = usePaginatedTableV2({
        columns,
        data: sessions,
        meta,
        hideColumns,
        authenticatedUser,
        selectedReactTableRowsAtom: {
            selectedReactTableRows,
            setSelectedReactTableRows,
            toggleRowSelection,
            selectedRowIds,
        },
    });

    return (
        <>
            <Box mb="20px">
                {t("total")}: {data?.data.count}
            </Box>
            <FinishedSessionsTableControls
                selectedRows={paginatedTableProps.selectedReactTableRows}
                setSelectedRows={setSelectedReactTableRows}
            />
            <PaginatedTableV2
                columns={columns}
                meta={meta}
                isTableLoadingData={isLoading || isFetching}
                displayMessage={displayMessage}
                paginatedTableProps={paginatedTableProps}
            />
        </>
    );
};
