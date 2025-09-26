import { useTranslationV2 } from "ui";

import { AssessmentDetailedSummaryFormatedData as FormatedData, REBAAssessmentDetail } from "@app-types/index";

import {
    getREBAarmAndWristAnalysisScores,
    getREBAFinalScore,
    getREBAFinalScoreClassName,
    getREBAneckTrunkandLegAnalysisScores,
} from "../utils";

export const useDetailedSummaryFormatedData = (
    assessmentDetail: REBAAssessmentDetail
): { scoresFormatedData: FormatedData; summaryFormatedData: FormatedData } => {
    const t = useTranslationV2();

    const { REBAScore } = getREBAFinalScore(assessmentDetail);
    const { neckPositionScore, trunkPositionScore, legsScore, forceLoadScore } =
        getREBAneckTrunkandLegAnalysisScores(assessmentDetail);
    const { upperArmPositionScore, lowerArmPositionScore, wristPositionScore, couplingScore, activityScore } =
        getREBAarmAndWristAnalysisScores(assessmentDetail);

    return {
        scoresFormatedData: [
            {
                text: t("final_scores"),
                colSpan: 2,
            },
            {
                text: t("reba_assessments.reba_score"),
                score: `${REBAScore}`,
                className: getREBAFinalScoreClassName(REBAScore),
            },
        ],
        summaryFormatedData: [
            {
                text: t("reba_assessments.neck_trunk_and_leg_analysis"),
                colSpan: 2,
            },
            {
                text: t("reba_assessments.locate_neck_position"),
                score: `${neckPositionScore}`,
            },
            {
                text: t("reba_assessments.locate_trunk_position"),
                score: `${trunkPositionScore}`,
            },
            {
                text: t("legs"),
                score: `${legsScore}`,
            },
            {
                text: t("reba_assessments.force_load_score"),
                score: `${forceLoadScore}`,
            },
            {
                text: t("reba_assessments.arm_and_wrist_analysis"),
                colSpan: 2,
            },
            {
                text: t("reba_assessments.locate_upper_arm_position"),
                score: `${upperArmPositionScore}`,
            },
            {
                text: t("reba_assessments.locate_lower_arm_position"),
                score: `${lowerArmPositionScore}`,
            },
            {
                text: t("reba_assessments.locate_wrist_position"),
                score: `${wristPositionScore}`,
            },
            {
                text: t("reba_assessments.coupling_score"),
                score: `${couplingScore}`,
            },
            {
                text: t("reba_assessments.activity_score"),
                score: `${activityScore}`,
            },
        ],
    };
};
