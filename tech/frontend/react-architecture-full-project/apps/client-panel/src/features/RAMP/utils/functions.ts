/* eslint-disable no-else-return */
import { round } from "lodash";

import { RAMPAssessment, RAMPAssessmentDetail as AssessmentDetail } from "@app-types/index";

import { getScoreStatusReturn, LiftingWorkTabs, PushingAndPullingTabs } from "../types";

import {
    LIFTING_WORK_TABLE_1,
    LIFTING_WORK_TABLE_2,
    PULLING_AND_PUSHING_TABLE_1,
    PULLING_AND_PUSHING_TABLE_2,
} from "./variables";

export const calculateLiftingWorkTable1Result = (selectedTab: LiftingWorkTabs, values: any) => {
    let result = "";
    const xFieldName =
        selectedTab === "average" ? "lifting_work_table_1_factor_x" : "lifting_work_table_1_worst_factor_x";
    const yFieldName =
        selectedTab === "average" ? "lifting_work_table_1_factor_y" : "lifting_work_table_1_worst_factor_y";
    let x = (values as any)[xFieldName];
    let y = (values as any)[yFieldName];
    if (x && y) {
        x = parseInt(x, 10);
        y = parseInt(y, 10);
        result = `${LIFTING_WORK_TABLE_1[x][y]}`;
    }

    return result;
};
export const calculateLiftingWorkTable2Result = (selectedTab: LiftingWorkTabs, values: any) => {
    let result = "";
    const xFieldName =
        selectedTab === "average" ? "lifting_work_table_2_factor_x" : "lifting_work_table_2_worst_factor_x";
    const yFieldName =
        selectedTab === "average" ? "lifting_work_table_2_factor_y" : "lifting_work_table_2_worst_factor_y";
    let x = (values as any)[xFieldName];
    let y = (values as any)[yFieldName];
    if (x && y) {
        if (x === "0.9" && y === "0.9") {
            result = "0.9";
        } else {
            x = parseInt(x, 10);
            y = parseInt(y, 10);
            result = `${LIFTING_WORK_TABLE_2[x][y]}`;
        }
    }

    return result;
};
export const calculateLiftingWorkRiskScores = (values: any) => {
    let riskScore1 = "";
    let riskScore2 = "";
    const dontConsiderFactors = (values as any).lifting_work_factors_non_existent as boolean;
    const factors = [
        parseFloat((values as any).lifting_work_1_factor),
        parseFloat((values as any).lifting_work_2_factor),
        parseFloat((values as any).lifting_work_3_factor),
        parseFloat((values as any).lifting_work_4_factor),
        parseFloat((values as any).lifting_work_5_factor),
    ];
    const worstFactors = [
        parseFloat((values as any).lifting_work_1_worst_factor),
        parseFloat((values as any).lifting_work_2_worst_factor),
        parseFloat((values as any).lifting_work_3_worst_factor),
        parseFloat((values as any).lifting_work_4_worst_factor),
        parseFloat((values as any).lifting_work_5_worst_factor),
    ];

    const table1Average = calculateLiftingWorkTable1Result("average", values);
    const table1WorstCase = calculateLiftingWorkTable1Result("worst_case", values);
    const table2Average = calculateLiftingWorkTable2Result("average", values);
    const table2WorstCase = calculateLiftingWorkTable2Result("worst_case", values);

    if (table1Average && table2Average) {
        let score1 = parseFloat(table1Average) * parseFloat(table2Average);
        if (!dontConsiderFactors) {
            factors.forEach((factor) => {
                score1 *= factor;
            });
        }
        riskScore1 = round(score1, 2).toString();
    }

    if (table1WorstCase && table2WorstCase) {
        let score2 = parseFloat(table1WorstCase) * parseFloat(table2WorstCase);
        if (!dontConsiderFactors) {
            worstFactors.forEach((worstFactor) => {
                score2 *= worstFactor;
            });
        }
        riskScore2 = round(score2, 2).toString();
    }
    return {
        riskScore1,
        riskScore2,
    };
};

