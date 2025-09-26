import { floor } from "lodash";

import { RULAAssessmentDetail as AssessmentDetail } from "@app-types/index";

import { FinalScoreClassNamesEnum } from "../types";

import { TABLE_A, TABLE_B, TABLE_C } from "./variables";

export const getRULAFinalScoreClassName = (finalScore: number | undefined) => {
    let className = "";
    if (finalScore == 1 || finalScore == 2) className = FinalScoreClassNamesEnum.veryLow;
    else if (finalScore == 3 || finalScore == 4) className = FinalScoreClassNamesEnum.low;
    else if (finalScore == 5 || finalScore == 6) className = FinalScoreClassNamesEnum.medium;
    else if (finalScore == 7) className = FinalScoreClassNamesEnum.high;

    return className;
};

export const getRightSideResultsCalculations = (assessmentDetail: AssessmentDetail) => {
    let rightUpperArmPosition;
    let rightLowerArmPosition;
    let rightWristPosition;
    let rightWristTwist;
    let rightMuscleUseScore;
    let rightForceLoadScore;
    let rightTableAPlusMusclePlusForceScore;

    if (!assessmentDetail.noRightSide) {
        const rightUpperArmPositionCheckbox1 = assessmentDetail.rightUpperArmPositionCheckbox1 ? 1 : 0;
        const rightUpperArmPositionCheckbox2 = assessmentDetail.rightUpperArmPositionCheckbox2 ? 1 : 0;
        const rightUpperArmPositionCheckbox3 = assessmentDetail.rightUpperArmPositionCheckbox3 ? -1 : 0;
        rightUpperArmPosition =
            floor(parseFloat(assessmentDetail.rightUpperArmPosition)) +
            rightUpperArmPositionCheckbox1 +
            rightUpperArmPositionCheckbox2 +
            rightUpperArmPositionCheckbox3;
        const rightLowerArmPositionCheckbox1 = assessmentDetail.rightLowerArmPositionCheckbox1 ? 1 : 0;
        rightLowerArmPosition =
            floor(parseFloat(assessmentDetail.rightLowerArmPosition)) + rightLowerArmPositionCheckbox1;
        const rightWristPositionCheckbox1 = assessmentDetail.rightWristPositionCheckbox1 ? 1 : 0;
        rightWristPosition = floor(parseFloat(assessmentDetail.rightWristPosition)) + rightWristPositionCheckbox1;
        rightWristTwist = floor(parseFloat(assessmentDetail.rightWristTwist));
        rightMuscleUseScore = assessmentDetail.rightMuscleUseScore ? 1 : 0;
        rightForceLoadScore = floor(parseFloat(assessmentDetail.rightForceLoadScore));

        const rightTableAScore =
            TABLE_A[rightUpperArmPosition - 1][rightLowerArmPosition - 1][rightWristPosition - 1][rightWristTwist - 1];
        rightTableAPlusMusclePlusForceScore = rightTableAScore + rightMuscleUseScore + rightForceLoadScore;
    }
    return {
        rightUpperArmPosition,
        rightLowerArmPosition,
        rightWristPosition,
        rightWristTwist,
        rightMuscleUseScore,
        rightForceLoadScore,
        rightTableAPlusMusclePlusForceScore,
    };
};

