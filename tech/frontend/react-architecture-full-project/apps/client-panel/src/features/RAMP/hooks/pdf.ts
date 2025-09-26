import { useTranslationV2 } from "ui";

import { IServerResponseAssessment } from "@app-types/index";
import { useSingleAssessmentQueryCache } from "@hooks/index";

import { ResultsPdfTemplateProps } from "../types";

import { useDetailedSummaryFormatedData } from "./detailedSummary";
import { useResultSummaryFormatedData } from "./resultsSummary";

export const useResultsPdfTemplate = (): ResultsPdfTemplateProps => {
    const t = useTranslationV2();

    const cache = useSingleAssessmentQueryCache<IServerResponseAssessment>()!;
    const resultSummaryFormatedData = useResultSummaryFormatedData();
    const detailedSummaryFormatedData = useDetailedSummaryFormatedData();

    return {
        cache,
        resultSummaryTitle: t("ramp_assessments.results.result_summary"),
        detailedSummaryFormatedData,
        resultSummaryFormatedData,
    };
};
