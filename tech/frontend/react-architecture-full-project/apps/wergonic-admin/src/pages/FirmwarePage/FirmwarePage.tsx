import { type HTMLDivProps, useTranslationV2 } from "ui";

import { BasicTable, TableControls } from "@features/firmware";

import {
    useCurrentVersionColumns,
    useOldVersionsColumns,
    useReadCurrentFirmwaresQuery,
    useReadOldFirmwaresQuery,
} from "./FirmwarePage.hooks";

type Props = HTMLDivProps;

export const FirmwarePage = (props: Props) => {
    const t = useTranslationV2();
    const currentVersionColumns = useCurrentVersionColumns();
    const oldVersionsColumns = useOldVersionsColumns();

    const { data: currentData, isLoading: isLoadingCurrent } = useReadCurrentFirmwaresQuery();
    const { data: oldData, isLoading: isLoadingOld } = useReadOldFirmwaresQuery();

    const currentFirmwareArray = currentData?.data.results || [];
    const oldFirmwaresArray = oldData?.data.results || [];

    let currentFirmwareMessage;
    if (isLoadingCurrent) {
        currentFirmwareMessage = t("loading");
    } else if (currentFirmwareArray.length === 0) {
        currentFirmwareMessage = t("no_records_to_display");
    }

    let oldFirmwaresMessage;
    if (isLoadingOld) {
        oldFirmwaresMessage = t("loading");
    } else if (oldFirmwaresArray.length === 0) {
        oldFirmwaresMessage = t("no_records_to_display");
    }

    return (
        <div {...props}>
            <div className="title"> {t("firmware_management.title")} </div>
            <TableControls className="table-controls" />

            {/* Sub-title and Current Version Table */}
            <div className="sub-title"> {t("firmware_management.current_version")} </div>

            <BasicTable
                columns={currentVersionColumns}
                firmwareData={currentFirmwareArray}
                emptyTableMessage={currentFirmwareMessage}
            />

            {/* Sub-title and Old Versions Table */}
            <div className="sub-title"> {t("firmware_management.old_versions")} </div>
            <BasicTable
                columns={oldVersionsColumns}
                firmwareData={oldFirmwaresArray}
                emptyTableMessage={oldFirmwaresMessage}
            />
        </div>
    );
};
