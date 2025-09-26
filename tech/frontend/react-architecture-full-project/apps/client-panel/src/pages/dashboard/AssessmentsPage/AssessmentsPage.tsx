import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useAtomValue } from "jotai";

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

import { authAtom, selectedAssessmentRowsAtom } from "@atoms/index";
import { TableControls } from "@components/index";
import { DashboardInnerLayout } from "@features/dashboard";
import { useIsDrawerOpenCustomState } from "@features/dashboard/index";
import { useGetAssessmentsQuery } from "@queries/index";

import { useColumns } from "./AssessmentsPage.hooks";

export const AssessmentsPage = () => {
    useSetDefaultQueryParams();
    const t = useTranslationV2();
    const { isDrawerOpenCustomState } = useIsDrawerOpenCustomState();
    const auth = useAtomValue(authAtom);
    const [searchParams] = useSearchParams();
    const columns = useColumns();
    const { data, isLoading, isFetching, isError, error } = useGetAssessmentsQuery(
        searchParams.get("page") || DEFAULT_PAGE,
        searchParams.get("page_size") || DEFAULT_PAGE_SIZE,
        searchParams.get("ordering") || undefined,
        searchParams.get("search") || DEFAULT_SEARCH_TERM,
        searchParams.get("status") || undefined,
        searchParams.get("date_range") || undefined,
        searchParams.get("assesment_category") || undefined,
        searchParams.get("worker_id") || undefined
    );

    const { RAMPAssessments, meta } = useMemo(() => {
        return {
            RAMPAssessments: data?.data.results || [],
            meta: {
                next: data?.data.next as string,
                previous: data?.data.previous as string,
                pageCount: data?.data.num_pages as number,
            },
        };
    }, [data]);

    const displayMessage = RAMPAssessments.length === 0 ? t("no_records_to_display") : undefined;

    if (isError) throw new Error("React query error thrown manually from RAMPPage", { cause: error });

    const { selectedReactTableRows, setSelectedReactTableRows, toggleRowSelection, selectedRowIds } =
        useSelectedReactTableRowsAtom(RAMPAssessments, selectedAssessmentRowsAtom);

    useEffect(() => {
        // Clear selected rows whenever assessment category search param changes
        setSelectedReactTableRows([]);
    }, [searchParams.get("assesment_category"), setSelectedReactTableRows]);

    const authenticatedUser = auth.wergonicUser;
    const hideColumns = ["worker", "work_task", "unit", "company_representative", "assessment_completed_by", "comment"];
    const paginatedTableProps = usePaginatedTableV2({
        columns,
        data: RAMPAssessments,
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

    const assesment_category = searchParams.get("assesment_category");

    return (
        <DashboardInnerLayout header={t("assessments.category_assessments", { category: assesment_category })}>
            <Box mb="20px">
                {t("total")}: {data?.data.count}
            </Box>
            <TableControls
                isDrawerOpen={isDrawerOpenCustomState}
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
        </DashboardInnerLayout>
    );
};
