import { RULAAssessment } from "@app-types/index";
import { useDetailedSummaryFormatedData } from "@features/RULA/hooks/detailedSummary";

export enum FinalScoreClassNamesEnum {
    veryLow = "very-low",
    low = "low",
    medium = "medium",
    high = "high",
}

export type Status = "negligible-risk" | "low-risk" | "medium-risk" | "very-high-risk";

export type ResultSummaryFormatedData = {
    formatedData: { text: string; riskScore: string; ovalClassName: Status; containerClassName: string }[];
};

export type IResultSummaryFormatedData = ReturnType<typeof useDetailedSummaryFormatedData>;

export type ResultsPdfTemplateProps = {
    resultSummaryFormatedData: IResultSummaryFormatedData;
    cache: { data: RULAAssessment };
};

export type CheckboxCardProps = {
    label: string;
    name: string;
    disabled?: boolean;
};

export type RULACalculationsFormatedData = {
    text: string;
    score: string;
    className?: string;
}[];
