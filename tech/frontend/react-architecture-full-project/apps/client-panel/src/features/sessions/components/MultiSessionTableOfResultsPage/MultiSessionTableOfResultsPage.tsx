import { useSearchParams } from "react-router-dom";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { useCompareMultiSessionPostureStats, useLimbsArray } from "../../hooks";
import { useGetSelectedSessionsStatsQuery } from "../../queries";
import { MultiSessionAnglesTable } from "../MultiSessionAnglesTable";

type Props = HTMLDivProps;

export const MultiSessionTableOfResultsPage = (props: Props) => {
    const t = useTranslationV2();
    const [searchParams] = useSearchParams();
    const ids = searchParams.get("ids") || "";
    const { data } = useGetSelectedSessionsStatsQuery(ids);
    const { formatedData } = useCompareMultiSessionPostureStats(data!.data);
    const { limbsArray } = useLimbsArray();
    return (
        <div {...props}>
            {limbsArray.map((obj) => (
                <MultiSessionAnglesTable
                    key={obj.limbName}
                    className="limb-table"
                    tableTitle={obj.limbName}
                    scale={t("Angle")}
                    measurement1={t("time_duration")}
                    measurement2={t("Percentage")}
                    sessionCount={data!.data.length}
                    hasStatusCircles={false}
                    rowsArray={formatedData[obj.limbObjectKeyName]}
                />
            ))}
        </div>
    );
};
