import { Column } from "react-table";

import { useTheme } from "@mui/material";

import { AnyObject, Typography, useTranslateLimb, useTranslationV2 } from "ui";

import { BatteryIcon } from "@assets/index";

import { IDevice, IDeviceShape1, IDeviceShape2 } from "./SessionStatusDialog.types";

enum DeviceStatusEnum {
    CONNECTED = "connected",
    NOT_CONNECTED = "not connected",
    CONNECTING = "connecting",
    PAIRED = "Paired",
    UNPAIRED = "Unpaired",
    DISCONNECTED = "disconnected",
}

export const useDeviceStatusTextAndColor = (status: DeviceStatusEnum) => {
    const t = useTranslationV2();
    const theme = useTheme();
    if (status == DeviceStatusEnum.CONNECTED || status == DeviceStatusEnum.PAIRED) {
        return {
            text: t("Connected"),
            color: theme.color_system.status.success.light,
        };
    }
    if (status == DeviceStatusEnum.CONNECTING) {
        return {
            text: t("connecting"),
            color: theme.color_system.status.success.light,
        };
    }
    if (status == DeviceStatusEnum.NOT_CONNECTED || status == DeviceStatusEnum.UNPAIRED) {
        return {
            text: t("Not Connected"),
            color: theme.color_system.status.error.dark,
        };
    }
    if (status == DeviceStatusEnum.DISCONNECTED) {
        return {
            text: t("disconnected"),
            color: theme.color_system.status.error.dark,
        };
    }
    // status is not one of the above
    return {
        text: "N/A",
        color: "",
    };
};

const isShape1 = (obj: AnyObject): obj is IDeviceShape1 => {
    return "status" in obj && "battery" in obj && "deviceId" in obj;
};
const isShape2 = (obj: AnyObject): obj is IDeviceShape2 => {
    return "device_serial" in obj && "firmware_version" in obj;
};

export const useColumns = (devices: IDevice[]): Column[] => {
    const t = useTranslationV2();
    const SHAPE1_COLUMNS: Column[] = [
        {
            Header: () => <span>{t("Connectivity")}</span>,
            accessor: "status",
            Cell: ({ value }) => {
                const { text, color } = useDeviceStatusTextAndColor(value);
                return (
                    <Typography variant="h6" sx={{ py: 0.3, color }}>
                        {text}
                    </Typography>
                );
            },
        },
        {
            Header: () => <span>{t("device_id")}</span>,
            accessor: "deviceId",
        },
        {
            Header: () => <span>{t("battery_level")}</span>,
            accessor: "battery",
            Cell: ({ value }) => <BatteryIcon value={value !== null ? value : ""} />,
        },
        {
            id: "last_timestamp",
            Header: "last_timestamp",
            accessor: "last_timestamp",
        },
    ];
    const SHAPE2_COLUMNS: Column[] = [
        {
            Header: () => <span>{t("device_serial")}</span>,
            accessor: "device_serial",
        },
        {
            Header: () => <span>{t("firmware_version")}</span>,
            accessor: "firmware_version",
        },
    ];
    const COLUMNS: Column[] = [
        {
            Header: () => <span style={{ paddingLeft: "10px" }}>{t("Limb")}</span>,
            accessor: "limb",
            Cell: ({ value }) => {
                const { translateLimb } = useTranslateLimb();
                return <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>{translateLimb(value)}</span>;
            },
        },
    ];
    if (devices && devices.length !== 0) {
        if (isShape1(devices[0])) COLUMNS.push(...SHAPE1_COLUMNS);
        else if (isShape2(devices[0])) COLUMNS.push(...SHAPE2_COLUMNS);
    }
    return COLUMNS;
};
