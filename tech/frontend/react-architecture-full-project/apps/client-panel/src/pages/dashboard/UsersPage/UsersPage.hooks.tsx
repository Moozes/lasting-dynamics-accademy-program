/* eslint-disable no-nested-ternary */
import react from "react";
import { Column } from "react-table";
import { format, parseISO } from "date-fns";
import { TFunction } from "i18next";

import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";

import { displayOrFallback, useTranslationV2 } from "ui";

import { UserSettingsButton } from "@features/users/index";
import { getRoleValue } from "@utils/index";

type TRoles = "Worker" | "Ergonomist" | "Admin";

const roleCellStyles =
    (roleText: TRoles, t: TFunction): SxProps<Theme> =>
    (theme) => {
        let chosenColor: string;
        switch (roleText) {
            case t("Worker"):
                chosenColor = theme.color_system.status.warning.light;
                break;
            case t("Ergonomist"):
                chosenColor = theme.color_system.status.infos.dark;
                break;
            case t("Admin"):
                chosenColor = theme.color_system.status.success.dark;
                break;
            default:
                chosenColor = theme.color_system.status.success.dark;
        }
        return {
            color: chosenColor,
            ...theme.typography.h6,
        };
    };

const statusCellStyles =
    (isActive: boolean): SxProps<Theme> =>
    (theme) => ({
        color: isActive ? theme.color_system.primary.dark : theme.color_system.button.enabled.text,
    });

export const useColumns = () => {
    const t = useTranslationV2();
    const columns: Column[] = react.useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "invitation_pending",
                accessor: "invitation_pending",
            },
            {
                Header: "is_activated_in_org",
                accessor: "is_activated_in_org",
            },
            {
                id: "full_name",
                Header: () => <span>{t("Full Name")}</span>,
                // @ts-ignore
                accessor: (row) => [row.first_name, row.last_name],
                Cell: ({ row }) => <span>{`${row.values.first_name} ${row.values.last_name}`}</span>,
            },
            {
                Header: () => <span>{t("First Name")}</span>,
                accessor: "first_name",
            },
            {
                Header: () => <span>{t("Last Name")}</span>,
                accessor: "last_name",
            },
            {
                Header: () => <span>{t("email")}</span>,
                accessor: "email",
            },
            {
                Header: () => <span>{t("Phone Number")}</span>,
                accessor: "personal_number",
                Cell: ({ value }) => <span>{displayOrFallback(value)}</span>,
            },
            {
                Header: () => <span>{t("Unit")}</span>,
                accessor: "unit",
                Cell: ({ value }) => <span>{displayOrFallback(value)}</span>,
            },
            {
                Header: () => <span>{t("Role")}</span>,
                accessor: "role",
                Cell: ({ value }) => {
                    const roleText = getRoleValue(value).text;
                    return (
                        <Box component="span" sx={roleCellStyles(roleText as TRoles, t)}>
                            {getRoleValue(value).text}
                        </Box>
                    );
                },
            },
            {
                Header: () => <span>{t("Status")}</span>,
                accessor: "is_active",
                Cell: ({ value }) => (
                    <Box component="span" sx={statusCellStyles(value)}>
                        {value ? t("Active") : t("Deactivated")}
                    </Box>
                ),
            },
            {
                Header: () => <span>{t("Start Date")}</span>,
                accessor: "start_date",
                Cell: ({ value }) => {
                    return <span>{format(parseISO(value), "LLL dd, yyyy p")}</span>;
                },
            },
            {
                Header: () => <span>{t("Organization")}</span>,
                accessor: "organization",
                Cell: ({ value }) => <span>{!value ? t("Not set") : value.name}</span>,
            },
            {
                Header: () => <span>{t("Profile")}</span>,
                accessor: "profile",
            },
            {
                id: "noSort_actions",
                disableSortBy: true,
                // @ts-ignore
                Cell: ({ row }) => <UserSettingsButton selectedUser={row.values} />,
            },
        ],
        [t]
    );

    return columns;
};