export const calculatePushingAndPullingTable2Result = (selectedTab: PushingAndPullingTabs, values: any) => {
    let result = "";
    const xFieldName =
        selectedTab === "average"
            ? "pushing_and_pulling_table_2_continuous_force_factor_x"
            : "pushing_and_pulling_table_2_continuous_force_worst_factor_x";
    const yFieldName =
        selectedTab === "average"
            ? "pushing_and_pulling_table_2_continuous_force_factor_y"
            : "pushing_and_pulling_table_2_continuous_force_worst_factor_y";
    let x = (values as any)[xFieldName];
    let y = (values as any)[yFieldName];
    if (x && y) {
        x = parseInt(x, 10);
        y = parseInt(y, 10);
        result = `${PULLING_AND_PUSHING_TABLE_2[x][y]}`;
    }

    return result;
};

export const calculatePushingAndPullingTable1Result = (selectedTab: PushingAndPullingTabs, values: any) => {
    let result = "";
    const xFieldName =
        selectedTab === "average"
            ? "pushing_and_pulling_table_1_initial_force_factor_x"
            : "pushing_and_pulling_table_1_initial_force_worst_factor_x";
    const yFieldName =
        selectedTab === "average"
            ? "pushing_and_pulling_table_1_initial_force_factor_y"
            : "pushing_and_pulling_table_1_initial_force_worst_factor_y";
    let x = (values as any)[xFieldName];
    let y = (values as any)[yFieldName];
    if (x && y) {
        x = parseInt(x, 10);
        y = parseInt(y, 10);
        result = `${PULLING_AND_PUSHING_TABLE_1[x][y]}`;
    }

    return result;
};

export const calculatePushingAndPullingRiskScores = (values: any) => {
    let initialForceRiskScore1 = "";
    let initialForceRiskScore2 = "";
    let continuousForceRiskScore1 = "";
    let continuousForceRiskScore2 = "";

    const dontConsiderFactors = (values as any).pushing_and_pulling_factors_non_existent as boolean;
    const initialForceFactors = [
        parseFloat((values as any).pushing_and_pulling_1_initial_force_factor),
        parseFloat((values as any).pushing_and_pulling_2_initial_force_factor),
        parseFloat((values as any).pushing_and_pulling_3_initial_force_factor),
        parseFloat((values as any).pushing_and_pulling_4_initial_force_factor),
        parseFloat((values as any).pushing_and_pulling_5_initial_force_factor),
        parseFloat((values as any).pushing_and_pulling_6_initial_force_factor),
        parseFloat((values as any).pushing_and_pulling_7_initial_force_factor),
        parseFloat((values as any).pushing_and_pulling_8_initial_force_factor),
    ];
    const initialForceWorstFactors = [
        parseFloat((values as any).pushing_and_pulling_1_initial_force_worst_factor),
        parseFloat((values as any).pushing_and_pulling_2_initial_force_worst_factor),
        parseFloat((values as any).pushing_and_pulling_3_initial_force_worst_factor),
        parseFloat((values as any).pushing_and_pulling_4_initial_force_worst_factor),
        parseFloat((values as any).pushing_and_pulling_5_initial_force_worst_factor),
        parseFloat((values as any).pushing_and_pulling_6_initial_force_worst_factor),
        parseFloat((values as any).pushing_and_pulling_7_initial_force_worst_factor),
        parseFloat((values as any).pushing_and_pulling_8_initial_force_worst_factor),
    ];
    const continuousForceFactors = [
        parseFloat((values as any).pushing_and_pulling_1_continuous_force_factor),
        parseFloat((values as any).pushing_and_pulling_2_continuous_force_factor),
        parseFloat((values as any).pushing_and_pulling_3_continuous_force_factor),
        parseFloat((values as any).pushing_and_pulling_4_continuous_force_factor),
        parseFloat((values as any).pushing_and_pulling_5_continuous_force_factor),
        parseFloat((values as any).pushing_and_pulling_6_continuous_force_factor),
        parseFloat((values as any).pushing_and_pulling_7_continuous_force_factor),
        parseFloat((values as any).pushing_and_pulling_8_continuous_force_factor),
    ];
    const continuousForceWorstFactors = [
        parseFloat((values as any).pushing_and_pulling_1_continuous_force_worst_factor),
        parseFloat((values as any).pushing_and_pulling_2_continuous_force_worst_factor),
        parseFloat((values as any).pushing_and_pulling_3_continuous_force_worst_factor),
        parseFloat((values as any).pushing_and_pulling_4_continuous_force_worst_factor),
        parseFloat((values as any).pushing_and_pulling_5_continuous_force_worst_factor),
        parseFloat((values as any).pushing_and_pulling_6_continuous_force_worst_factor),
        parseFloat((values as any).pushing_and_pulling_7_continuous_force_worst_factor),
        parseFloat((values as any).pushing_and_pulling_8_continuous_force_worst_factor),
    ];

    const table1Average = calculatePushingAndPullingTable1Result("average", values);
    const table1WorstCase = calculatePushingAndPullingTable1Result("worst_case", values);
    const table2Average = calculatePushingAndPullingTable2Result("average", values);
    const table2WorstCase = calculatePushingAndPullingTable2Result("worst_case", values);

    if (table1Average) {
        let score = parseFloat(table1Average);
        if (!dontConsiderFactors) {
            initialForceFactors.forEach((factor) => {
                score *= factor;
            });
        }
        initialForceRiskScore1 = round(score, 2).toString();
    }

    if (table1WorstCase) {
        let score = parseFloat(table1WorstCase);
        if (!dontConsiderFactors) {
            initialForceWorstFactors.forEach((factor) => {
                score *= factor;
            });
        }
        initialForceRiskScore2 = round(score, 2).toString();
    }

    if (table2Average) {
        let score = parseFloat(table2Average);
        if (!dontConsiderFactors) {
            continuousForceFactors.forEach((factor) => {
                score *= factor;
            });
        }
        continuousForceRiskScore1 = round(score, 2).toString();
    }

    if (table2WorstCase) {
        let score = parseFloat(table2WorstCase);
        if (!dontConsiderFactors) {
            continuousForceWorstFactors.forEach((factor) => {
                score *= factor;
            });
        }
        continuousForceRiskScore2 = round(score, 2).toString();
    }

    return {
        initialForceRiskScore1,
        initialForceRiskScore2,
        continuousForceRiskScore1,
        continuousForceRiskScore2,
    };
};

