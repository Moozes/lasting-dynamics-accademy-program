import { useTranslationV2 } from "ui";

import { IMultiAssessmentDetailedSummaryFormatedData, RAMPAssessment } from "@app-types/index";

import { getDetailedSummaryCalculations, getScoreStatus } from "../utils";

export const useMultiDetailedSummaryFormatedData = (
    assessmentArray: RAMPAssessment[]
): { formatedData: IMultiAssessmentDetailedSummaryFormatedData } => {
    const t = useTranslationV2();
    const calculations = assessmentArray.map((assessmentDetail) => getDetailedSummaryCalculations(assessmentDetail));

    const colSpan = assessmentArray.length + 1;

    const fillIfEmpty = (val: string) => {
        if (val !== "") return `${val}`;
        return "-";
    };

    const hasStrenuousWork = (rampAssessment: RAMPAssessment) => {
        return rampAssessment.assessment.strenuous_work === ("2" as any);
    };

    return {
        formatedData: [
            // postures
            {
                text: t("ramp_assessments.postures_form.title"),
                colSpan,
            },
            {
                text: t("ramp_assessments.postures_form.postures_1_title"),
                values: calculations.map((calc, idx) => ({
                    score: calc.postures_1,
                    className: getScoreStatus(assessmentArray[idx].assessment, "postures_1"),
                })),
            },
            {
                text: t("ramp_assessments.postures_form.postures_2_title"),
                values: calculations.map((calc, idx) => ({
                    score: calc.postures_2,
                    className: getScoreStatus(assessmentArray[idx].assessment, "postures_2"),
                })),
            },
            {
                text: t("ramp_assessments.postures_form.postures_3_title"),
                values: calculations.map((calc, idx) => ({
                    score: calc.postures_3,
                    className: getScoreStatus(assessmentArray[idx].assessment, "postures_3"),
                })),
            },
            {
                text: t("ramp_assessments.postures_form.postures_4_title"),
                values: calculations.map((calc, idx) => ({
                    score: calc.postures_4,
                    className: getScoreStatus(assessmentArray[idx].assessment, "postures_4"),
                })),
            },
            {
                text: `${t("ramp_assessments.postures_form.postures_5_title")} ${t("left_arm")}`,
                values: calculations.map((calc, idx) => ({
                    score: calc.postures_5_left,
                    className: getScoreStatus(assessmentArray[idx].assessment, "postures_5_left"),
                })),
            },
            {
                text: `${t("ramp_assessments.postures_form.postures_5_title")} ${t("right_arm")}`,
                values: calculations.map((calc, idx) => ({
                    score: calc.postures_5_right,
                    className: getScoreStatus(assessmentArray[idx].assessment, "postures_5_right"),
                })),
            },
            {
                text: `${t("ramp_assessments.postures_form.postures_6_title")} ${t("left_hand")}`,
                values: calculations.map((calc, idx) => ({
                    score: calc.postures_6_left,
                    className: getScoreStatus(assessmentArray[idx].assessment, "postures_6_left"),
                })),
            },
            {
                text: `${t("ramp_assessments.postures_form.postures_6_title")} ${t("right_hand")}`,
                values: calculations.map((calc, idx) => ({
                    score: calc.postures_6_right,
                    className: getScoreStatus(assessmentArray[idx].assessment, "postures_6_right"),
                })),
            },
            {
                text: `${t("ramp_assessments.postures_form.postures_7_title")} ${t("left_hand")}`,
                values: calculations.map((calc, idx) => ({
                    score: calc.postures_7_left,
                    className: getScoreStatus(assessmentArray[idx].assessment, "postures_7_left"),
                })),
            },
            {
                text: `${t("ramp_assessments.postures_form.postures_7_title")} ${t("right_hand")}`,
                values: calculations.map((calc, idx) => ({
                    score: calc.postures_7_right,
                    className: getScoreStatus(assessmentArray[idx].assessment, "postures_7_right"),
                })),
            },
            {
                text: t("ramp_assessments.postures_form.postures_8_title"),
                values: calculations.map((calc, idx) => ({
                    score: calc.postures_8,
                    className: getScoreStatus(assessmentArray[idx].assessment, "postures_8"),
                })),
            },
            // movements repetition
            {
                text: t("ramp_assessments.movements_repetition_form.title"),
                colSpan,
            },
            {
                text: `${t("ramp_assessments.movements_repetition_form.movements_repetition_1_title")} ${t(
                    "left_arm"
                )}`,
                values: calculations.map((calc, idx) => ({
                    score: calc.movements_repetition_1_left,
                    className: getScoreStatus(assessmentArray[idx].assessment, "movements_repetition_1_left"),
                })),
            },
            {
                text: `${t("ramp_assessments.movements_repetition_form.movements_repetition_1_title")} ${t(
                    "right_arm"
                )}`,
                values: calculations.map((calc, idx) => ({
                    score: calc.movements_repetition_1_right,
                    className: getScoreStatus(assessmentArray[idx].assessment, "movements_repetition_1_right"),
                })),
            },
            {
                text: `${t("ramp_assessments.movements_repetition_form.movements_repetition_2_title")} ${t(
                    "left_hand"
                )}`,
                values: calculations.map((calc, idx) => ({
                    score: calc.movements_repetition_2_left,
                    className: getScoreStatus(assessmentArray[idx].assessment, "movements_repetition_2_left"),
                })),
            },
            {
                text: `${t("ramp_assessments.movements_repetition_form.movements_repetition_2_title")} ${t(
                    "right_hand"
                )}`,
                values: calculations.map((calc, idx) => ({
                    score: calc.movements_repetition_2_right,
                    className: getScoreStatus(assessmentArray[idx].assessment, "movements_repetition_2_right"),
                })),
            },
            {
                text: `${t("ramp_assessments.movements_repetition_form.movements_repetition_3_title")} ${t(
                    "left_hand"
                )}`,
                values: calculations.map((calc, idx) => ({
                    score: calc.movements_repetition_3_left,
                    className: getScoreStatus(assessmentArray[idx].assessment, "movements_repetition_3_left"),
                })),
            },
            {
                text: `${t("ramp_assessments.movements_repetition_form.movements_repetition_3_title")} ${t(
                    "right_hand"
                )}`,
                values: calculations.map((calc, idx) => ({
                    score: calc.movements_repetition_3_right,
                    className: getScoreStatus(assessmentArray[idx].assessment, "movements_repetition_3_right"),
                })),
            },
            {
                text: `${t("ramp_assessments.movements_repetition_form.movements_repetition_4_title")}`,
                values: calculations.map((calc, idx) => ({
                    score: calc.movements_repetition_4,
                    className: getScoreStatus(assessmentArray[idx].assessment, "movements_repetition_4"),
                })),
            },
            {
                text: `${t("ramp_assessments.movements_repetition_form.movements_repetition_5_title")}`,
                values: calculations.map((calc, idx) => ({
                    score: calc.movements_repetition_5,
                    className: getScoreStatus(assessmentArray[idx].assessment, "movements_repetition_5"),
                })),
            },
            // lifting work
            {
                text: t("ramp_assessments.lifting_work_form.title"),
                colSpan,
            },
            {
                text: t("average_case"),
                values: calculations.map((calc) => ({
                    score: fillIfEmpty(calc.liftingWorkRiskScore1),
                    className: calc.liftingWorkRiskScore1Status,
                })),
            },
            {
                text: t("worst_case"),
                values: calculations.map((calc) => ({
                    score: fillIfEmpty(calc.liftingWorkRiskScore2),
                    className: calc.liftingWorkRiskScore2Status,
                })),
            },
            // pushing and pulling
            {
                text: t("ramp_assessments.pushing_and_pulling_form.title"),
                colSpan,
            },
            {
                text: `${t("ramp_assessments.pushing_and_pulling_form.factor_initial_force")} (${t("average_case")})`,
                values: calculations.map((calc) => ({
                    score: fillIfEmpty(calc.initialForceRiskScore1),
                    className: calc.initialForceriskScore1Status,
                })),
            },
            {
                text: `${t("ramp_assessments.pushing_and_pulling_form.factor_initial_force")} (${t("worst_case")})`,
                values: calculations.map((calc) => ({
                    score: fillIfEmpty(calc.initialForceRiskScore2),
                    className: calc.initialForceriskScore2Status,
                })),
            },
            {
                text: `${t("ramp_assessments.pushing_and_pulling_form.factor_Continuous_force")} (${t(
                    "average_case"
                )})`,
                values: calculations.map((calc) => ({
                    score: fillIfEmpty(calc.continuousForceRiskScore1),
                    className: calc.continuousForceRiskScore1Status,
                })),
            },
            {
                text: `${t("ramp_assessments.pushing_and_pulling_form.factor_Continuous_force")} (${t("worst_case")})`,
                values: calculations.map((calc) => ({
                    score: fillIfEmpty(calc.continuousForceRiskScore2),
                    className: calc.continuousForceRiskScore2Status,
                })),
            },
            // influencing factors
            {
                text: t("ramp_assessments.influencing_factors_form.title"),
                colSpan,
            },
            {
                text: `5.1 ${t("ramp_assessments.influencing_factors_form.influencing_factors_1_title")}`,
                colSpan,
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_1_a"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_1_a,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_1_a"),
                })),
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_1_b"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_1_b,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_1_b"),
                })),
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_1_c"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_1_c,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_1_c"),
                })),
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_1_d"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_1_d,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_1_d"),
                })),
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_1_e"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_1_e,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_1_e"),
                })),
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_1_f"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_1_f,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_1_f"),
                })),
            },
            {
                text: `5.2 ${t("ramp_assessments.influencing_factors_form.influencing_factors_2_title")}`,
                colSpan,
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_a"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_2_a,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_2_a"),
                })),
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_b"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_2_b,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_2_b"),
                })),
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_c"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_2_c,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_2_c"),
                })),
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_d"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_2_d,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_2_d"),
                })),
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_e"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_2_e,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_2_e"),
                })),
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_f"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_2_f,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_2_f"),
                })),
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_g"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_2_g,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_2_g"),
                })),
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_h"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_2_h,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_2_h"),
                })),
            },
            {
                text: `5.3 ${t("ramp_assessments.influencing_factors_form.influencing_factors_3_title")}`,
                colSpan,
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_3_a"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_3_a,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_3_a"),
                })),
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_3_b"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_3_b,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_3_b"),
                })),
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_3_c"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_3_c,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_3_c"),
                })),
            },
            {
                text: t("ramp_assessments.influencing_factors_form.influencing_factors_3_d"),
                values: calculations.map((calc, idx) => ({
                    score: calc.influencing_factors_3_d,
                    className: getScoreStatus(assessmentArray[idx].assessment, "influencing_factors_3_d"),
                })),
            },
            // strenuous work
            {
                text: t("ramp_assessments.strenuous_work_form.title"),
                colSpan,
            },
            {
                text: t("ramp_assessments.strenuous_work_form.strenuous_work_1_a"),
                values: calculations.map((calc, idx) => ({
                    score: calc.strenuous_work,
                    className: getScoreStatus(assessmentArray[idx].assessment, "strenuous_work"),
                })),
            },
            {
                text: t("ramp_assessments.strenuous_work_form.strenuous_work_2_a"),
                values: calculations.map((calc, idx) => ({
                    score: hasStrenuousWork(assessmentArray[idx]) ? calc.strenuous_work_type_1 : fillIfEmpty(""),
                    className: "",
                })),
            },
            {
                text: t("ramp_assessments.strenuous_work_form.strenuous_work_2_b"),
                values: calculations.map((calc, idx) => ({
                    score: hasStrenuousWork(assessmentArray[idx]) ? calc.strenuous_work_type_2 : fillIfEmpty(""),
                    className: "",
                })),
            },
            {
                text: t("ramp_assessments.strenuous_work_form.strenuous_work_2_c"),
                values: calculations.map((calc, idx) => ({
                    score: hasStrenuousWork(assessmentArray[idx]) ? calc.strenuous_work_type_3 : fillIfEmpty(""),
                    className: "",
                })),
            },
            {
                text: t("ramp_assessments.strenuous_work_form.strenuous_work_2_d"),
                values: calculations.map((calc, idx) => ({
                    score: hasStrenuousWork(assessmentArray[idx]) ? calc.strenuous_work_type_4 : fillIfEmpty(""),
                    className: "",
                })),
            },
            // perceived physical discomfort
            {
                text: t("ramp_assessments.perceived_physical_discomfort_form.title"),
                colSpan,
            },
            {
                text: t("ramp_assessments.perceived_physical_discomfort_form.perceived_physical_discomfort_1_a"),
                values: calculations.map((calc, idx) => ({
                    score: calc.perceived_physical_discomfort,
                    className: getScoreStatus(assessmentArray[idx].assessment, "perceived_physical_discomfort"),
                })),
            },
        ],
    };
};
