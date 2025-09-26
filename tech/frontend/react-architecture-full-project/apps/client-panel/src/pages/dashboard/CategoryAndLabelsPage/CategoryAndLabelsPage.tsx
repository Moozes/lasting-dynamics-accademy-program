import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useAtomValue } from "jotai";

import {
    DEFAULT_PAGE,
    DEFAULT_PAGE_SIZE,
    DEFAULT_SEARCH_TERM,
    PaginatedTableV2,
    usePaginatedTableV2,
    useSetDefaultQueryParams,
    useTranslationV2,
} from "ui";

import { CategoryTypesEnum } from "@app-types/index";
import { authAtom } from "@atoms/index";
import { CategoryAndLabelsTableControls } from "@features/CategoriesAndLabels";
import { DashboardInnerLayout } from "@features/dashboard";
import { useGetCategoriesAndLabelsQuery } from "@queries/index";

import { useColumns } from "./CategoryAndLabelsPage.hooks";

export const CategoryAndLabelsPage = () => {
    useSetDefaultQueryParams();
    const t = useTranslationV2();
    const auth = useAtomValue(authAtom);
    const [searchParams] = useSearchParams();
    const columns = useColumns();
    const categoryType = searchParams.get("category_type") || undefined;
    const { data, isLoading, isFetching, isError, error } = useGetCategoriesAndLabelsQuery(
        searchParams.get("page") || DEFAULT_PAGE,
        searchParams.get("page_size") || DEFAULT_PAGE_SIZE,
        searchParams.get("ordering") || undefined,
        searchParams.get("search") || DEFAULT_SEARCH_TERM,
        categoryType,
        auth.wergonicUser?.organization?.id
    );

    const { categoriesAndLabels, meta } = useMemo(() => {
        return {
            categoriesAndLabels: data?.data.results || [],
            meta: {
                next: data?.data.next as string,
                previous: data?.data.previous as string,
                pageCount: data?.data.num_pages as number,
            },
        };
    }, [data]);

    const displayMessage = categoriesAndLabels.length === 0 ? t("no_records_to_display") : undefined;

    if (isError) throw new Error("React query error thrown manually from RAMPPage", { cause: error });

    const authenticatedUser = auth.wergonicUser;
    const hideColumns = ["id", "category_name"];
    const paginatedTableProps = usePaginatedTableV2({
        columns: columns as any,
        data: categoriesAndLabels,
        meta,
        hideColumns,
        authenticatedUser,
        withRowSelection: false,
    });

    const pageTitle = categoryType == CategoryTypesEnum.WORK_LABEL ? t("work_labels") : t("work_tasks");

    return (
        <DashboardInnerLayout header={pageTitle}>
            <CategoryAndLabelsTableControls />
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
