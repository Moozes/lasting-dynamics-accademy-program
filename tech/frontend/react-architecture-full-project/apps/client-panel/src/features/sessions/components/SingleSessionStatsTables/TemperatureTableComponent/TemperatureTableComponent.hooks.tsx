import { useMemo } from "react";
import { Column } from "react-table";

import { Typography, useTranslateLimb, useTranslationV2 } from "ui";

export const useColumns = () => {
    const t = useTranslationV2();
    const columns: Column[] = useMemo(
        () => [
            {
                Header: () => <span>{t("Limbs")}</span>,
                accessor: "limb",
                Cell: ({ value }) => {
                    const { translateLimb } = useTranslateLimb();
                    return <Typography variant="h6">{translateLimb(value)}</Typography>;
                },
            },
            {
                Header: () => <span>{t("mean")}</span>,
                accessor: "mean",
                Cell: ({ value }) => <Typography variant="h6">{value.toFixed(2)}</Typography>,
            },
            {
                Header: () => <span>{t("max")}</span>,
                accessor: "max",
                Cell: ({ value }) => <Typography variant="h6">{value.toFixed(2)}</Typography>,
            },
            {
                Header: () => <span>{t("min")}</span>,
                accessor: "min",
                Cell: ({ value }) => <Typography variant="h6">{value.toFixed(2)}</Typography>,
            },
            {
                Header: () => <span>{t("median")}</span>,
                accessor: "median",
                Cell: ({ value }) => <Typography variant="h6">{value.toFixed(2)}</Typography>,
            },
        ],
        [t]
    );
    return columns;
};