export const getLiftingWorkRiskScoresStatus = (
    assessment: AssessmentDetail
): {
    riskScore1Status: getScoreStatusReturn;
    riskScore2Status: getScoreStatusReturn;
} => {
    let riskScore1Status: getScoreStatusReturn = "";
    let riskScore2Status: getScoreStatusReturn = "";
    const riskScores = calculateLiftingWorkRiskScores(assessment);
    const riskScore1 = parseFloat(riskScores.riskScore1);
    if (riskScore1 >= 5) riskScore1Status = "red";
    else if (riskScore1 <= 4.9 && riskScore1 > 3) riskScore1Status = "yellow";
    else riskScore1Status = "green";
    const riskScore2 = parseFloat(riskScores.riskScore2);
    if (riskScore2 >= 5) riskScore2Status = "red";
    else if (riskScore2 <= 4.9 && riskScore2 > 3) riskScore2Status = "yellow";
    else riskScore2Status = "green";

    // if there is no lifting work
    if (Number.isNaN(riskScore1)) riskScore1Status = "";
    if (Number.isNaN(riskScore2)) riskScore2Status = "";

    return {
        riskScore1Status,
        riskScore2Status,
    };
};

export const getPushingAndPullingRiskScoresStatus = (
    assessment: AssessmentDetail
): {
    initialForceriskScore1Status: getScoreStatusReturn;
    initialForceriskScore2Status: getScoreStatusReturn;
    continuousForceRiskScore1Status: getScoreStatusReturn;
    continuousForceRiskScore2Status: getScoreStatusReturn;
} => {
    let initialForceriskScore1Status: getScoreStatusReturn = "";
    let initialForceriskScore2Status: getScoreStatusReturn = "";
    let continuousForceRiskScore1Status: getScoreStatusReturn = "";
    let continuousForceRiskScore2Status: getScoreStatusReturn = "";
    const riskScores = calculatePushingAndPullingRiskScores(assessment);
    const initialForceriskScore1 = parseFloat(riskScores.initialForceRiskScore1);
    const initialForceriskScore2 = parseFloat(riskScores.initialForceRiskScore2);
    const continuousForceRiskScore1 = parseFloat(riskScores.continuousForceRiskScore1);
    const continuousForceRiskScore2 = parseFloat(riskScores.continuousForceRiskScore2);

    if (initialForceriskScore1 >= 5) initialForceriskScore1Status = "red";
    else if (initialForceriskScore1 <= 4.9 && initialForceriskScore1 > 3) initialForceriskScore1Status = "yellow";
    else initialForceriskScore1Status = "green";

    if (initialForceriskScore2 >= 5) initialForceriskScore2Status = "red";
    else if (initialForceriskScore2 <= 4.9 && initialForceriskScore2 > 3) initialForceriskScore2Status = "yellow";
    else initialForceriskScore2Status = "green";

    if (continuousForceRiskScore1 >= 5) continuousForceRiskScore1Status = "red";
    else if (continuousForceRiskScore1 <= 4.9 && continuousForceRiskScore1 > 3)
        continuousForceRiskScore1Status = "yellow";
    else continuousForceRiskScore1Status = "green";

    if (continuousForceRiskScore2 >= 5) continuousForceRiskScore2Status = "red";
    else if (continuousForceRiskScore2 <= 4.9 && continuousForceRiskScore2 > 3)
        continuousForceRiskScore2Status = "yellow";
    else continuousForceRiskScore2Status = "green";

    // if there is no Pushing And Pulling
    if (Number.isNaN(initialForceriskScore1)) initialForceriskScore1Status = "";
    if (Number.isNaN(initialForceriskScore2)) initialForceriskScore2Status = "";
    if (Number.isNaN(continuousForceRiskScore1)) continuousForceRiskScore1Status = "";
    if (Number.isNaN(continuousForceRiskScore2)) continuousForceRiskScore2Status = "";

    return {
        initialForceriskScore1Status,
        initialForceriskScore2Status,
        continuousForceRiskScore1Status,
        continuousForceRiskScore2Status,
    };
};

