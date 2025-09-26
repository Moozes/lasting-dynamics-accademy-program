import { RULAAssessment } from "@app-types/index";
import { useSingleAssessmentQueryCache } from "@hooks/index";

import { ResultsPdfTemplateProps } from "../types";

import { useDetailedSummaryFormatedData } from "./detailedSummary";

export const useResultsPdfTemplate = (): ResultsPdfTemplateProps => {
    const cache = useSingleAssessmentQueryCache<RULAAssessment>()!;
    const resultSummaryFormatedData = useDetailedSummaryFormatedData(cache.data.assessment);

    return {
        cache,
        resultSummaryFormatedData,
    };
};
