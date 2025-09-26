import { floor } from "lodash";

import { REBAAssessmentDetail as AssessmentDetail } from "@app-types/index";

import { FinalScoreClassNamesEnum } from "../types";

import { TABLE_A, TABLE_B, TABLE_C } from "./variables";

export const getREBAneckTrunkandLegAnalysisScores = (assessmentDetail: AssessmentDetail) => {
    const neckIsTwistedOrSideBending = floor(parseFloat(assessmentDetail.neckIsTwistedOrSideBending)) || 0;
    const neckPositionScore = floor(parseFloat(assessmentDetail.neckPosition)) + neckIsTwistedOrSideBending;

    const trunkIsTwistedOrSideBending = floor(parseFloat(assessmentDetail.trunkIsTwistedOrSideBending)) || 0;
    const trunkPositionScore = floor(parseFloat(assessmentDetail.trunkPosition)) + trunkIsTwistedOrSideBending;

    const legsAngle = floor(parseFloat(assessmentDetail.legsAngle)) || 0;
    const legsScore = floor(parseFloat(assessmentDetail.legsDownOrRaised)) + legsAngle;

    const tableAScore = TABLE_A[trunkPositionScore - 1][neckPositionScore - 1][legsScore - 1];

    const forceLoadScoreCheckbox = assessmentDetail.forceLoadScoreCheckbox ? 1 : 0;
    const forceLoadScore = floor(parseFloat(assessmentDetail.forceLoadScore)) + forceLoadScoreCheckbox;

    const scoreA = tableAScore + forceLoadScore;

    return {
        neckPositionScore,
        trunkPositionScore,
        legsScore,
        forceLoadScore,
        scoreA,
    };
};
export const getREBAarmAndWristAnalysisScores = (assessmentDetail: AssessmentDetail) => {
    const upperArmPositionCheckbox1 = assessmentDetail.upperArmPositionCheckbox1 ? 1 : 0;
    const upperArmPositionCheckbox2 = assessmentDetail.upperArmPositionCheckbox2 ? 1 : 0;
    const upperArmPositionCheckbox3 = assessmentDetail.upperArmPositionCheckbox3 ? -1 : 0;
    const upperArmPositionScore =
        floor(parseFloat(assessmentDetail.upperArmPosition)) +
        upperArmPositionCheckbox1 +
        upperArmPositionCheckbox2 +
        upperArmPositionCheckbox3;

    const lowerArmPositionScore = floor(parseFloat(assessmentDetail.lowerArmPosition));

    const wristPositionCheckbox = assessmentDetail.wristPositionCheckbox ? 1 : 0;
    const wristPositionScore = floor(parseFloat(assessmentDetail.wristPosition)) + wristPositionCheckbox;

    const tableBScore = TABLE_B[upperArmPositionScore - 1][lowerArmPositionScore - 1][wristPositionScore - 1];

    const couplingScore = floor(parseFloat(assessmentDetail.couplingScore));

    const scoreB = tableBScore + couplingScore;

    const activityScoreCheckbox1 = assessmentDetail.activityScoreCheckbox1 ? 1 : 0;
    const activityScoreCheckbox2 = assessmentDetail.activityScoreCheckbox2 ? 1 : 0;
    const activityScoreCheckbox3 = assessmentDetail.activityScoreCheckbox3 ? 1 : 0;
    const activityScore = activityScoreCheckbox1 + activityScoreCheckbox2 + activityScoreCheckbox3;

    return {
        upperArmPositionScore,
        lowerArmPositionScore,
        wristPositionScore,
        couplingScore,
        scoreB,
        activityScore,
    };
};
export const getREBAFinalScore = (assessmentDetail: AssessmentDetail) => {
    const { scoreA } = getREBAneckTrunkandLegAnalysisScores(assessmentDetail);
    const { scoreB, activityScore } = getREBAarmAndWristAnalysisScores(assessmentDetail);

    const scoreC = TABLE_C[scoreA - 1][scoreB - 1];

    const REBAScore = scoreC + activityScore;

    return {
        REBAScore,
    };
};

export const getREBAFinalScoreClassName = (finalScore: number) => {
    let className = "";
    if (finalScore == 1) className = FinalScoreClassNamesEnum.veryLow;
    else if (finalScore == 2 || finalScore == 3) className = FinalScoreClassNamesEnum.low;
    else if (finalScore >= 4 && finalScore <= 7) className = FinalScoreClassNamesEnum.medium;
    else if (finalScore >= 8 && finalScore <= 10) className = FinalScoreClassNamesEnum.high;
    else if (finalScore >= 11) className = FinalScoreClassNamesEnum.veryHigh;

    return className;
};

export const getREBAAggregatedScores = (assessmentDetail: AssessmentDetail) => {
    return {
        ...getREBAarmAndWristAnalysisScores(assessmentDetail),
        ...getREBAneckTrunkandLegAnalysisScores(assessmentDetail),
        ...getREBAFinalScore(assessmentDetail),
    };
};
