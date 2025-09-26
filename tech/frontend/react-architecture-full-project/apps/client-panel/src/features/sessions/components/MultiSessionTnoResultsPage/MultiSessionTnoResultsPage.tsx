import { useSearchParams } from "react-router-dom";

import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { useCompareMultiSessionTNOStats, useLimbsArray } from "../../hooks";
import { useGetSelectedSessionsStatsQuery } from "../../queries";
import { MultiSessionAnglesTable } from "../MultiSessionAnglesTable";

type Props = HTMLDivProps;

export const MultiSessionTnoResultsPage = (props: Props) => {
    const t = useTranslationV2();
    const [searchParams] = useSearchParams();
    const ids = searchParams.get("ids") || "";
    const { data } = useGetSelectedSessionsStatsQuery(ids);
    const { formatedData, noTNOCalculationsForAllSession } = useCompareMultiSessionTNOStats(data!.data);
    const { limbsArray } = useLimbsArray();
    return (
        <div {...props}>
            {noTNOCalculationsForAllSession ? (
                <Typography variant="h6"> {t("no_data_found")} </Typography>
            ) : (
                limbsArray.map((obj) => (
                    <MultiSessionAnglesTable
                        key={obj.limbName}
                        className="limb-table"
                        tableTitle={obj.limbName}
                        scale={t("Range")}
                        measurement1={t("Static")}
                        measurement2={t("Dynamic")}
                        sessionCount={data!.data.length}
                        hasStatusCircles
                        rowsArray={formatedData[obj.limbObjectKeyName]}
                    />
                ))
            )}
        </div>
    );
};
