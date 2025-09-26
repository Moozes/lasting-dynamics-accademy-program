import { useMemo } from "react";
import { Column } from "react-table";

import { Typography, useTranslationV2 } from "ui";

export const useColumns = () => {
    const t = useTranslationV2();
    const columns: Column[] = useMemo(
        () => [
            {
                Header: () => <span>{t("variable")}</span>,
                accessor: "name",
                Cell: ({ value }) => <Typography variant="h6">{value}</Typography>,
            },
            {
                Header: () => <span>{t("unit_other")}</span>,
                accessor: "unit",
                Cell: ({ value }) => <Typography variant="h6">{value}</Typography>,
            },
            {
                Header: () => <span>{t("value")}</span>,
                accessor: "value",
                Cell: ({ value }) => <Typography variant="h6">{value}</Typography>,
            },
        ],
        [t]
    );
    return columns;
};
