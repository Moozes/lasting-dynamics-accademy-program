import { useMemo } from "react";
import { Column } from "react-table";

import { useTranslationV2 } from "ui";

import {
    CategoryAndLabelsCell,
    CategoryAndLabelsSettingButton,
    ICategoryAndLabels,
} from "@features/CategoriesAndLabels";

export const useColumns = () => {
    const t = useTranslationV2();
    const columns: Column[] = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "category_name",
                accessor: "category_name",
            },
            {
                id: "noSort_actions",
                Header: () => <span>{t("category/tags")}</span>,
                accessor: (row) => row,
                Cell: ({ value }: { value: ICategoryAndLabels }) => {
                    return <CategoryAndLabelsCell categoryAndLabels={value} />;
                },
            },
            {
                Header: () => <span>{t("used")}</span>,
                accessor: "used",
            },
            {
                id: "noSort_actions2",
                accessor: (row) => row,
                Cell: ({ value }: { value: ICategoryAndLabels }) => (
                    <CategoryAndLabelsSettingButton selectedRow={value} />
                ),
            },
        ],
        [t]
    );
    return columns;
};
