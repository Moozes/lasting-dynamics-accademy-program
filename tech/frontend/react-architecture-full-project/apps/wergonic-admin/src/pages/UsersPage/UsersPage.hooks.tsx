import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Column, Row } from "react-table";
import { useQuery } from "@tanstack/react-query";

import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";

import {
    DEFAULT_PAGE,
    DEFAULT_PAGE_SIZE,
    displayOrFallback,
    UserRoleEnum,
    useTranslationV2,
    useTrasnlateUserRole,
} from "ui";

import { TOrganizationUser } from "@app-types/index";
import { TableSettingsButton } from "@features/users";
import { readAllUsers } from "@queries/index";

const useRoleStyles = () => {
    return (role: string | undefined): SxProps<Theme> =>
        (theme) => {
            let chosenColor: string;

            switch (role) {
                case UserRoleEnum.WORKER:
                    chosenColor = theme.color_system.status.warning.light;
                    break;
                case UserRoleEnum.ERGONOMIST:
                    chosenColor = theme.color_system.status.infos.dark;
                    break;
                case UserRoleEnum.WERGONIC_ADMIN:
                case UserRoleEnum.ORG_ADMIN:
                    chosenColor = theme.color_system.status.success.light;
                    break;
                default:
                    chosenColor = theme.color_system.text.secondary;
            }

            return {
                color: chosenColor,
                ...theme.typography.h6,
            };
        };
};

export const useReadAllUsersQuery = () => {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";
    const ordering = searchParams.get("ordering") || "";
    const page = searchParams.get("page") || DEFAULT_PAGE;
    const page_size = searchParams.get("page_size") || DEFAULT_PAGE_SIZE;
    const organization_names = searchParams.get("organization_names") || undefined;
    const role_in = searchParams.get("role_in") || undefined;

    return useQuery(["users", { search, ordering, page, page_size, organization_names, role_in }], () =>
        readAllUsers({ search, ordering, page, page_size, organization_names, role_in })
    );
};

export const useColumns = () => {
    const t = useTranslationV2();
    const { trasnlateUserRole } = useTrasnlateUserRole();
    const getRoleStyles = useRoleStyles();

    const columns: Column[] = useMemo(
        () =>
            [
                {
                    Header: t("full_name"),
                    accessor: "full_name",
                    Cell: ({ value }) => <div>{displayOrFallback(value.trim())}</div>,
                },
                {
                    Header: t("organization_and_role"),
                    accessor: (row: TOrganizationUser) => `${row.role} - ${row.organization}`,
                    Cell: ({ row }: { row: Row<TOrganizationUser> }) => {
                        const { role, organization } = row.original;
                        const translatedRole = trasnlateUserRole(role);
                        return (
                            <Box>
                                <Box component="span" sx={getRoleStyles(role)}>
                                    {translatedRole}
                                </Box>
                                <span> - {organization}</span>
                            </Box>
                        );
                    },
                },
                {
                    Header: t("user_locale"),
                    accessor: "user_locale",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    Header: t("subject_id"),
                    accessor: "subject_ID",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    Header: t("personal_number"),
                    accessor: "personal_number",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    Header: t("email"),
                    accessor: "email",
                    Cell: ({ value }) => <div>{displayOrFallback(value)}</div>,
                },
                {
                    id: "noSort_actions",
                    Cell: ({ row }: { row: Row<TOrganizationUser> }) => (
                        <TableSettingsButton email={row.original.email} />
                    ),
                },
            ] as Column[],
        [t]
    );

    return columns;
};
