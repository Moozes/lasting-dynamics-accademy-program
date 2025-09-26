import { useTranslationV2 } from "ui";

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

export const useFormatedData = () => {
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
    return {
        headCells: [
            t("ramp_assessments.postures_form.title"),
            t("ramp_assessments.movements_repetition_form.title"),
            t("ramp_assessments.lifting_work_form.title"),
            t("ramp_assessments.pushing_and_pulling_form.title"),
            t("ramp_assessments.influencing_factors_form.title"),
            t("ramp_assessments.strenuous_work_form.title"),
            t("ramp_assessments.perceived_physical_discomfort_form.title"),
        ],
        bodyRows: [
            [
                posturesAggregatedResults.redScores,
                movementsAndrRepetitionAggregatedResults.redScores,
                liftingWorkAggregatedResults.redScores,
                pushingAndPullingAggregatedResults.redScores,
                influencingFactorsAggregatedResults.redScores,
                strenuousWorkAggregatedResults.redScores,
                perceivedPhysicalDiscomfortAggregatedResults.redScores,
            ],
            [
                posturesAggregatedResults.yellowScores,
                movementsAndrRepetitionAggregatedResults.yellowScores,
                liftingWorkAggregatedResults.yellowScores,
                pushingAndPullingAggregatedResults.yellowScores,
                influencingFactorsAggregatedResults.yellowScores,
                strenuousWorkAggregatedResults.yellowScores,
                perceivedPhysicalDiscomfortAggregatedResults.yellowScores,
            ],
            [
                posturesAggregatedResults.greenScores,
                movementsAndrRepetitionAggregatedResults.greenScores,
                liftingWorkAggregatedResults.greenScores,
                pushingAndPullingAggregatedResults.greenScores,
                influencingFactorsAggregatedResults.greenScores,
                strenuousWorkAggregatedResults.greenScores,
                perceivedPhysicalDiscomfortAggregatedResults.greenScores,
            ],
        ],
    };
};
