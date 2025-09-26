import { useMemo } from "react";
import { useAtom } from "jotai";

import {
    type HTMLDivProps,
    PaginatedTableV2,
    usePaginatedTableV2,
    useSelectedReactTableRowsAtom,
    useTranslationV2,
} from "ui";

import { authAtom, selectedOrganizationRowsAtom } from "@atoms/index";

import { TableControls } from "../TableControls";

import { useColumns, useReadCurrentOrganizationsQuery } from "./CurrentOrganizationsTable.hooks";

type Props = HTMLDivProps;

export const CurrentOrganizationsTable = (props: Props) => {
    const t = useTranslationV2();
    const columns = useColumns();
    const [auth] = useAtom(authAtom);
    const { data, isLoading, isFetching, error, isError } = useReadCurrentOrganizationsQuery();

    const { organizations, meta } = useMemo(() => {
        return {
            organizations: data?.data.results || [],
            meta: {
                next: data?.data.next as string,
                previous: data?.data.previous as string,
                pageCount: data?.data.num_pages as number,
            },
        };
    }, [data]);
    const displayMessage = organizations.length === 0 ? t("no_records_to_display") : undefined;

    const { selectedReactTableRows, setSelectedReactTableRows, toggleRowSelection, selectedRowIds } =
        useSelectedReactTableRowsAtom(organizations, selectedOrganizationRowsAtom);

    if (isError) throw new Error("React query error thrown manually from CurrentOrganizationsTable", { cause: error });
    const authenticatedUser = auth.wergonicUser;
    const hideColumns: string[] = [];

    const paginatedTableProps = usePaginatedTableV2({
        columns,
        data: organizations,
        meta,
        hideColumns,
        authenticatedUser,
        selectedReactTableRowsAtom: {
            selectedReactTableRows,
            setSelectedReactTableRows,
            toggleRowSelection,
            selectedRowIds,
        },
    });

    return (
        <div {...props}>
            <TableControls
                className="table-controls"
                selectedRows={selectedReactTableRows}
                setSelectedRows={setSelectedReactTableRows}
                archive
            />
            <PaginatedTableV2
                columns={columns}
                meta={meta}
                isTableLoadingData={isLoading || isFetching}
                displayMessage={displayMessage}
                paginatedTableProps={paginatedTableProps}
            />
        </div>
    );
};
