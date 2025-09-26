import { useAtomValue } from "jotai";

import { type HTMLDivProps, PaginatedTableV2, usePaginatedTableV2, useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";
import { TableControls } from "@features/devices";

import { useColumns, useReadAllDevicesQuery } from "./DevicesPage.hooks";

type Props = HTMLDivProps;

export const DevicesPage = (props: Props) => {
    const t = useTranslationV2();
    const authenticatedUser = useAtomValue(authAtom).wergonicUser;
    const columns = useColumns();
    const { data, isLoading, isFetching } = useReadAllDevicesQuery();
    const devices_array = data?.data.results || [];
    const displayMessage = devices_array.length === 0 ? t("no_records_to_display") : undefined;
    const meta = {
        next: data?.data.next as string,
        previous: data?.data.previous as string,
        pageCount: data?.data.num_pages as number,
    };
    const paginatedTableProps = usePaginatedTableV2({
        columns,
        data: devices_array,
        meta,
        hideColumns: [],
        authenticatedUser,
        withRowSelection: false,
    });
    return (
        <div {...props}>
            <div className="title"> {t("devices")} </div>
            <TableControls className="table-controls" />
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