export const getScoreStatus = (
    assessment: AssessmentDetail,
    fieldName: keyof AssessmentDetail
): getScoreStatusReturn => {
    const value = assessment[fieldName] as string;
    const floatValue = parseFloat(value);
    if (Number.isNaN(floatValue)) {
        return "";
    }
    // postures
    if (fieldName.includes("postures")) {
        // posture_8
        if (fieldName === "postures_8") {
            if (floatValue >= 3) return "red";
            else if (floatValue >= 1 && floatValue <= 2) return "yellow";
            else return "green";
        }
        // all the rest postures fields
        if (floatValue >= 3) return "red";
        else if (floatValue >= 1.5 && floatValue <= 2) return "yellow";
        else return "green";
    }

    // movements_repetition
    if (fieldName.includes("movements_repetition")) {
        if (fieldName === "movements_repetition_1_left" || fieldName === "movements_repetition_1_right") {
            if (floatValue === 5) return "red";
            else if (floatValue === 2) return "yellow";
            else if (floatValue === 0) return "green";
        }
        if (fieldName === "movements_repetition_2_left" || fieldName === "movements_repetition_2_right") {
            if (floatValue === 5) return "red";
            else if (floatValue === 1 || floatValue === 3) return "yellow";
            else if (floatValue === 0) return "green";
        }
        if (fieldName === "movements_repetition_3_left" || fieldName === "movements_repetition_3_right") {
            if (floatValue === 4) return "red";
            else if (floatValue === 2) return "yellow";
            else if (floatValue === 0 || floatValue === 1) return "green";
        }
        if (fieldName === "movements_repetition_4") {
            if (floatValue === 10) return "red";
            else if (floatValue === 4) return "yellow";
            else if (floatValue === 0) return "green";
        }
        if (fieldName === "movements_repetition_5") {
            if (floatValue === 6 || floatValue === 10) return "red";
            else if (floatValue === 3) return "yellow";
            else if (floatValue === 0) return "green";
        }
    }

    // influencing_factors
    // strenuous_work
    // perceived_physical_discomfort
    if (
        fieldName.includes("influencing_factors") ||
        fieldName.includes("strenuous_work") ||
        fieldName.includes("perceived_physical_discomfort")
    ) {
        if (floatValue === 4) return "red";
        else if (floatValue === 2) return "yellow";
        else if (floatValue === 0) return "green";
    }
    return "";
};

