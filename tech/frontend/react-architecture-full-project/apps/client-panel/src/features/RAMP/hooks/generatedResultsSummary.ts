/* eslint-disable default-case */
import { useTranslationV2 } from "ui";

import { RAMPStatusEnum, ResultSummaryFormatedData } from "@features/RAMP/types";
import { useSingleAssessmentQueryCache } from "@hooks/index";

import { getGeneratedCalculations } from "../utils";

export const useGeneratedResultSummaryFormatedData = (): ResultSummaryFormatedData => {
    const t = useTranslationV2();
    const cache = useSingleAssessmentQueryCache()!;
    const calculations = getGeneratedCalculations(cache.data as any);
    let totalRed = 0;
    let totalYellow = 0;
    let totalGreen = 0;
    Object.values(calculations).forEach((value) => {
        switch (value.status) {
            case RAMPStatusEnum.GREEN:
                totalGreen += 1;
                break;
            case RAMPStatusEnum.YELLOW:
                totalYellow += 1;
                break;
            case RAMPStatusEnum.RED:
                totalRed += 1;
                break;
        }
    });

    return {
        formatedData: [
            {
                text: t("ramp_assessments.results.number_of_red_assessments"),
                riskScore: `${totalRed}`,
                ovalClassName: "danger",
                containerClassName: "mb",
            },
            {
                text: t("ramp_assessments.results.number_of_yellow_assessments"),
                riskScore: `${totalYellow}`,
                ovalClassName: "medium",
                containerClassName: "mb",
            },
            {
                text: t("ramp_assessments.results.number_of_green_assessments"),
                riskScore: `${totalGreen}`,
                ovalClassName: "normal",
                containerClassName: "",
            },
        ],
    };
};
