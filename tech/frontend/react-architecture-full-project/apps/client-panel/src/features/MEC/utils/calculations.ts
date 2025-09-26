/* eslint-disable no-nested-ternary */
import { IGeneratedMECAssessment, IMECAssessmentStats } from "@app-types/index";

import { IMECAssessmentResultStats, IMECCalculations, MECStatusEnum } from "../types";

enum JustificationsEnum {
    freq_gt_120 = "Freq > 120 times/h",
    freq_gt_60 = "Freq > 60 times/h",
    freq_gt_30_and_lte_120 = "(30 < Freq <= 120) times/h",
    freq_gt_15_and_lte_60 = "(15 < Freq <= 60) times/h",
    freq_lte_30 = "Freq <= 30 times/h",
    freq_lte_15 = "Freq <= 15 times/h",
    time_gt_8 = "Time > 8 min/h",
    time_gt_15 = "Time > 15 min/h",
    time_gt_8_and_lte_15 = "(8 < Time <= 15) min/h",
    time_gt_4_and_lte_8 = "(4 < Time <= 8) min/h",
    time_gte_8_and_lte_15 = "(8 <= Time <= 15) min/h",
    time_lte_8 = "Time <= 8 min/h",
    time_lte_4 = "Time <= 4 min",
}

// Question 1 has different conditions compared to the other questions
const getMECQuestion_1_Calculations = (
    q_1_1: IMECAssessmentStats,
    q_1_2: IMECAssessmentStats
): IMECAssessmentResultStats => {
    const dmph_1_1 = q_1_1.dynamic_movements_per_hour;
    const smph_1_1 = q_1_1.static_minutes_per_hour;
    const ml_1_1 = q_1_1.missing_limb;

    const dmph_1_2 = q_1_2.dynamic_movements_per_hour;
    const smph_1_2 = q_1_2.static_minutes_per_hour;
    const ml_1_2 = q_1_2.missing_limb;

    const classifyRisk = (
        freq: number | null,
        staticTime: number | null,
        missingLimb: string | null,
        isRedZone: boolean
    ): { freqStatus: MECStatusEnum | null; timeStatus: MECStatusEnum | null } => {
        // Handle missing limb or null values
        if (missingLimb || freq === null || staticTime === null) {
            return { freqStatus: null, timeStatus: null };
        }

        // Thresholds for frequency and static time
        const freqGreen = isRedZone ? 15 : 30;
        const freqYellow = isRedZone ? 60 : 120;
        const staticGreen = isRedZone ? 4 : 8;
        const staticYellow = isRedZone ? 8 : 15;

        const freqStatus =
            freq > freqYellow ? MECStatusEnum.RED : freq > freqGreen ? MECStatusEnum.YELLOW : MECStatusEnum.GREEN;

        const timeStatus =
            staticTime >= staticYellow
                ? MECStatusEnum.RED
                : staticTime >= staticGreen
                ? MECStatusEnum.YELLOW
                : MECStatusEnum.GREEN;

        return { freqStatus, timeStatus };
    };

    const { freqStatus: freq_1_1, timeStatus: time_1_1 } = classifyRisk(
        dmph_1_1,
        smph_1_1,
        ml_1_1,
        false // Yellow Zone
    );

    const { freqStatus: freq_1_2, timeStatus: time_1_2 } = classifyRisk(
        dmph_1_2,
        smph_1_2,
        ml_1_2,
        true // Red Zone
    );

    let status_1 = null;
    if (
        freq_1_1 === MECStatusEnum.RED ||
        time_1_1 === MECStatusEnum.RED ||
        freq_1_2 === MECStatusEnum.RED ||
        time_1_2 === MECStatusEnum.RED
    ) {
        status_1 = MECStatusEnum.RED;
    } else if (
        freq_1_1 === MECStatusEnum.YELLOW ||
        time_1_1 === MECStatusEnum.YELLOW ||
        freq_1_2 === MECStatusEnum.YELLOW ||
        time_1_2 === MECStatusEnum.YELLOW
    ) {
        status_1 = MECStatusEnum.YELLOW;
    } else if (
        freq_1_1 === MECStatusEnum.GREEN &&
        time_1_1 === MECStatusEnum.GREEN &&
        freq_1_2 === MECStatusEnum.GREEN &&
        time_1_2 === MECStatusEnum.GREEN
    ) {
        status_1 = MECStatusEnum.GREEN;
    }

    let justification_1_array = [];
    if (status_1 === MECStatusEnum.RED) {
        if (freq_1_1 === MECStatusEnum.RED) justification_1_array.push(JustificationsEnum.freq_gt_120);
        if (time_1_1 === MECStatusEnum.RED) justification_1_array.push(JustificationsEnum.time_gt_15);
        if (freq_1_2 === MECStatusEnum.RED) justification_1_array.push(JustificationsEnum.freq_gt_60);
        if (time_1_2 === MECStatusEnum.RED) justification_1_array.push(JustificationsEnum.time_gt_8);
    } else if (status_1 === MECStatusEnum.YELLOW) {
        if (freq_1_1 === MECStatusEnum.YELLOW) justification_1_array.push(JustificationsEnum.freq_gt_30_and_lte_120);
        if (time_1_1 === MECStatusEnum.YELLOW) justification_1_array.push(JustificationsEnum.time_gt_8_and_lte_15);
        if (freq_1_2 === MECStatusEnum.YELLOW) justification_1_array.push(JustificationsEnum.freq_gt_15_and_lte_60);
        if (time_1_2 === MECStatusEnum.YELLOW) justification_1_array.push(JustificationsEnum.time_gt_4_and_lte_8);
    } else if (status_1 === MECStatusEnum.GREEN) {
        if (freq_1_1 === MECStatusEnum.GREEN) justification_1_array.push(JustificationsEnum.freq_lte_30);
        if (time_1_1 === MECStatusEnum.GREEN) justification_1_array.push(JustificationsEnum.time_lte_8);
        if (freq_1_2 === MECStatusEnum.GREEN) justification_1_array.push(JustificationsEnum.freq_lte_15);
        if (time_1_2 === MECStatusEnum.GREEN) justification_1_array.push(JustificationsEnum.time_lte_4);
    }

    // Remove duplicates
    justification_1_array = [...new Set(justification_1_array)];
    const justification_1 = justification_1_array.join(", ");

    return {
        status: status_1,
        justification: justification_1,
    };
};

