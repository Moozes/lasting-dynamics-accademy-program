import { useTranslationV2 } from "ui";

import { IMultiAssessmentDetailedSummaryFormatedData, RULAAssessmentDetail } from "@app-types/index";

import { getDetailedSummaryCalculations, getRULAFinalScoreClassName } from "../utils";

export const useMultiDetailedSummaryFormatedData = (
    assessmentDetailArray: RULAAssessmentDetail[]
): { formatedData: IMultiAssessmentDetailedSummaryFormatedData } => {
    const t = useTranslationV2();
    const calculations = assessmentDetailArray.map((assessmentDetail) =>
        getDetailedSummaryCalculations(assessmentDetail)
    );

    const colSpan = assessmentDetailArray.length + 1;

    const fillIfUndefined = (val: number | undefined) => {
        if (val !== undefined) return `${val}`;
        return "-";
    };

    return {
        formatedData: [
            {
                text: t("final_scores"),
                colSpan,
            },
            {
                text: t("right"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.rightRULAScore),
                    className: getRULAFinalScoreClassName(calc.rightRULAScore),
                })),
            },
            {
                text: t("left"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.leftRULAScore),
                    className: getRULAFinalScoreClassName(calc.leftRULAScore),
                })),
            },
            {
                text: t("rula_assessments.nav_link1"),
                colSpan,
            },
            {
                text: t("rula_assessments.upper_arm_position"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.rightUpperArmPosition),
                })),
            },
            {
                text: t("rula_assessments.lower_arm_angle"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.rightLowerArmPosition),
                })),
            },
            {
                text: t("rula_assessments.locate_wrist_position"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.rightWristPosition),
                })),
            },
            {
                text: t("rula_assessments.wrist_twist"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.rightWristTwist),
                })),
            },
            {
                text: t("rula_assessments.muscle_use_score"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.rightMuscleUseScore),
                })),
            },
            {
                text: t("rula_assessments.force/load_score"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.rightForceLoadScore),
                })),
            },
            {
                text: t("rula_assessments.nav_link2"),
                colSpan,
            },
            {
                text: t("rula_assessments.upper_arm_position"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.leftUpperArmPosition),
                })),
            },
            {
                text: t("rula_assessments.lower_arm_angle"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.leftLowerArmPosition),
                })),
            },
            {
                text: t("rula_assessments.locate_wrist_position"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.leftWristPosition),
                })),
            },
            {
                text: t("rula_assessments.wrist_twist"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.leftWristTwist),
                })),
            },
            {
                text: t("rula_assessments.muscle_use_score"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.leftMuscleUseScore),
                })),
            },
            {
                text: t("rula_assessments.force/load_score"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.leftForceLoadScore),
                })),
            },
            {
                text: t("rula_assessments.nav_link3"),
                colSpan,
            },
            {
                text: t("rula_assessments.head_and_neck"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.headAndNeck),
                })),
            },
            {
                text: t("trunk"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.trunk),
                })),
            },
            {
                text: t("legs"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.legs),
                })),
            },
            {
                text: t("rula_assessments.muscle_use_score"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.headTrunkAndLegsMuscleUseScore),
                })),
            },
            {
                text: t("rula_assessments.force/load_score"),
                values: calculations.map((calc) => ({
                    score: fillIfUndefined(calc.headTrunkAndLegsForceLoadScore),
                })),
            },
        ],
    };
};
