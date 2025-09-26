import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Column, Row } from "react-table";
import { useQuery } from "@tanstack/react-query";

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, displayOrFallback, useTranslationV2 } from "ui";

import { TOrganization } from "@app-types/index";
import { readAllOrganizations } from "@queries/index";

import { CRNHeaderCell } from "../CRNHeaderCell";
import { LogoWithNameCell } from "../LogoWithNameCell";
import { StatusCell } from "../StatusCell";
import { TableSettingsButton } from "../TableSettingsButton";

export const useReadArchivedOrganizationsQuery = () => {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";
    const ordering = searchParams.get("ordering") || "";
    const page = searchParams.get("page") || DEFAULT_PAGE;
    const page_size = searchParams.get("page_size") || DEFAULT_PAGE_SIZE;
    const country = searchParams.get("country") || "";
    const license_expiration_range = searchParams.get("license_expiration_range") || "";
    const is_active = searchParams.get("is_active") || "";

    const is_archived = true;

    return useQuery(
        [
            "organizations",
            { search, ordering, page, page_size, country, license_expiration_range, is_active, is_archived },
        ],
        () =>
            readAllOrganizations({
                search,
                ordering,
                page,
                page_size,
                country,
                license_expiration_range,
                is_active,
                is_archived,
            })
    );
};

export const useColumns = () => {
    const t = useTranslationV2();
    const columns: Column[] = useMemo(
        () =>
            [
                {
                    Header: t("organization_name"),
                    accessor: "name",
                    Cell: ({ value, row }: { value: string; row: Row<TOrganization> }) => (
                        <LogoWithNameCell value={value} row={row} />
                    ),
                },
                {
                    Header: <CRNHeaderCell />,
                    accessor: "crn",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    Header: t("status"),
                    accessor: "is_active",
                    Cell: ({ row }: { row: Row<TOrganization> }) => {
                        return <StatusCell is_active={row.original.is_active} />;
                    },
                },
                {
                    Header: t("country"),
                    accessor: "country",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    Header: t("type"),
                    accessor: "type",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    Header: t("Users"),
                    accessor: "number_of_employees",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    Header: t("industry"),
                    accessor: "industry",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    Header: t("admins"),
                    accessor: "number_of_admins",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    Header: t("current_subscription"),
                    accessor: "current_subscription",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    Header: t("license_expiration"),
                    accessor: "license_expiration",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    id: "noSort_actions",
                    Cell: ({ row }: { row: Row<TOrganization> }) => <TableSettingsButton row={row} />,
                },
            ] as Column[],
        [t]
    );

    return columns;
};
