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
    useSetDefaultQueryParams,
    useTranslationV2,
} from "ui";

import { authAtom } from "@atoms/index";
import { DashboardInnerLayout } from "@features/dashboard";
import { DEFAULT_ROLES, TableControls, useGetUsersQuery } from "@features/users/index";

import { useColumns } from "./UsersPage.hooks";
import { isRowDisabled, sortingKeymap } from "./usersPage.utils";

export const UsersPage = () => {
    useSetDefaultQueryParams();
    const t = useTranslationV2();
    const columns = useColumns();
    const [searchParams] = useSearchParams();
    const [auth] = useAtom(authAtom);
    const { data, isLoading, isFetching, isError, error } = useGetUsersQuery(
        searchParams.get("page") || DEFAULT_PAGE,
        searchParams.get("page_size") || DEFAULT_PAGE_SIZE,
        searchParams.get("ordering") || undefined,
        searchParams.get("search") || DEFAULT_SEARCH_TERM,
        searchParams.get("role__in") || DEFAULT_ROLES,
        searchParams.get("is_active") || undefined
    );

    const { users, meta } = useMemo(() => {
        return {
            users: data?.data.results || [],
            meta: {
                next: data?.data.next as string,
                previous: data?.data.previous as string,
                pageCount: data?.data.num_pages as number,
            },
        };
    }, [data]);

    const displayMessage = users.length === 0 ? t("no_records_to_display") : undefined;

    if (isError) throw new Error("React query error thrown manually from UsersPage", { cause: error });

    const authenticatedUser = auth.wergonicUser;
    const hideColumns = [
        "first_name",
        "last_name",
        "organization",
        "profile",
        "invitation_pending",
        "is_activated_in_org",
    ];
    const paginatedTableProps = usePaginatedTableV2({
        columns,
        data: users,
        meta,
        hideColumns,
        authenticatedUser,
        section: "userManagment",
    });

    return (
        <DashboardInnerLayout header={t("users_management.pageHeader")}>
            <Box mb="20px">
                {t("total")}: {data?.data.count}
            </Box>
            <TableControls selectedRows={paginatedTableProps.selectedFlatRows} />
            <PaginatedTableV2
                columns={columns}
                meta={meta}
                isTableLoadingData={isLoading || isFetching}
                sortingKeyMap={sortingKeymap}
                displayMessage={displayMessage}
                paginatedTableProps={paginatedTableProps}
                isRowDisabled={isRowDisabled}
            />
        </DashboardInnerLayout>
    );
};
