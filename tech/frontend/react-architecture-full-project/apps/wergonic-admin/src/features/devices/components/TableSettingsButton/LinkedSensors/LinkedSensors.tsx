import { DataTable, type HTMLDivProps, useTranslationV2 } from "ui";

import { useLinkedSensors } from "./LinkedSensors.hooks";

type Props = HTMLDivProps & {
    deviceId: string;
};

export const LinkedSensors = ({ deviceId, ...props }: Props) => {
    const t = useTranslationV2();
    const { sensors, columns, isLoading } = useLinkedSensors(deviceId);

    return (
        <div {...props}>
            <div className="linked-sensors">
                <div className="text">
                    <div className="title">{t("devices_management.linked_sensors")}</div>
                </div>
                <div className="sensors-table-container">
                    {isLoading ? <div>{t("loading")}</div> : <DataTable columns={columns} data={sensors} />}
                </div>
            </div>
        </div>
    );
};