export const getAggregatedResults = (assessment: AssessmentDetail, fieldsArray: (keyof AssessmentDetail)[]) => {
    let redScores = 0;
    let yellowScores = 0;
    let greenScores = 0;
    fieldsArray.forEach((field) => {
        if (getScoreStatus(assessment, field) === "red") redScores += 1;
        else if (getScoreStatus(assessment, field) === "yellow") yellowScores += 1;
        else if (getScoreStatus(assessment, field) === "green") greenScores += 1;
    });

    return {
        redScores,
        yellowScores,
        greenScores,
    };
};

export const getPosturesAggregatedResults = (assessment: AssessmentDetail) => {
    return getAggregatedResults(assessment, [
        "postures_1",
        "postures_2",
        "postures_3",
        "postures_4",
        "postures_5_left",
        "postures_5_right",
        "postures_6_left",
        "postures_6_right",
        "postures_7_left",
        "postures_7_right",
        "postures_8",
    ]);
};

export const getMovementsAndrRepetitionAggregatedResults = (assessment: AssessmentDetail) => {
    return getAggregatedResults(assessment, [
        "movements_repetition_1_left",
        "movements_repetition_1_right",
        "movements_repetition_2_left",
        "movements_repetition_2_right",
        "movements_repetition_3_left",
        "movements_repetition_3_right",
        "movements_repetition_4",
        "movements_repetition_5",
    ]);
};

export const getLiftingWorkAggregatedResults = (assessment: AssessmentDetail) => {
    const riskScoresStatus = getLiftingWorkRiskScoresStatus(assessment);
    let redScores = 0;
    let yellowScores = 0;
    let greenScores = 0;

    if (riskScoresStatus.riskScore1Status === "red") redScores += 1;
    else if (riskScoresStatus.riskScore1Status === "yellow") yellowScores += 1;
    else if (riskScoresStatus.riskScore1Status === "green") greenScores += 1;

    if (riskScoresStatus.riskScore2Status === "red") redScores += 1;
    else if (riskScoresStatus.riskScore2Status === "yellow") yellowScores += 1;
    else if (riskScoresStatus.riskScore2Status === "green") greenScores += 1;
    return {
        redScores,
        yellowScores,
        greenScores,
    };
};

export const getPushingAndPullingAggregatedResults = (assessment: AssessmentDetail) => {
    const riskScoresStatus = getPushingAndPullingRiskScoresStatus(assessment);
    let redScores = 0;
    let yellowScores = 0;
    let greenScores = 0;

    if (riskScoresStatus.initialForceriskScore1Status === "red") redScores += 1;
    else if (riskScoresStatus.initialForceriskScore1Status === "yellow") yellowScores += 1;
    else if (riskScoresStatus.initialForceriskScore1Status === "green") greenScores += 1;

    if (riskScoresStatus.initialForceriskScore2Status === "red") redScores += 1;
    else if (riskScoresStatus.initialForceriskScore2Status === "yellow") yellowScores += 1;
    else if (riskScoresStatus.initialForceriskScore2Status === "green") greenScores += 1;

    if (riskScoresStatus.continuousForceRiskScore1Status === "red") redScores += 1;
    else if (riskScoresStatus.continuousForceRiskScore1Status === "yellow") yellowScores += 1;
    else if (riskScoresStatus.continuousForceRiskScore1Status === "green") greenScores += 1;

    if (riskScoresStatus.continuousForceRiskScore2Status === "red") redScores += 1;
    else if (riskScoresStatus.continuousForceRiskScore2Status === "yellow") yellowScores += 1;
    else if (riskScoresStatus.continuousForceRiskScore2Status === "green") greenScores += 1;

    return {
        redScores,
        yellowScores,
        greenScores,
    };
};

