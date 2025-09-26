import { useTranslationV2 } from "ui";

import { IMultiAssessmentDetailedSummaryFormatedData, REBAAssessmentDetail } from "@app-types/index";

import { getREBAAggregatedScores, getREBAFinalScoreClassName } from "../utils";

export const useMultiDetailedSummaryFormatedData = (
    assessmentDetailArray: REBAAssessmentDetail[]
): { formatedData: IMultiAssessmentDetailedSummaryFormatedData } => {
    const t = useTranslationV2();
    const calculations = assessmentDetailArray.map((assessmentDetail) => getREBAAggregatedScores(assessmentDetail));

    const colSpan = assessmentDetailArray.length + 1;

    return {
        formatedData: [
            {
                text: t("final_scores"),
                colSpan,
            },
            {
                text: t("reba_assessments.reba_score"),
                values: calculations.map((calc) => ({
                    score: `${calc.REBAScore}`,
                    className: getREBAFinalScoreClassName(calc.REBAScore),
                })),
            },
            {
                text: t("reba_assessments.neck_trunk_and_leg_analysis"),
                colSpan,
            },
            {
                text: t("reba_assessments.locate_neck_position"),
                values: calculations.map((calc) => ({
                    score: `${calc.neckPositionScore}`,
                })),
            },
            {
                text: t("reba_assessments.locate_trunk_position"),
                values: calculations.map((calc) => ({
                    score: `${calc.trunkPositionScore}`,
                })),
            },
            {
                text: t("legs"),
                values: calculations.map((calc) => ({
                    score: `${calc.legsScore}`,
                })),
            },
            {
                text: t("reba_assessments.force_load_score"),
                values: calculations.map((calc) => ({
                    score: `${calc.forceLoadScore}`,
                })),
            },
            {
                text: t("reba_assessments.arm_and_wrist_analysis"),
                colSpan,
            },
            {
                text: t("reba_assessments.locate_upper_arm_position"),
                values: calculations.map((calc) => ({
                    score: `${calc.upperArmPositionScore}`,
                })),
            },
            {
                text: t("reba_assessments.locate_lower_arm_position"),
                values: calculations.map((calc) => ({
                    score: `${calc.lowerArmPositionScore}`,
                })),
            },
            {
                text: t("reba_assessments.locate_wrist_position"),
                values: calculations.map((calc) => ({
                    score: `${calc.wristPositionScore}`,
                })),
            },
            {
                text: t("reba_assessments.coupling_score"),
                values: calculations.map((calc) => ({
                    score: `${calc.couplingScore}`,
                })),
            },
            {
                text: t("reba_assessments.activity_score"),
                values: calculations.map((calc) => ({
                    score: `${calc.activityScore}`,
                })),
            },
        ],
    };
};
