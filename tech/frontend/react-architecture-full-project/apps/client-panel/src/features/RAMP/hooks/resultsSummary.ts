import { useTranslationV2 } from "ui";

import { ResultSummaryFormatedData } from "@features/RAMP/types";
import {
    getInfluencingFactorsAggregatedResults,
    getLiftingWorkAggregatedResults,
    getMovementsAndrRepetitionAggregatedResults,
    getPerceivedPhysicalDiscomfortAggregatedResults,
    getPosturesAggregatedResults,
    getPushingAndPullingAggregatedResults,
    getStrenuousWorkAggregatedResults,
} from "@features/RAMP/utils";
import { useSingleAssessmentQueryCache } from "@hooks/index";

export const useResultSummaryFormatedData = (): ResultSummaryFormatedData => {
    const t = useTranslationV2();
    const cache = useSingleAssessmentQueryCache()!;
    const posturesAggregatedResults = getPosturesAggregatedResults(cache.data.assessment);
    const movementsAndrRepetitionAggregatedResults = getMovementsAndrRepetitionAggregatedResults(cache.data.assessment);
    const liftingWorkAggregatedResults = getLiftingWorkAggregatedResults(cache.data.assessment);
    const pushingAndPullingAggregatedResults = getPushingAndPullingAggregatedResults(cache.data.assessment);
    const influencingFactorsAggregatedResults = getInfluencingFactorsAggregatedResults(cache.data.assessment);
    const strenuousWorkAggregatedResults = getStrenuousWorkAggregatedResults(cache.data.assessment);
    const perceivedPhysicalDiscomfortAggregatedResults = getPerceivedPhysicalDiscomfortAggregatedResults(
        cache.data.assessment
    );

    const totalRed =
        posturesAggregatedResults.redScores +
        movementsAndrRepetitionAggregatedResults.redScores +
        liftingWorkAggregatedResults.redScores +
        pushingAndPullingAggregatedResults.redScores +
        influencingFactorsAggregatedResults.redScores +
        strenuousWorkAggregatedResults.redScores +
        perceivedPhysicalDiscomfortAggregatedResults.redScores;
    const totalYellow =
        posturesAggregatedResults.yellowScores +
        movementsAndrRepetitionAggregatedResults.yellowScores +
        liftingWorkAggregatedResults.yellowScores +
        pushingAndPullingAggregatedResults.yellowScores +
        influencingFactorsAggregatedResults.yellowScores +
        strenuousWorkAggregatedResults.yellowScores +
        perceivedPhysicalDiscomfortAggregatedResults.yellowScores;
    const totalGreen =
        posturesAggregatedResults.greenScores +
        movementsAndrRepetitionAggregatedResults.greenScores +
        liftingWorkAggregatedResults.greenScores +
        pushingAndPullingAggregatedResults.greenScores +
        influencingFactorsAggregatedResults.greenScores +
        strenuousWorkAggregatedResults.greenScores +
        perceivedPhysicalDiscomfortAggregatedResults.greenScores;
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
