import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Column, Row } from "react-table";
import { useQuery } from "@tanstack/react-query";

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, displayOrFallback, useTranslationV2 } from "ui";

import { TDevice } from "@app-types/index";
import { TableSettingsButton } from "@features/devices";
import { readAllDevices } from "@queries/index";

export const useReadAllDevicesQuery = () => {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || undefined;
    const page = searchParams.get("page") || DEFAULT_PAGE;
    const page_size = searchParams.get("page_size") || DEFAULT_PAGE_SIZE;

    return useQuery(["devices", { search, page, page_size }], () => readAllDevices({ search, page, page_size }));
};

export const useColumns = () => {
    const t = useTranslationV2();
    const columns: Column[] = useMemo(
        () =>
            [
                {
                    Header: t("Worker ID"),
                    accessor: "worker",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    Header: t("Organization"),
                    accessor: "organization",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    Header: t("Locale"),
                    accessor: "locale",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    Header: t("Device Model"),
                    accessor: "device_model",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    id: "noSort_actions",
                    Cell: ({ row }: { row: Row<TDevice> }) => <TableSettingsButton deviceId={row.original.id} />,
                },
            ] as Column[],
        [t]
    );
    return columns;
};