// For questions 9, 10, 11
const getMECQuestionCalculations = (questionStats: IMECAssessmentStats[]): IMECAssessmentResultStats => {
    const freqTimeStatusArray: { freq: MECStatusEnum | null; time: MECStatusEnum | null }[] = questionStats.map((q) => {
        if (q.missing_limb || q.dynamic_movements_per_hour == null || q.static_minutes_per_hour == null)
            return {
                freq: null,
                time: null,
            };
        return {
            freq:
                q.dynamic_movements_per_hour > 60
                    ? MECStatusEnum.RED
                    : q.dynamic_movements_per_hour > 15
                    ? MECStatusEnum.YELLOW
                    : MECStatusEnum.GREEN,
            time:
                q.static_minutes_per_hour > 8
                    ? MECStatusEnum.RED
                    : q.static_minutes_per_hour > 4
                    ? MECStatusEnum.YELLOW
                    : MECStatusEnum.GREEN,
        };
    });
    let status = null;
    if (freqTimeStatusArray.some((q) => q.freq == MECStatusEnum.GREEN || q.time == MECStatusEnum.GREEN))
        status = MECStatusEnum.GREEN;
    if (freqTimeStatusArray.some((q) => q.freq == MECStatusEnum.YELLOW || q.time == MECStatusEnum.YELLOW))
        status = MECStatusEnum.YELLOW;
    if (freqTimeStatusArray.some((q) => q.freq == MECStatusEnum.RED || q.time == MECStatusEnum.RED))
        status = MECStatusEnum.RED;

    let justification_array = [];
    if (status == MECStatusEnum.RED) {
        if (freqTimeStatusArray.some((q) => q.freq == MECStatusEnum.RED))
            justification_array.push(JustificationsEnum.freq_gt_60);
        if (freqTimeStatusArray.some((q) => q.time == MECStatusEnum.RED))
            justification_array.push(JustificationsEnum.time_gt_8);
    } else if (status == MECStatusEnum.YELLOW) {
        if (freqTimeStatusArray.some((q) => q.freq == MECStatusEnum.YELLOW))
            justification_array.push(JustificationsEnum.freq_gt_15_and_lte_60);
        if (freqTimeStatusArray.some((q) => q.time == MECStatusEnum.YELLOW))
            justification_array.push(JustificationsEnum.time_gt_4_and_lte_8);
    } else if (status == MECStatusEnum.GREEN) {
        if (freqTimeStatusArray.some((q) => q.freq == MECStatusEnum.GREEN))
            justification_array.push(JustificationsEnum.freq_lte_15);
        if (freqTimeStatusArray.some((q) => q.time == MECStatusEnum.GREEN))
            justification_array.push(JustificationsEnum.time_lte_4);
    }
    // remove duplicated
    justification_array = [...new Set(justification_array)];
    const justification = justification_array.join(", ");
    return {
        status,
        justification,
    };
};

