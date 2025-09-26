import { useTranslationV2 } from "ui";

import { AssessmentDetailedSummaryFormatedData as FormatedData, RULAAssessmentDetail } from "@app-types/index";

import {
    getHeadNeckTrunkResultsCalculations,
    getLeftSideResultsCalculations,
    getRightSideResultsCalculations,
    getRULAFinalScoreCalculations,
    getRULAFinalScoreClassName,
} from "../utils";

export const useDetailedSummaryFormatedData = (
    assessmentDetail: RULAAssessmentDetail
): { scoresFormatedData: FormatedData; summaryFormatedData: FormatedData } => {
    const t = useTranslationV2();

    const RULAFinalScoreFormatedData: FormatedData = [];
    const RULAFinalScoreCalculations = getRULAFinalScoreCalculations(assessmentDetail);
    if (RULAFinalScoreCalculations.rightRULAScore)
        RULAFinalScoreFormatedData.push({
            text: t("right"),
            score: `${RULAFinalScoreCalculations.rightRULAScore}`,
            className: getRULAFinalScoreClassName(RULAFinalScoreCalculations.rightRULAScore),
        });
    if (RULAFinalScoreCalculations.leftRULAScore)
        RULAFinalScoreFormatedData.push({
            text: t("left"),
            score: `${RULAFinalScoreCalculations.leftRULAScore}`,
            className: getRULAFinalScoreClassName(RULAFinalScoreCalculations.leftRULAScore),
        });

    const rightSideFormatedData: FormatedData = [];
    const rightSideResultsCalculations = getRightSideResultsCalculations(assessmentDetail);
    if (!assessmentDetail.noRightSide) {
        rightSideFormatedData.push(
            ...[
                {
                    text: t("rula_assessments.nav_link1"),
                    colSpan: 2,
                },
                {
                    text: t("rula_assessments.upper_arm_position"),
                    score: `${rightSideResultsCalculations.rightUpperArmPosition}`,
                },
                {
                    text: t("rula_assessments.lower_arm_angle"),
                    score: `${rightSideResultsCalculations.rightLowerArmPosition}`,
                },
                {
                    text: t("rula_assessments.locate_wrist_position"),
                    score: `${rightSideResultsCalculations.rightWristPosition}`,
                },
                {
                    text: t("rula_assessments.wrist_twist"),
                    score: `${rightSideResultsCalculations.rightWristTwist}`,
                },
                {
                    text: t("rula_assessments.muscle_use_score"),
                    score: `${rightSideResultsCalculations.rightMuscleUseScore}`,
                },
                {
                    text: t("rula_assessments.force/load_score"),
                    score: `${rightSideResultsCalculations.rightForceLoadScore}`,
                },
            ]
        );
    }

    const leftSideFormatedData: FormatedData = [];
    const leftSideResultsCalculations = getLeftSideResultsCalculations(assessmentDetail);
    if (!assessmentDetail.noLeftSide) {
        leftSideFormatedData.push(
            ...[
                {
                    text: t("rula_assessments.nav_link2"),
                    colSpan: 2,
                },
                {
                    text: t("rula_assessments.upper_arm_position"),
                    score: `${leftSideResultsCalculations.leftUpperArmPosition}`,
                },
                {
                    text: t("rula_assessments.lower_arm_angle"),
                    score: `${leftSideResultsCalculations.leftLowerArmPosition}`,
                },
                {
                    text: t("rula_assessments.locate_wrist_position"),
                    score: `${leftSideResultsCalculations.leftWristPosition}`,
                },
                {
                    text: t("rula_assessments.wrist_twist"),
                    score: `${leftSideResultsCalculations.leftWristTwist}`,
                },
                {
                    text: t("rula_assessments.muscle_use_score"),
                    score: `${leftSideResultsCalculations.leftMuscleUseScore}`,
                },
                {
                    text: t("rula_assessments.force/load_score"),
                    score: `${leftSideResultsCalculations.leftForceLoadScore}`,
                },
            ]
        );
    }

    const headNeckTrunkCalculations = getHeadNeckTrunkResultsCalculations(assessmentDetail);

    return {
        scoresFormatedData: [
            {
                text: t("final_scores"),
                colSpan: 2,
            },
            ...RULAFinalScoreFormatedData,
        ],
        summaryFormatedData: [
            ...rightSideFormatedData,
            ...leftSideFormatedData,
            {
                text: t("rula_assessments.nav_link3"),
                colSpan: 2,
            },
            {
                text: t("rula_assessments.head_and_neck"),
                score: `${headNeckTrunkCalculations.headAndNeck}`,
            },
            {
                text: t("trunk"),
                score: `${headNeckTrunkCalculations.trunk}`,
            },
            {
                text: t("legs"),
                score: `${headNeckTrunkCalculations.legs}`,
            },
            {
                text: t("rula_assessments.muscle_use_score"),
                score: `${headNeckTrunkCalculations.headTrunkAndLegsMuscleUseScore}`,
            },
            {
                text: t("rula_assessments.force/load_score"),
                score: `${headNeckTrunkCalculations.headTrunkAndLegsForceLoadScore}`,
            },
        ],
    };
};
