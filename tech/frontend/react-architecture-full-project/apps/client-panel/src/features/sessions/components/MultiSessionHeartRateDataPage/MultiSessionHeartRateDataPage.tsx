import { useSearchParams } from "react-router-dom";

import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { useCompareMultiSessionHeartRateStats } from "../../hooks";
import { useGetSelectedSessionsStatsQuery } from "../../queries";
import { freqeuncyDomainVariableUnitArray, timeDomainVariableUnitArray } from "../../utils";
import { MultiSessionNonlinearTable } from "../MultiSessionNonlinearTable";

import { HorizontalVariableUnitTable } from "./HorizontalVariableUnitTable";

type Props = HTMLDivProps;

export const MultiSessionHeartRateDataPage = (props: Props) => {
    const t = useTranslationV2();
    const [searchParams] = useSearchParams();
    const ids = searchParams.get("ids") || "";
    const { data } = useGetSelectedSessionsStatsQuery(ids);
    const { timeDomainSessionArray, frequencyDomainSessionArray, nonLinearSessionArray } =
        useCompareMultiSessionHeartRateStats(data!.data);
    return (
        <div {...props}>
            {/* time domain */}
            <Typography className="title" variant="h4">
                {t("sessions_management.session_stats.time_domain_results")}
            </Typography>
            <HorizontalVariableUnitTable
                className="table"
                sessionArray={timeDomainSessionArray}
                variableUnitArray={timeDomainVariableUnitArray}
            />

            {/* freqeuncy domain */}
            <Typography className="title" variant="h4">
                {t("sessions_management.session_stats.frequency_domain_results")}
            </Typography>
            <HorizontalVariableUnitTable
                className="table"
                sessionArray={frequencyDomainSessionArray}
                variableUnitArray={freqeuncyDomainVariableUnitArray}
            />

            <Typography className="title" variant="h4">
                {t("sessions_management.session_stats.nonlinear_results")}
            </Typography>
            <MultiSessionNonlinearTable className="table" sessionArray={nonLinearSessionArray} />
        </div>
    );
};
