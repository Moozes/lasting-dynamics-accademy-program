import {
    RAMPStatusEnum,
    TGeneratedCalculations,
    TGeneratedRAMPAssessment,
    TGeneratedRAMPAssessmentDetail,
    TGeneratedResultStats,
} from "../types";

const getStatusFromThreshold = (
    value: string | null | undefined,
    thresholds: [number, RAMPStatusEnum][]
): TGeneratedResultStats => {
    if (value == null || value === "") return { status: null };

    const numericValue = parseFloat(value);
    // eslint-disable-next-line no-restricted-syntax
    for (const [threshold, status] of thresholds) {
        if (numericValue >= threshold) {
            return { status };
        }
    }
    return { status: RAMPStatusEnum.GREEN };
};

// Calculations for Question 1.1: Using postures_1 directly
const getHeadPostureCalculations = (q_1_1?: TGeneratedRAMPAssessmentDetail): TGeneratedResultStats => {
    if (!q_1_1 || !q_1_1.postures_1) return { status: null };

    return getStatusFromThreshold(q_1_1.postures_1, [
        [3, RAMPStatusEnum.RED],
        [2, RAMPStatusEnum.YELLOW],
        [0, RAMPStatusEnum.GREEN],
    ]);
};

// Calculations for Question 1.2: Using postures_2 directly
const getHeadBackwardsPostureCalculations = (q_1_2?: TGeneratedRAMPAssessmentDetail): TGeneratedResultStats => {
    if (!q_1_2 || !q_1_2.postures_2) return { status: null };

    return getStatusFromThreshold(q_1_2.postures_2, [
        [3, RAMPStatusEnum.RED],
        [2, RAMPStatusEnum.YELLOW],
        [0, RAMPStatusEnum.GREEN],
    ]);
};

// Calculations for Question 1.3: Using postures_3 directly
const getBackModerateBendingCalculations = (q_1_3?: TGeneratedRAMPAssessmentDetail): TGeneratedResultStats => {
    if (!q_1_3 || !q_1_3.postures_3) return { status: null };

    return getStatusFromThreshold(q_1_3.postures_3, [
        [3, RAMPStatusEnum.RED],
        [2, RAMPStatusEnum.YELLOW],
        [0, RAMPStatusEnum.GREEN],
    ]);
};

// Calculations for Question 1.4: Using postures_4 directly
const getBackConsiderableBendingTwistingCalculations = (
    q_1_4?: TGeneratedRAMPAssessmentDetail
): TGeneratedResultStats => {
    if (!q_1_4 || !q_1_4.postures_4) return { status: null };

    return getStatusFromThreshold(q_1_4.postures_4, [
        [3, RAMPStatusEnum.RED],
        [2, RAMPStatusEnum.YELLOW],
        [0, RAMPStatusEnum.GREEN],
    ]);
};

// Calculations for Question 1.5: Using postures_5_left or postures_5_right
const getUpperArmPostureHeightCalculations = (q_1_5?: TGeneratedRAMPAssessmentDetail): TGeneratedResultStats => {
    if (!q_1_5 || (!q_1_5.postures_5_left && !q_1_5.postures_5_right)) return { status: null };

    // Use postures_5_left if available, otherwise fallback to postures_5_right
    const postureValue = q_1_5.postures_5_left || q_1_5.postures_5_right;

    return getStatusFromThreshold(postureValue, [
        [3, RAMPStatusEnum.RED],
        [2, RAMPStatusEnum.YELLOW],
        [0, RAMPStatusEnum.GREEN],
    ]);
};

// Calculations for Question 1.6: Using postures_6_left or postures_6_right
const getUpperArmPostureOutsideAreaCalculations = (q_1_6?: TGeneratedRAMPAssessmentDetail): TGeneratedResultStats => {
    if (!q_1_6 || (!q_1_6.postures_6_left && !q_1_6.postures_6_right)) return { status: null };

    // Use postures_6_left if available, otherwise fallback to postures_6_right
    const postureValue = q_1_6.postures_6_left || q_1_6.postures_6_right;

    return getStatusFromThreshold(postureValue, [
        [3, RAMPStatusEnum.RED],
        [2, RAMPStatusEnum.YELLOW],
        [0, RAMPStatusEnum.GREEN],
    ]);
};

export const getGeneratedCalculations = (assessment: TGeneratedRAMPAssessment): TGeneratedCalculations => {
    const assessmentDetail = assessment.assessment || {};

    const question_1_results = getHeadPostureCalculations(assessmentDetail);
    const question_2_results = getHeadBackwardsPostureCalculations(assessmentDetail);
    const question_3_results = getBackModerateBendingCalculations(assessmentDetail);
    const question_4_results = getBackConsiderableBendingTwistingCalculations(assessmentDetail);
    const question_5_results = getUpperArmPostureHeightCalculations(assessmentDetail);
    const question_6_results = getUpperArmPostureOutsideAreaCalculations(assessmentDetail);

    return {
        1: { status: question_1_results.status },
        2: { status: question_2_results.status },
        3: { status: question_3_results.status },
        4: { status: question_4_results.status },
        5: { status: question_5_results.status },
        6: { status: question_6_results.status },
    };
};
