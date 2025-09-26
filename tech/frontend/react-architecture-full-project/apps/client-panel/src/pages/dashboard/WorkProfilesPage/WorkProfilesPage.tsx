import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useAtom } from "jotai";

import Box from "@mui/material/Box";

import {
    DEFAULT_PAGE,
    DEFAULT_PAGE_SIZE,
    DEFAULT_SEARCH_TERM,
    PaginatedTableV2,
    usePaginatedTableV2,
    useSetDefaultQueryParams,
    useTranslationV2,
} from "ui";

import { authAtom } from "@atoms/index";
import { DashboardInnerLayout } from "@features/dashboard";
import { TableControls, useGetProfilesQuery } from "@features/workProfiles";

import { useColumns } from "./WorkProfilesPage.hooks";
import { sortingKeymap } from "./WorkProfilesPage.utils";

export const WorkProfilesPage = () => {
    useSetDefaultQueryParams();
    const t = useTranslationV2();
    const columns = useColumns();
    const [searchParams] = useSearchParams();
    const [auth] = useAtom(authAtom);
    const { data, isLoading, isFetching, isError, error } = useGetProfilesQuery(
        searchParams.get("page") || DEFAULT_PAGE,
        searchParams.get("page_size") || DEFAULT_PAGE_SIZE,
        searchParams.get("ordering") || undefined,
        searchParams.get("search") || DEFAULT_SEARCH_TERM
    );

    const { profiles, meta } = useMemo(() => {
        return {
            profiles: data?.data.results || [],
            meta: {
                next: data?.data.next as string,
                previous: data?.data.previous as string,
                pageCount: data?.data.num_pages as number,
            },
        };
    }, [data]);

    const displayMessage = profiles.length === 0 ? t("no_records_to_display") : undefined;

    if (isError) throw new Error("React query error thrown manually from WorkProfilesPage", { cause: error });

    const authenticatedUser = auth.wergonicUser;
    const hideColumns = ["id"];
    const paginatedTableProps = usePaginatedTableV2({
        columns,
        data: profiles,
        meta,
        hideColumns,
        authenticatedUser,
        section: "workProfiles",
        withRowSelection: false,
    });

    return (
        <DashboardInnerLayout header={t("worker_profiles")}>
            <Box mb="20px">
                {t("total")}: {data?.data.count}
            </Box>
            <TableControls />
            <PaginatedTableV2
                columns={columns}
                meta={meta}
                isTableLoadingData={isLoading || isFetching}
                sortingKeyMap={sortingKeymap}
                displayMessage={displayMessage}
                paginatedTableProps={paginatedTableProps}
            />
        </DashboardInnerLayout>
    );
};

export default WorkProfilesPage;