export const getInfluencingFactorsAggregatedResults = (assessment: AssessmentDetail) => {
    return getAggregatedResults(assessment, [
        "influencing_factors_1_a",
        "influencing_factors_1_b",
        "influencing_factors_1_c",
        "influencing_factors_1_d",
        "influencing_factors_1_e",
        "influencing_factors_1_f",
        "influencing_factors_2_a",
        "influencing_factors_2_b",
        "influencing_factors_2_c",
        "influencing_factors_2_d",
        "influencing_factors_2_e",
        "influencing_factors_2_f",
        "influencing_factors_2_g",
        "influencing_factors_2_h",
        "influencing_factors_3_a",
        "influencing_factors_3_b",
        "influencing_factors_3_c",
        "influencing_factors_3_d",
    ]);
};

export const getStrenuousWorkAggregatedResults = (assessment: AssessmentDetail) => {
    return getAggregatedResults(assessment, ["strenuous_work"]);
};

export const getPerceivedPhysicalDiscomfortAggregatedResults = (assessment: AssessmentDetail) => {
    return getAggregatedResults(assessment, ["perceived_physical_discomfort"]);
};

// this is for postures that have the value "0" for two options
// those two "0" were expressed as 0.1 and 0.2 to better manage form state
export const getPosturesModifiedValues = (assessment: AssessmentDetail) => {
    let postures_3 = assessment.postures_3;
    if (postures_3 === "0.1" || postures_3 === "0.2") postures_3 = "0";

    let postures_7_left = assessment.postures_7_left;
    if (postures_7_left === "0.1" || postures_7_left === "0.2") postures_7_left = "0";

    let postures_7_right = assessment.postures_7_right;
    if (postures_7_right === "0.1" || postures_7_right === "0.2") postures_7_right = "0";

    let postures_8 = assessment.postures_8;
    if (postures_8 === "0.1" || postures_8 === "0.2") postures_8 = "0";

    return {
        postures_3,
        postures_7_left,
        postures_7_right,
        postures_8,
    };
};

