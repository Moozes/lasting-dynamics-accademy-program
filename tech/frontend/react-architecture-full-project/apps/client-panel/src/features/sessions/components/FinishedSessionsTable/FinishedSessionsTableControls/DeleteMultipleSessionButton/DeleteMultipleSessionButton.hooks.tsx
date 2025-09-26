import { useMemo } from "react";
import { Column } from "react-table";
import { format, parseISO } from "date-fns";

import { useTheme } from "@mui/material";

import { Typography, useTranslationV2 } from "ui";

import { useDifferenceInHourseOrMinutes } from "@features/sessions/hooks";
import { useConfirmWordSchema } from "@schemas/index";

export const useDeleteMultipleSessionsForm = () => {
    const deleteMultipleSessionsInitialValues = (passedRandomWord: string) => ({
        word: passedRandomWord,
        word_confirmation: "",
    });
    const { confirmWordSchema: deleteMultipleSessionsValidationSchema } = useConfirmWordSchema();
    return { deleteMultipleSessionsInitialValues, deleteMultipleSessionsValidationSchema };
};

export const useColumns = () => {
    const t = useTranslationV2();
    const columns: Column[] = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                id: "worker",
                Header: () => <span>{t("Worker")}</span>,
                // @ts-ignore
                accessor: (row) => row.worker,
                Cell: ({ value }) => <span>{`${value.first_name} ${value.last_name}`}</span>,
                disableSortBy: true,
            },
            {
                id: "recorded_by",
                Header: () => <span>{t("Recorded_by")}</span>,
                // @ts-ignore
                accessor: (row) => row.recorded_by,
                Cell: ({ value }) => <span>{`${value.first_name} ${value.last_name}`}</span>,
                disableSortBy: true,
            },
            {
                id: "duration",
                Header: () => <span>{t("Duration")}</span>,
                // @ts-ignore
                accessor: (row) => ({ start: row.started_at, end: row.ended_at }),
                Cell: ({ value }) => {
                    const theme = useTheme();
                    const { formatedDifferenceString } = useDifferenceInHourseOrMinutes(value.start, value.end);
                    return (
                        <Typography
                            variant="h6"
                            color={theme.color_system.text.secondary}
                            sx={{ textTransform: "capitalize" }}
                        >
                            {formatedDifferenceString}
                        </Typography>
                    );
                },
                disableSortBy: true,
            },
            {
                Header: () => <span>{t("Completed at")}</span>,
                accessor: "updated_at",
                Cell: ({ value }) => {
                    return <span>{format(parseISO(value), "LLL dd, yyyy p")}</span>;
                },
            },
            {
                Header: () => <span>{t("Started_at")}</span>,
                accessor: "started_at",
                Cell: ({ value }) => {
                    return <span>{format(parseISO(value), "LLL dd, yyyy p")}</span>;
                },
            },
        ],
        [t]
    );
    return columns;
};
