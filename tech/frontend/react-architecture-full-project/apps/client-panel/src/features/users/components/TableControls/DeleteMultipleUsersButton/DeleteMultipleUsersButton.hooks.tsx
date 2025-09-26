import { useMemo } from "react";
import { Column } from "react-table";

import { useTranslationV2 } from "ui";

import { useConfirmWordSchema } from "@schemas/index";
import { getRoleValue } from "@utils/index";

export const useDeleteMultipleUsersForm = () => {
    const deleteMultipleUsersInitialValues = (passedRandomWord: string) => ({
        word: passedRandomWord,
        word_confirmation: "",
    });
    const { confirmWordSchema: DeleteMultipleUserSchema } = useConfirmWordSchema();
    return { deleteMultipleUsersInitialValues, deleteMultipleUsersValidationSchema: DeleteMultipleUserSchema };
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
                id: "full_name",
                Header: () => <span>{t("Full Name")}</span>,
                // @ts-ignore
                accessor: (row) => [row.first_name, row.last_name],
                Cell: ({ row }) => <span>{`${row.values.first_name} ${row.values.last_name}`}</span>,
            },
            {
                Header: "First Name",
                accessor: "first_name",
            },
            {
                Header: "Last Name",
                accessor: "last_name",
            },
            {
                Header: () => <span>{t("email")}</span>,
                accessor: "email",
            },
            {
                Header: () => <span>{t("Role")}</span>,
                accessor: "role",
                Cell: ({ value }) => {
                    return <span>{getRoleValue(value).text}</span>;
                },
            },
        ],
        [t]
    );
    return columns;
};
