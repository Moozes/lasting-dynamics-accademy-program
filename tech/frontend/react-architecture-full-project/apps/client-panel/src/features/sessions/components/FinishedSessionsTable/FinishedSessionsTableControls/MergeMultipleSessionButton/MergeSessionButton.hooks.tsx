import { useMemo, useState } from "react";
import { Column, Row } from "react-table";
import { format, parseISO } from "date-fns";

import { useTranslationV2 } from "ui";

import { ISession } from "@features/sessions/types";

export const useMergeConstraint = (typedSelectedRows: Row<ISession>[]) => {
    const t = useTranslationV2();
    const [showInfoDialog, setShowInfoDialog] = useState(false);
    const mergeInfoArray: string[] = [];

    // Constraint: At least 2 sessions should be selected
    const count = typedSelectedRows.length;
    const constraint_minimum_two_sessions = count >= 2;

    const allConstraintsAreVerified = constraint_minimum_two_sessions;

    const clickHandler = (callback: () => void) => {
        if (allConstraintsAreVerified) {
            callback();
        } else {
            setShowInfoDialog(true);
        }
    };

    if (!constraint_minimum_two_sessions) mergeInfoArray.push(t("You must select at least 2 sessions to merge"));

    return {
        clickHandler,
        showInfoDialog,
        setShowInfoDialog,
        mergeInfoArray,
    };
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
                Header: () => <span>{t("Worker_name")}</span>,
                // @ts-ignore
                accessor: (row) => row.worker,
                Cell: ({ value }) => <span>{`${value.first_name} ${value.last_name}`}</span>,
                disableSortBy: true,
            },
            {
                id: "workstation",
                Header: () => <span>{t("workstation")}</span>,
                accessor: "workplace",
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
