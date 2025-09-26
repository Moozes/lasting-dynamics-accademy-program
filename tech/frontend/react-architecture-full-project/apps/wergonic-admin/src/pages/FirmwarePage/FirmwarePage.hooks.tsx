import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, useTranslationV2 } from "ui";

import { TColumn, TFirmware } from "@app-types/index";
import { ActionButton } from "@features/firmware";
import { readAllFirmwares } from "@queries/index";

export const useReadCurrentFirmwaresQuery = () => {
    return useQuery(["devices", "firmwares", { is_current: true }], () => readAllFirmwares({ is_current: true }));
};

export const useReadOldFirmwaresQuery = () => {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || undefined;
    const page = searchParams.get("page") || DEFAULT_PAGE;
    const page_size = searchParams.get("page_size") || DEFAULT_PAGE_SIZE;

    return useQuery(["devices", "firmwares", { is_current: false, search, page, page_size }], () =>
        readAllFirmwares({ is_current: false, search, page, page_size })
    );
};

export const useCurrentVersionColumns = (): TColumn[] => {
    const t = useTranslationV2();
    const columns: TColumn[] = useMemo(
        () => [
            {
                Header: t("firmware_version"),
                accessor: "firmware_version",
            },
            {
                Header: t("description"),
                accessor: "description",
            },
            {
                Header: t("release_date"),
                accessor: "release_date",
            },
            {
                // this is to show an empty column
                Header: "",
                accessor: "id",
                Cell: () => <div />,
            },
        ],
        [t]
    );

    return columns;
};
export const useOldVersionsColumns = (): TColumn[] => {
    const t = useTranslationV2();
    const columns: TColumn[] = useMemo(
        () => [
            {
                Header: t("firmware_version"),
                accessor: "firmware_version",
            },
            {
                Header: t("description"),
                accessor: "description",
            },
            {
                Header: t("release_date"),
                accessor: "release_date",
            },
            {
                Header: "",
                accessor: "id",
                Cell: ({ row }: { row: TFirmware }) => <ActionButton id={row.id} />,
            },
        ],
        [t]
    );

    return columns;
};