export const getMECCalculations = (assessment: IGeneratedMECAssessment): IMECCalculations => {
    const assessmentDetail = assessment.assessment;

    const question_1_results = getMECQuestion_1_Calculations(
        assessmentDetail["1.1 Working Yellow Zone"],
        assessmentDetail["1.2 Working in RED Zone"]
    );
    const question_9_results = (() => {
        const rightArmFreq = assessmentDetail["9.1 Position of Right ARM in Redzone"].dynamic_movements_per_hour;
        const leftArmFreq = assessmentDetail["9.2 Position of Left ARM in Redzone"].dynamic_movements_per_hour;

        // Handle cases where one or both frequencies might be null
        if (rightArmFreq === null && leftArmFreq === null) {
            // If both are null, pass right arm arbitrarily since both will give same null result
            return getMECQuestionCalculations([assessmentDetail["9.1 Position of Right ARM in Redzone"]]);
        }

        if (rightArmFreq === null) {
            return getMECQuestionCalculations([assessmentDetail["9.2 Position of Left ARM in Redzone"]]);
        }

        if (leftArmFreq === null) {
            return getMECQuestionCalculations([assessmentDetail["9.1 Position of Right ARM in Redzone"]]);
        }

        // Both frequencies are numbers, compare them
        return getMECQuestionCalculations([
            rightArmFreq >= leftArmFreq
                ? assessmentDetail["9.1 Position of Right ARM in Redzone"]
                : assessmentDetail["9.2 Position of Left ARM in Redzone"],
        ]);
    })();
    const question_10_results = getMECQuestionCalculations([
        assessmentDetail["10.1 Position of Trunk in Redzone (forward bending)"],
        assessmentDetail["10.2 Position of Trunk in Redzone (side bending)"],
    ]);
    const question_11_results = getMECQuestionCalculations([
        assessmentDetail["11.1 Positon of Head in Redzone (forward bending)"],
        assessmentDetail["11.2 Positon of Head in Redzone (side bending)"],
    ]);

    return {
        1: {
            status: question_1_results.status,
            justification: question_1_results.justification,
        },
        9: {
            status: question_9_results.status,
            justification: question_9_results.justification,
        },
        10: {
            status: question_10_results.status,
            justification: question_10_results.justification,
        },
        11: {
            status: question_11_results.status,
            justification: question_11_results.justification,
        },
    };
};
