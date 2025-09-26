import { useTranslationV2 } from "ui";

import { ITempStatsData } from "@features/sessions/types";

import StatisticsTable from "../StatisticsTable";

import { useColumns } from "./TemperatureTableComponent.hooks";

export const TemperatureTableComponent = ({ tempStats }: { tempStats: ITempStatsData[] }) => {
    const t = useTranslationV2();
    const temp_columns = useColumns();

    return <StatisticsTable data={tempStats} tableHeader={t("Temperature")} columns={temp_columns} />;
};