export const getLeftSideResultsCalculations = (assessmentDetail: AssessmentDetail) => {
    let leftUpperArmPosition;
    let leftLowerArmPosition;
    let leftWristPosition;
    let leftWristTwist;
    let leftMuscleUseScore;
    let leftForceLoadScore;
    let leftTableAPlusMusclePlusForceScore;

    if (!assessmentDetail.noLeftSide) {
        const leftUpperArmPositionCheckbox1 = assessmentDetail.leftUpperArmPositionCheckbox1 ? 1 : 0;
        const leftUpperArmPositionCheckbox2 = assessmentDetail.leftUpperArmPositionCheckbox2 ? 1 : 0;
        const leftUpperArmPositionCheckbox3 = assessmentDetail.leftUpperArmPositionCheckbox3 ? -1 : 0;
        leftUpperArmPosition =
            floor(parseFloat(assessmentDetail.leftUpperArmPosition)) +
            leftUpperArmPositionCheckbox1 +
            leftUpperArmPositionCheckbox2 +
            leftUpperArmPositionCheckbox3;
        const leftLowerArmPositionCheckbox1 = assessmentDetail.leftLowerArmPositionCheckbox1 ? 1 : 0;
        leftLowerArmPosition = floor(parseFloat(assessmentDetail.leftLowerArmPosition)) + leftLowerArmPositionCheckbox1;
        const leftWristPositionCheckbox1 = assessmentDetail.leftWristPositionCheckbox1 ? 1 : 0;
        leftWristPosition = floor(parseFloat(assessmentDetail.leftWristPosition)) + leftWristPositionCheckbox1;
        leftWristTwist = floor(parseFloat(assessmentDetail.leftWristTwist));
        leftMuscleUseScore = assessmentDetail.leftMuscleUseScore ? 1 : 0;
        leftForceLoadScore = floor(parseFloat(assessmentDetail.leftForceLoadScore));

        const leftTableAScore =
            TABLE_A[leftUpperArmPosition - 1][leftLowerArmPosition - 1][leftWristPosition - 1][leftWristTwist - 1];
        leftTableAPlusMusclePlusForceScore = leftTableAScore + leftMuscleUseScore + leftForceLoadScore;
    }

    return {
        leftUpperArmPosition,
        leftLowerArmPosition,
        leftWristPosition,
        leftWristTwist,
        leftMuscleUseScore,
        leftForceLoadScore,
        leftTableAPlusMusclePlusForceScore,
    };
};

export const getHeadNeckTrunkResultsCalculations = (assessmentDetail: AssessmentDetail) => {
    const headAndNeckCheckbox1 = assessmentDetail.headAndNeckCheckbox1 ? 1 : 0;
    const headAndNeckCheckbox2 = assessmentDetail.headAndNeckCheckbox2 ? 1 : 0;
    const headAndNeck = floor(parseFloat(assessmentDetail.headAndNeck)) + headAndNeckCheckbox1 + headAndNeckCheckbox2;
    const trunkCheckbox1 = assessmentDetail.trunkCheckbox1 ? 1 : 0;
    const trunkCheckbox2 = assessmentDetail.trunkCheckbox2 ? 1 : 0;
    const trunk = floor(parseFloat(assessmentDetail.trunk)) + trunkCheckbox1 + trunkCheckbox2;
    const legs = floor(parseFloat(assessmentDetail.legs));
    const headTrunkAndLegsMuscleUseScore = assessmentDetail.headTrunkAndLegsMuscleUseScore ? 1 : 0;
    const headTrunkAndLegsForceLoadScore = floor(parseFloat(assessmentDetail.headTrunkAndLegsForceLoadScore));

    const headNeckTrunkTableBScore = TABLE_B[headAndNeck - 1][trunk - 1][legs - 1];
    const headNeckTrunkTableBPlusMusclePlusForceScore =
        headNeckTrunkTableBScore + headTrunkAndLegsMuscleUseScore + headTrunkAndLegsForceLoadScore;

    return {
        headAndNeck,
        trunk,
        legs,
        headTrunkAndLegsMuscleUseScore,
        headTrunkAndLegsForceLoadScore,
        headNeckTrunkTableBPlusMusclePlusForceScore,
    };
};

export const getRULAFinalScoreCalculations = (assessmentDetail: AssessmentDetail) => {
    let leftRULAScore;
    let rightRULAScore;

    const { headNeckTrunkTableBPlusMusclePlusForceScore } = getHeadNeckTrunkResultsCalculations(assessmentDetail);

    const { leftTableAPlusMusclePlusForceScore } = getLeftSideResultsCalculations(assessmentDetail);
    const { rightTableAPlusMusclePlusForceScore } = getRightSideResultsCalculations(assessmentDetail);

    if (!assessmentDetail.noRightSide) {
        rightRULAScore =
            TABLE_C[rightTableAPlusMusclePlusForceScore! - 1][headNeckTrunkTableBPlusMusclePlusForceScore - 1];
    }

    if (!assessmentDetail.noLeftSide) {
        leftRULAScore =
            TABLE_C[leftTableAPlusMusclePlusForceScore! - 1][headNeckTrunkTableBPlusMusclePlusForceScore - 1];
    }

    return {
        leftRULAScore,
        rightRULAScore,
    };
};

export const getDetailedSummaryCalculations = (assessmentDetail: AssessmentDetail) => {
    return {
        ...getRightSideResultsCalculations(assessmentDetail),
        ...getLeftSideResultsCalculations(assessmentDetail),
        ...getHeadNeckTrunkResultsCalculations(assessmentDetail),
        ...getRULAFinalScoreCalculations(assessmentDetail),
    };
};
