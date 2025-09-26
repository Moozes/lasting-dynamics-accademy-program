import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { TSensor } from "@app-types/index";
import { readSingleDevice } from "@queries/index";

export const useLinkedSensors = (deviceId: string) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const [sensors, setSensors] = useState<TSensor[]>([]);

    const { data, error, isLoading } = useQuery(["devices", deviceId], () => readSingleDevice(deviceId));

    useEffect(() => {
        if (data?.data.sensors) {
            setSensors(data?.data.sensors);
        }

        if (error) {
            enqueueSnackbar(t("queries.something_went_wrong"), { severity: "error" });
        }
    }, [data, error, enqueueSnackbar, t]);

    const columns = useMemo(
        () => [
            {
                Header: t("Sensor ID"),
                accessor: "sensor_id",
            },
            {
                Header: t("Limb"),
                accessor: "limb",
            },
        ],
        [t]
    );

    return {
        sensors,
        columns,
        isLoading,
    };
};
