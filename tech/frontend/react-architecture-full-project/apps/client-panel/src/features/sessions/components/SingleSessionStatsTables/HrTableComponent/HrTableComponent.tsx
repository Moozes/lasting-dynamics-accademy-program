import { IHrStatsData } from "@features/sessions/types";

import StatisticsTable from "../StatisticsTable";

import { useColumns } from "./HrTableComponent.hooks";

export const HrTableComponent = ({ hrStats, title }: { hrStats: IHrStatsData[]; title: string }) => {
    const hr_columns = useColumns();

    return <StatisticsTable data={hrStats} tableHeader={title} columns={hr_columns} />;
};
