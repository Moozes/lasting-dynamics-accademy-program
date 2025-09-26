import { useMemo } from "react";
import { Column } from "react-table";
import { TFunction } from "i18next";

import { Theme, useTheme } from "@mui/material";

import { displayOrFallback, useTranslationV2 } from "ui";

import { WorkProfilesSettingsButton } from "@features/workProfiles";

const getGenderStyle = (genderText: string, t: TFunction, theme: Theme) => {
    let chosenColor: string;
    switch (genderText) {
        case t("Male"):
            chosenColor = theme.color_system.status.infos.dark;
            break;
        case t("Female"):
            chosenColor = theme.color_system.status.warning.light;
            break;
        default:
            chosenColor = theme.color_system.text.primary;
    }
    return {
        color: chosenColor,
        ...theme.typography.h6,
    };
};

const formatCellContent = (value: any, style: React.CSSProperties = {}) => {
    return (
        <span
            style={{
                textAlign: "center",
                ...style,
            }}
        >
            {displayOrFallback(value)}
        </span>
    );
};

export const useColumns = () => {
    const t = useTranslationV2();
    const theme = useTheme();
    const columns: Column[] = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                id: "full_name",
                Header: () => <span>{t("Full Name")}</span>,
                // @ts-ignore
                accessor: (row) => `${row.first_name} ${row.last_name}`,
                Cell: ({ value }) => formatCellContent(value),
            },
            {
                Header: () => <span>{t("Workplace")}</span>,
                accessor: "unit",
                Cell: ({ value }) => formatCellContent(value),
            },
            {
                Header: () => <span>{t("Gender")}</span>,
                accessor: "gender",
                Cell: ({ value }) => formatCellContent(value, getGenderStyle(value, t, theme)),
            },
            {
                Header: () => <span>{t("Age")}</span>,
                accessor: "age",
                Cell: ({ value }) => formatCellContent(value),
            },
            {
                Header: () => <span>{t("Weight")}</span>,
                accessor: "weight",
                Cell: ({ value }) => formatCellContent(value),
            },
            {
                Header: () => <span>{t("Consultant")}</span>,
                accessor: "consultant",
                Cell: ({ value }) => formatCellContent(value ? `${value.first_name} ${value.last_name}` : "-"),
            },
            {
                id: "noSort_actions",
                disableSortBy: true,
                // @ts-ignore
                Cell: ({ row }) => <WorkProfilesSettingsButton selectedUser={row.values} />,
            },
        ],
        [t]
    );

    return columns;
};
