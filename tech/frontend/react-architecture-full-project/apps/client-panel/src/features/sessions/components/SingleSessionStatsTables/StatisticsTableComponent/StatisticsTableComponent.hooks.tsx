import { useMemo } from "react";
import { Column } from "react-table";

import { Typography, useTranslationV2 } from "ui";

import { formatDuration } from "@features/sessions/components/BaseSessionTab/BaseSessionTab.utils";

export const useColumns = () => {
    const t = useTranslationV2();
    const columns: Column[] = useMemo(
        () => [
            {
                Header: () => <span>{t("Angle")}</span>,
                accessor: "label",
                Cell: ({ value }) => <Typography variant="h6">{value}</Typography>,
            },
            {
                Header: () => <span>{t("time_duration")}</span>,
                accessor: "duration",
                Cell: ({ value }) => <Typography variant="h6">{formatDuration(value)}</Typography>,
            },
            {
                Header: () => <span>{t("Percentage")}</span>,
                accessor: "value",
                Cell: ({ value }) => <Typography variant="h6">{value}%</Typography>,
            },
        ],
        [t]
    );
    return columns;
};
