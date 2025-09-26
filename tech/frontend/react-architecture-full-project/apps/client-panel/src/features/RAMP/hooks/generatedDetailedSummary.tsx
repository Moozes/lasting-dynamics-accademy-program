import { useTheme } from "@mui/material";

import { useTranslationV2 } from "ui";

import {
    backPosture1,
    backPosture2,
    backPosture3,
    backPosture4,
    backPosture6,
    postureOfHead1,
    postureOfHead2,
    postureOfHead4,
    upperArmPosture1,
    upperArmPosture2,
} from "@features/RAMP/assets";
import {
    IGeneratedRAMPResultsFormatedData,
    TGeneratedRAMPAssessment,
    TGeneratedRAMPResultsPdfTemplateProps,
} from "@features/RAMP/types";
import { useSingleAssessmentQueryCache } from "@hooks/index";
import { fillIfNull } from "@utils/index";

import { formatAssessmentTime, getGeneratedCalculations } from "../utils";

export const useGeneratedDetailedSummaryFormatedData = (): { formatedData: IGeneratedRAMPResultsFormatedData[] } => {
    const t = useTranslationV2();
    const {
        palette: { mode },
    } = useTheme();
    const { data } = useSingleAssessmentQueryCache<TGeneratedRAMPAssessment>()!;
    const { assessment: assessmentDetail } = data || {};
    const calculations = getGeneratedCalculations(data);

    const formattedData: IGeneratedRAMPResultsFormatedData[] = [
        // 1.1 Posture of the Head - Forwards and to the Side
        {
            question: t("ramp_assessments.postures_form.postures_1_title"),
            status: calculations[1]?.status || null,
            variables: t("ramp_assessments.variables_forward_bending_sidebending"),
            calculations: [
                t("ramp_assessments.calculation_forward_bending_30_degrees"),
                t("ramp_assessments.calculation_side_bending_10_degrees"),
            ],
            subQuestion: [
                {
                    question: "1.1",
                    illustration: postureOfHead1(mode),
                    illustrationPDF: postureOfHead1("light"),
                    time: assessmentDetail?.postures_1_generated_forward_bending_gt_30_degrees_time
                        ? formatAssessmentTime(assessmentDetail.postures_1_generated_forward_bending_gt_30_degrees_time)
                        : "-",
                    percentage: fillIfNull(
                        assessmentDetail?.postures_1_generated_forward_bending_gt_30_degrees_percentage
                    ),
                    missing_limb: assessmentDetail?.postures_1_missing_limb || null,
                },
                {
                    question: "1.2",
                    illustration: postureOfHead2(mode),
                    illustrationPDF: postureOfHead2("light"),
                    time: assessmentDetail?.postures_1_generated_side_bending_gt_10_degrees_time
                        ? formatAssessmentTime(assessmentDetail.postures_1_generated_side_bending_gt_10_degrees_time)
                        : "-",
                    percentage: fillIfNull(
                        assessmentDetail?.postures_1_generated_side_bending_gt_10_degrees_percentage
                    ),
                    missing_limb: assessmentDetail?.postures_1_missing_limb || null,
                },
            ],
        },
        // 1.2 Posture of the Head - Backwards
        {
            question: t("ramp_assessments.postures_form.postures_2_title"),
            status: calculations[2]?.status || null,
            variables: t("ramp_assessments.variables_backward_bending"),
            calculations: [t("ramp_assessments.calculation_backward_bending_10_degrees")],
            subQuestion: [
                {
                    question: "1.1",
                    illustration: postureOfHead4(mode),
                    illustrationPDF: postureOfHead4("light"),
                    time: assessmentDetail?.postures_2_generated_backward_bending_gt_10_degrees_time
                        ? formatAssessmentTime(
                              assessmentDetail.postures_2_generated_backward_bending_gt_10_degrees_time
                          )
                        : "-",
                    percentage: fillIfNull(
                        assessmentDetail?.postures_2_generated_backward_bending_gt_10_degrees_percentage
                    ),
                    missing_limb: assessmentDetail?.postures_2_missing_limb || null,
                },
            ],
        },
        // 1.3 Back posture - moderate bending
        {
            question: t("ramp_assessments.postures_form.postures_3_title"),
            status: calculations[3]?.status || null,
            variables: t("ramp_assessments.variables_forward_bending_sidebending"),
            calculations: [
                t("ramp_assessments.calculation_forward_bending_30_degrees"),
                t("ramp_assessments.calculation_side_bending_10_degrees"),
            ],
            subQuestion: [
                {
                    question: "1.1",
                    illustration: backPosture1(mode),
                    illustrationPDF: backPosture1("light"),
                    time: assessmentDetail?.postures_3_generated_forward_bending_20_44_degrees_time
                        ? formatAssessmentTime(assessmentDetail.postures_3_generated_forward_bending_20_44_degrees_time)
                        : "-",
                    percentage: fillIfNull(
                        assessmentDetail?.postures_3_generated_forward_bending_20_44_degrees_percentage
                    ),
                    missing_limb: assessmentDetail?.postures_3_missing_limb || null,
                },
                {
                    question: "1.2",
                    illustration: backPosture2(mode),
                    illustrationPDF: backPosture2("light"),
                    time: assessmentDetail?.postures_3_generated_side_bending_10_29_degrees_time
                        ? formatAssessmentTime(assessmentDetail.postures_3_generated_side_bending_10_29_degrees_time)
                        : "-",
                    percentage: fillIfNull(
                        assessmentDetail?.postures_3_generated_side_bending_10_29_degrees_percentage
                    ),
                    missing_limb: assessmentDetail?.postures_3_missing_limb || null,
                },
            ],
        },
        // 1.4 Back posture - considerable bending and twisting
        {
            question: t("ramp_assessments.postures_form.postures_4_title"),
            status: calculations[4]?.status || null,
            variables: t("ramp_assessments.variables_forward_side_backward_bending"),
            calculations: [
                t("ramp_assessments.calculation_forward_bending_45_degrees"),
                t("ramp_assessments.calculation_side_bending_30_degrees"),
                t("ramp_assessments.calculation_backward_bending_5_degrees"),
            ],
            subQuestion: [
                {
                    question: "1.1",
                    illustration: backPosture3(mode),
                    illustrationPDF: backPosture3("light"),
                    time: assessmentDetail?.postures_4_generated_forward_bending_gt_45_degrees_time
                        ? formatAssessmentTime(assessmentDetail.postures_4_generated_forward_bending_gt_45_degrees_time)
                        : "-",
                    percentage: fillIfNull(
                        assessmentDetail?.postures_4_generated_forward_bending_gt_45_degrees_percentage
                    ),
                    missing_limb: assessmentDetail?.postures_4_missing_limb || null,
                },
                {
                    question: "1.2",
                    illustration: backPosture4(mode),
                    illustrationPDF: backPosture4("light"),
                    time: assessmentDetail?.postures_4_generated_side_bending_gt_30_degrees_time
                        ? formatAssessmentTime(assessmentDetail.postures_4_generated_side_bending_gt_30_degrees_time)
                        : "-",
                    percentage: fillIfNull(
                        assessmentDetail?.postures_4_generated_side_bending_gt_30_degrees_percentage
                    ),
                    missing_limb: assessmentDetail?.postures_4_missing_limb || null,
                },
                {
                    question: "1.3",
                    illustration: backPosture6(mode),
                    illustrationPDF: backPosture6("light"),
                    time: assessmentDetail?.postures_4_generated_backward_bending_gt_5_degrees_time
                        ? formatAssessmentTime(assessmentDetail.postures_4_generated_backward_bending_gt_5_degrees_time)
                        : "-",
                    percentage: fillIfNull(
                        assessmentDetail?.postures_4_generated_backward_bending_gt_5_degrees_percentage
                    ),
                    missing_limb: assessmentDetail?.postures_4_missing_limb || null,
                },
            ],
        },
        // 1.5 Upper arm posture - hand in or above shoulder height
        {
            question: t("ramp_assessments.postures_form.postures_5_title"),
            status: calculations[5]?.status || null,
            variables: t("ramp_assessments.variables_elevation_angle"),
            calculations: [t("ramp_assessments.calculation_elevation_angle_90_degrees")],
            subQuestion: [
                {
                    question: "1.1",
                    illustration: upperArmPosture1(mode),
                    illustrationPDF: upperArmPosture1("light"),
                    time: assessmentDetail?.postures_5_generated_elevation_angle_gt_90_degrees_time
                        ? formatAssessmentTime(assessmentDetail.postures_5_generated_elevation_angle_gt_90_degrees_time)
                        : "-",
                    percentage: fillIfNull(
                        assessmentDetail?.postures_5_generated_elevation_angle_gt_90_degrees_percentage
                    ),
                    missing_limb: assessmentDetail?.postures_5_missing_limb || null,
                },
            ],
        },
        // 1.6 Upper arm posture - hand in or outside the outer work area
        {
            question: t("ramp_assessments.postures_form.postures_6_title"),
            status: calculations[6]?.status || null,
            variables: t("ramp_assessments.variables_hand_distance_body"),
            calculations: [t("ramp_assessments.calculation_hand_distance_30_cm")],
            subQuestion: [
                {
                    question: "1.1",
                    illustration: upperArmPosture2(mode),
                    illustrationPDF: upperArmPosture2("light"),
                    time: assessmentDetail?.postures_6_generated_hand_distance_gt_30cm_from_body_time
                        ? formatAssessmentTime(
                              assessmentDetail.postures_6_generated_hand_distance_gt_30cm_from_body_time
                          )
                        : "-",
                    percentage: fillIfNull(
                        assessmentDetail?.postures_6_generated_hand_distance_gt_30cm_from_body_percentage
                    ),
                    missing_limb: assessmentDetail?.postures_6_missing_limb || null,
                },
            ],
        },
    ];

    return { formatedData: formattedData };
};

export const useGeneratedRAMPResultsPdfTemplate = (): TGeneratedRAMPResultsPdfTemplateProps => {
    const cache = useSingleAssessmentQueryCache<TGeneratedRAMPAssessment>()!;
    const { formatedData } = useGeneratedDetailedSummaryFormatedData();

    return {
        assessment: cache.data,
        generatedRAMPFormatedDataFirstPage: formatedData.slice(0, 3),
        generatedRAMPFormatedDataSecondPage: formatedData.slice(3),
    };
};