export const getDetailedSummaryCalculations = (rampAssessment: RAMPAssessment) => {
    const { riskScore1: liftingWorkRiskScore1, riskScore2: liftingWorkRiskScore2 } = calculateLiftingWorkRiskScores(
        rampAssessment.assessment
    );
    const { riskScore1Status: liftingWorkRiskScore1Status, riskScore2Status: liftingWorkRiskScore2Status } =
        getLiftingWorkRiskScoresStatus(rampAssessment.assessment);

    const { continuousForceRiskScore1, continuousForceRiskScore2, initialForceRiskScore1, initialForceRiskScore2 } =
        calculatePushingAndPullingRiskScores(rampAssessment.assessment);
    const {
        continuousForceRiskScore1Status,
        continuousForceRiskScore2Status,
        initialForceriskScore1Status,
        initialForceriskScore2Status,
    } = getPushingAndPullingRiskScoresStatus(rampAssessment.assessment);

    const { postures_3, postures_7_left, postures_7_right, postures_8 } = getPosturesModifiedValues(
        rampAssessment.assessment
    );

    return {
        postures_1: rampAssessment.assessment.postures_1,
        postures_2: rampAssessment.assessment.postures_2,
        postures_3,
        postures_4: rampAssessment.assessment.postures_4,
        postures_5_left: rampAssessment.assessment.postures_5_left,
        postures_5_right: rampAssessment.assessment.postures_5_right,
        postures_6_left: rampAssessment.assessment.postures_6_left,
        postures_6_right: rampAssessment.assessment.postures_6_right,
        postures_7_left,
        postures_7_right,
        postures_8,
        movements_repetition_1_left: rampAssessment.assessment.movements_repetition_1_left,
        movements_repetition_1_right: rampAssessment.assessment.movements_repetition_1_right,
        movements_repetition_2_left: rampAssessment.assessment.movements_repetition_2_left,
        movements_repetition_2_right: rampAssessment.assessment.movements_repetition_2_right,
        movements_repetition_3_left: rampAssessment.assessment.movements_repetition_3_left,
        movements_repetition_3_right: rampAssessment.assessment.movements_repetition_3_right,
        movements_repetition_4: rampAssessment.assessment.movements_repetition_4,
        movements_repetition_5: rampAssessment.assessment.movements_repetition_5,
        liftingWorkRiskScore1,
        liftingWorkRiskScore2,
        liftingWorkRiskScore1Status,
        liftingWorkRiskScore2Status,
        continuousForceRiskScore1,
        continuousForceRiskScore2,
        initialForceRiskScore1,
        initialForceRiskScore2,
        continuousForceRiskScore1Status,
        continuousForceRiskScore2Status,
        initialForceriskScore1Status,
        initialForceriskScore2Status,
        influencing_factors_1_a: rampAssessment.assessment.influencing_factors_1_a,
        influencing_factors_1_b: rampAssessment.assessment.influencing_factors_1_b,
        influencing_factors_1_c: rampAssessment.assessment.influencing_factors_1_c,
        influencing_factors_1_d: rampAssessment.assessment.influencing_factors_1_d,
        influencing_factors_1_e: rampAssessment.assessment.influencing_factors_1_e,
        influencing_factors_1_f: rampAssessment.assessment.influencing_factors_1_f,
        influencing_factors_2_a: rampAssessment.assessment.influencing_factors_2_a,
        influencing_factors_2_b: rampAssessment.assessment.influencing_factors_2_b,
        influencing_factors_2_c: rampAssessment.assessment.influencing_factors_2_c,
        influencing_factors_2_d: rampAssessment.assessment.influencing_factors_2_d,
        influencing_factors_2_e: rampAssessment.assessment.influencing_factors_2_e,
        influencing_factors_2_f: rampAssessment.assessment.influencing_factors_2_f,
        influencing_factors_2_g: rampAssessment.assessment.influencing_factors_2_g,
        influencing_factors_2_h: rampAssessment.assessment.influencing_factors_2_h,
        influencing_factors_3_a: rampAssessment.assessment.influencing_factors_3_a,
        influencing_factors_3_b: rampAssessment.assessment.influencing_factors_3_b,
        influencing_factors_3_c: rampAssessment.assessment.influencing_factors_3_c,
        influencing_factors_3_d: rampAssessment.assessment.influencing_factors_3_d,
        strenuous_work: rampAssessment.assessment.strenuous_work,
        strenuous_work_type_1: rampAssessment.assessment.strenuous_work_type_1,
        strenuous_work_type_2: rampAssessment.assessment.strenuous_work_type_2,
        strenuous_work_type_3: rampAssessment.assessment.strenuous_work_type_3,
        strenuous_work_type_4: rampAssessment.assessment.strenuous_work_type_4,
        strenuous_work_type_other_comment: rampAssessment.assessment.strenuous_work_type_other_comment,
        perceived_physical_discomfort: rampAssessment.assessment.perceived_physical_discomfort,
        perceived_physical_discomfort_person_1_comment:
            rampAssessment.assessment.perceived_physical_discomfort_person_1_comment,
        perceived_physical_discomfort_person_2_comment:
            rampAssessment.assessment.perceived_physical_discomfort_person_2_comment,
        perceived_physical_discomfort_person_3_comment:
            rampAssessment.assessment.perceived_physical_discomfort_person_3_comment,
        perceived_physical_discomfort_person_4_comment:
            rampAssessment.assessment.perceived_physical_discomfort_person_4_comment,
        perceived_physical_discomfort_person_5_comment:
            rampAssessment.assessment.perceived_physical_discomfort_person_5_comment,
    };
};

export const formatAssessmentTime = (timeInHours: number): string => {
    // Convert hours to seconds
    const timeInSeconds = Math.round(timeInHours * 3600);

    const hours: number = Math.floor(timeInSeconds / 3600);
    const minutes: number = Math.floor((timeInSeconds % 3600) / 60);
    const seconds: number = timeInSeconds % 60;

    return [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
    ].join(":");
};
