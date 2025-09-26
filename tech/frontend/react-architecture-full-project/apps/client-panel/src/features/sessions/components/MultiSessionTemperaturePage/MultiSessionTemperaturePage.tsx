import { useSearchParams } from "react-router-dom";

import type { HTMLDivProps } from "ui";

import { useCompareMultiSessionTemperatureStats } from "../../hooks";
import { useGetSelectedSessionsStatsQuery } from "../../queries";
import { MultiSessionTemperatureTable } from "../MultiSessionTemperatureTable";

type Props = HTMLDivProps;

export const MultiSessionTemperaturePage = (props: Props) => {
    const [searchParams] = useSearchParams();
    const ids = searchParams.get("ids") || "";
    const { data } = useGetSelectedSessionsStatsQuery(ids);
    const compareMultiSessionTemperatureStats = useCompareMultiSessionTemperatureStats(data!.data);

    return (
        <div {...props}>
            <MultiSessionTemperatureTable {...compareMultiSessionTemperatureStats} />
        </div>
    );
};
