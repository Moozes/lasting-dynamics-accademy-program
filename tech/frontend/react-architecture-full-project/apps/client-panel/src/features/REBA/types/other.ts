import {
    Assessment,
    AssessmentDetailedSummaryFormatedData,
    ImageRadioButtonProps,
    REBAAssessmentDetail,
} from "@app-types/index";

export enum FinalScoreClassNamesEnum {
    veryLow = "very-low",
    low = "low",
    medium = "medium",
    high = "high",
    veryHigh = "very-high",
}

export type REBAAssessment = Assessment & {
    assessment: REBAAssessmentDetail;
};

export type IVisitedTabsStatus = {
    neckTrunkandLegAnalysis: boolean;
    armAndWristAnalysis: boolean;
};

export type LegsFormCardProps = {
    title: string;
    mainRadioItems: ImageRadioButtonProps[];
    adjustRadioItems: ImageRadioButtonProps[];
};

export type Status = "negligible-risk" | "low-risk" | "medium-risk" | "high-risk" | "very-high-risk";

export type ResultSummaryFormatedData = {
    formatedData: { text: string; riskScore: string; ovalClassName: Status; containerClassName: string }[];
};

export type IResultSummaryFormatedData = {
    scoresFormatedData: AssessmentDetailedSummaryFormatedData;
    summaryFormatedData: AssessmentDetailedSummaryFormatedData;
};

export type ResultsPdfTemplateProps = {
    resultSummaryFormatedData: IResultSummaryFormatedData;
    cache: { data: REBAAssessment };
};
