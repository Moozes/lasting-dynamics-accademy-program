import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useAtomValue } from "jotai";

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, PaginatedTableV2, usePaginatedTableV2, useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";
import { DashboardInnerLayout } from "@features/dashboard";
import { TableControls } from "@features/workcycles";
import { useGetAllTasksQuery } from "@queries/index";

import { useColumns } from "./WorkCyclesPage.hooks";

export const WorkCyclesPage = () => {
    const t = useTranslationV2();
    const [searchParams] = useSearchParams();
    const columns = useColumns();

    const auth = useAtomValue(authAtom);
    const authenticatedUser = auth.wergonicUser;

    const { data, isLoading, isFetching, isError, error } = useGetAllTasksQuery({
        URLPageNumber: searchParams.get("page") || DEFAULT_PAGE,
        URLPageSize: searchParams.get("page_size") || DEFAULT_PAGE_SIZE,
        URLOrder: searchParams.get("ordering") || undefined,
        URLsearchterm: searchParams.get("search") || undefined,
        URLWorkstationId: searchParams.get("workstation_id") || undefined,
        URLFactoryId: searchParams.get("task_model__workstation__line__factory") || undefined,
        URLLineId: searchParams.get("task_model__workstation__line") || undefined,
    });
    const { workCycles, meta } = useMemo(() => {
        return {
            workCycles: data?.data.results || [],
            meta: {
                next: data?.data.next as string,
                previous: data?.data.previous as string,
                pageCount: data?.data.num_pages as number,
            },
        };
    }, [data]);

    const displayMessage = workCycles.length === 0 ? t("no_records_to_display") : undefined;

    if (isError) throw new Error("React query error thrown manually from WorkCyclesPage", { cause: error });

    const paginatedTableProps = usePaginatedTableV2({
        columns,
        data: workCycles,
        meta,
        authenticatedUser,
        withRowSelection: false,
    });

    return (
        <DashboardInnerLayout header={t("workcycles.work_cycles_title")}>
            <TableControls />
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
