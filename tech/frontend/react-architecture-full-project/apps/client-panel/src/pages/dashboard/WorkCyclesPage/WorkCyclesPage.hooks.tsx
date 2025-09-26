import { useMemo } from "react";
import { Column, Row } from "react-table";

import { useTranslationV2 } from "ui";

import { TTask } from "@app-types/index";
import { TableSettingsButton } from "@features/workcycles";

export const useColumns = () => {
    const t = useTranslationV2();

    const columns: Column[] = useMemo(
        () =>
            [
                {
                    Header: t("factory"),
                    accessor: "task_model.workstation.line.factory.name",
                },
                {
                    Header: t("line"),
                    accessor: "task_model.workstation.line.name",
                },
                {
                    Header: t("workstation"),
                    accessor: "task_model.workstation.name",
                },
                {
                    Header: t("task_model"),
                    accessor: "task_model.name",
                },
                {
                    Header: t("task"),
                    accessor: "name",
                },
                {
                    id: "noSort_actions",
                    Cell: ({ row }: { row: Row<TTask> }) => <TableSettingsButton row={row} />,
                },
            ] as Column[],
        [t]
    );
    return columns;
};
