import { useMemo } from "react";
import { Column } from "react-table";

import { Box } from "@mui/material";

import { Typography, useTranslationV2 } from "ui";

import { TNOAnglesEnum } from "@features/sessions/types";
import { format_hh_mm_ss } from "@utils/index";

export const useColumns = () => {
    const t = useTranslationV2();
    const columns: Column[] = useMemo(
        () => [
            {
                Header: () => <span>{t("Range")}</span>,
                accessor: "label",
                Cell: ({ value }) =>
                    value === "-" ? (
                        <Typography variant="h6">{value}</Typography>
                    ) : (
                        <Box display="flex" gap={2} alignItems="center" justifyContent="center">
                            <Box
                                width="14px"
                                height="14px"
                                borderRadius="8px"
                                bgcolor={
                                    /* eslint-disable no-nested-ternary */
                                    value === TNOAnglesEnum._10_to_20 || value === TNOAnglesEnum._0_to_20
                                        ? "#0ACF83"
                                        : value === TNOAnglesEnum._20_to_60 || value === TNOAnglesEnum.lt0_or_gt20
                                        ? "#FF9B26"
                                        : "#F24E1E"
                                }
                            />
                            <Typography variant="h6">{value}</Typography>
                        </Box>
                    ),
            },
            {
                Header: () => <span>{t("Static")}</span>,
                accessor: "static",
                Cell: ({ value }) => (
                    <Typography variant="h6">{value === "-" ? value : format_hh_mm_ss(value * 1000)}</Typography>
                ),
            },
            {
                Header: () => <span>{t("Dynamic")}</span>,
                accessor: "dynamic",
                Cell: ({ value }) => (
                    <Typography variant="h6">{value === "-" ? value : `${parseInt(value, 10)}x/min`}</Typography>
                ),
            },
        ],
        [t]
    );
    return columns;
};
