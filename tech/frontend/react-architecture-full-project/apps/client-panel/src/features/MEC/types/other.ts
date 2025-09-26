import { IGeneratedMECAssessment } from "@app-types/index";

export type IMECAccordionProps = {
    title: string;
    status: MECStatusEnum | null;
};

export type IMECResultsFormatedData = {
    question: string;
    status: MECStatusEnum | null;
    justification: string;
    subQuestion: {
        question: string;
        illustration: string;
        illustrationPDF: string;
        count_freq: number | string;
        time: number | string;
        missing_limb: string | null;
    }[];
};

export type ResultsPdfTemplateProps = {
    cache: { data: IGeneratedMECAssessment };
    detailedSummaryFormatedData: IMECResultsFormatedData[];
};

export type TUseMultiDetailedSummaryData = {
    question: string;
    subQuestions: {
        q: string;
        illustration: string;
        illustrationPDF: string;
    }[];
    assessments: {
        status: MECStatusEnum | null;
        justification: string;
        subQuestions: {
            count_freq: string;
            time: string;
            missing_limb: string | null;
        }[];
    }[];
};

export enum MECStatusEnum {
    GREEN = "green",
    YELLOW = "yellow",
    RED = "red",
}

export type IMECAssessmentResultStats = {
    status: MECStatusEnum | null;
    justification: string;
};

export type IMECCalculations = {
    1: IMECAssessmentResultStats;
    9: IMECAssessmentResultStats;
    10: IMECAssessmentResultStats;
    11: IMECAssessmentResultStats;
};
