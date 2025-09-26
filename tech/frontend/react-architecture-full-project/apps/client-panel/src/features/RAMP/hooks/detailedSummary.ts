import { useTranslationV2 } from "ui";

import { DetailedSummaryDataRow, DetailedSummaryFormatedData } from "@features/RAMP/types";
import {
    calculateLiftingWorkRiskScores,
    calculatePushingAndPullingRiskScores,
    getInfluencingFactorsAggregatedResults,
    getLiftingWorkAggregatedResults,
    getLiftingWorkRiskScoresStatus,
    getMovementsAndrRepetitionAggregatedResults,
    getPerceivedPhysicalDiscomfortAggregatedResults,
    getPosturesAggregatedResults,
    getPosturesModifiedValues,
    getPushingAndPullingAggregatedResults,
    getPushingAndPullingRiskScoresStatus,
    getScoreStatus,
    getStrenuousWorkAggregatedResults,
} from "@features/RAMP/utils";
import { useSingleAssessmentQueryCache } from "@hooks/index";

export const useDetailedSummaryFormatedData = (): DetailedSummaryFormatedData => {
    const t = useTranslationV2();
    const { data: RAMPAssessment } = useSingleAssessmentQueryCache()!;

    const liftingWorkRiskScores = calculateLiftingWorkRiskScores(RAMPAssessment.assessment);
    const liftingWorkRiskScoresStatus = getLiftingWorkRiskScoresStatus(RAMPAssessment.assessment);

    const pushingAndPullingRiskScores = calculatePushingAndPullingRiskScores(RAMPAssessment.assessment);
    const pushingAndPullingRiskScoresStatus = getPushingAndPullingRiskScoresStatus(RAMPAssessment.assessment);

    const posturesAggregatedResults = getPosturesAggregatedResults(RAMPAssessment.assessment);
    const movementsAndrRepetitionAggregatedResults = getMovementsAndrRepetitionAggregatedResults(
        RAMPAssessment.assessment
    );
    const liftingWorkAggregatedResults = getLiftingWorkAggregatedResults(RAMPAssessment.assessment);
    const pushingAndPullingAggregatedResults = getPushingAndPullingAggregatedResults(RAMPAssessment.assessment);
    const influencingFactorsAggregatedResults = getInfluencingFactorsAggregatedResults(RAMPAssessment.assessment);
    const strenuousWorkAggregatedResults = getStrenuousWorkAggregatedResults(RAMPAssessment.assessment);
    const perceivedPhysicalDiscomfortAggregatedResults = getPerceivedPhysicalDiscomfortAggregatedResults(
        RAMPAssessment.assessment
    );

    const { postures_3, postures_7_left, postures_7_right, postures_8 } = getPosturesModifiedValues(
        RAMPAssessment.assessment
    );

    const strenuousWorkSubResults: DetailedSummaryDataRow[] = [
        {
            text: t("ramp_assessments.strenuous_work_form.strenuous_work_2_a"),
            staus: "",
            score: RAMPAssessment.assessment.strenuous_work_type_1,
            userComment: RAMPAssessment.assessment.strenuous_work_type_1_comment,
        },
        {
            text: t("ramp_assessments.strenuous_work_form.strenuous_work_2_b"),
            staus: "",
            score: RAMPAssessment.assessment.strenuous_work_type_2,
            userComment: RAMPAssessment.assessment.strenuous_work_type_2_comment,
        },
        {
            text: t("ramp_assessments.strenuous_work_form.strenuous_work_2_c"),
            staus: "",
            score: RAMPAssessment.assessment.strenuous_work_type_3,
            userComment: RAMPAssessment.assessment.strenuous_work_type_3_comment,
        },
        {
            text: t("ramp_assessments.strenuous_work_form.strenuous_work_2_d"),
            staus: "",
            score: RAMPAssessment.assessment.strenuous_work_type_4,
            userComment: RAMPAssessment.assessment.strenuous_work_type_4_comment,
        },
        {
            text: t("ramp_assessments.strenuous_work_form.strenuous_work_2_e"),
            staus: "",
            score: "",
            userComment: RAMPAssessment.assessment.strenuous_work_type_other_comment,
        },
    ];

    const perceivedPhysicalDiscomfortSubResults: DetailedSummaryDataRow[] = [
        {
            text: `${t("person")} 1`,
            staus: "",
            score: "",
            userComment: RAMPAssessment.assessment.perceived_physical_discomfort_person_1_comment,
        },
        {
            text: `${t("person")} 2`,
            staus: "",
            score: "",
            userComment: RAMPAssessment.assessment.perceived_physical_discomfort_person_2_comment,
        },
        {
            text: `${t("person")} 3`,
            staus: "",
            score: "",
            userComment: RAMPAssessment.assessment.perceived_physical_discomfort_person_3_comment,
        },
        {
            text: `${t("person")} 4`,
            staus: "",
            score: "",
            userComment: RAMPAssessment.assessment.perceived_physical_discomfort_person_4_comment,
        },
        {
            text: `${t("person")} 5`,
            staus: "",
            score: "",
            userComment: RAMPAssessment.assessment.perceived_physical_discomfort_person_5_comment,
        },
    ];

    let liftingWorkResults: DetailedSummaryDataRow[] = [];
    if (liftingWorkRiskScores.riskScore1 !== "" && liftingWorkRiskScores.riskScore2 !== "") {
        liftingWorkResults = [
            {
                text: t("average_case"),
                staus: liftingWorkRiskScoresStatus.riskScore1Status,
                score: liftingWorkRiskScores.riskScore1,
                userComment: RAMPAssessment.assessment.lifting_work_comment_2,
            },
            {
                text: t("worst_case"),
                staus: liftingWorkRiskScoresStatus.riskScore2Status,
                score: liftingWorkRiskScores.riskScore2,
                userComment: RAMPAssessment.assessment.lifting_work_comment_2,
            },
        ];
    } else {
        liftingWorkResults = [
            {
                text: t("ramp_assessments.lifting_work_form.no_lifting_work_label"),
                staus: "",
                score: "",
                userComment: RAMPAssessment.assessment.lifting_work_comment_1,
            },
        ];
    }

    let pushingAndPullingResults: DetailedSummaryDataRow[] = [];
    if (
        pushingAndPullingRiskScores.initialForceRiskScore1 !== "" &&
        pushingAndPullingRiskScores.initialForceRiskScore2 !== "" &&
        pushingAndPullingRiskScores.continuousForceRiskScore1 !== "" &&
        pushingAndPullingRiskScores.continuousForceRiskScore2 !== ""
    ) {
        pushingAndPullingResults = [
            {
                text: `${t("ramp_assessments.pushing_and_pulling_form.factor_initial_force")} (${t("average_case")})`,
                staus: pushingAndPullingRiskScoresStatus.initialForceriskScore1Status,
                score: pushingAndPullingRiskScores.initialForceRiskScore1,
                userComment: RAMPAssessment.assessment.pushing_and_pulling_comment_2,
            },
            {
                text: `${t("ramp_assessments.pushing_and_pulling_form.factor_initial_force")} (${t("worst_case")})`,
                staus: pushingAndPullingRiskScoresStatus.initialForceriskScore2Status,
                score: pushingAndPullingRiskScores.initialForceRiskScore2,
                userComment: RAMPAssessment.assessment.pushing_and_pulling_comment_2,
            },
            {
                text: `${t("ramp_assessments.pushing_and_pulling_form.factor_Continuous_force")} (${t(
                    "average_case"
                )})`,
                staus: pushingAndPullingRiskScoresStatus.continuousForceRiskScore1Status,
                score: pushingAndPullingRiskScores.continuousForceRiskScore1,
                userComment: RAMPAssessment.assessment.pushing_and_pulling_comment_2,
            },
            {
                text: `${t("ramp_assessments.pushing_and_pulling_form.factor_Continuous_force")} (${t("worst_case")})`,
                staus: pushingAndPullingRiskScoresStatus.continuousForceRiskScore2Status,
                score: pushingAndPullingRiskScores.continuousForceRiskScore2,
                userComment: RAMPAssessment.assessment.pushing_and_pulling_comment_2,
            },
        ];
    } else {
        pushingAndPullingResults = [
            {
                text: t("ramp_assessments.pushing_and_pulling_form.no_pushing_and_pulling_label"),
                staus: "",
                score: "",
                userComment: RAMPAssessment.assessment.pushing_and_pulling_comment_1,
            },
        ];
    }

    return {
        formatedData: [
            {
                title: t("ramp_assessments.postures_form.title"),
                nbRed: `${posturesAggregatedResults.redScores}`,
                nbYellow: `${posturesAggregatedResults.yellowScores}`,
                nbGreen: `${posturesAggregatedResults.greenScores}`,
                tables: [
                    {
                        dataRows: [
                            {
                                text: t("ramp_assessments.postures_form.postures_1_title"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "postures_1"),
                                score: RAMPAssessment.assessment.postures_1,
                                userComment: RAMPAssessment.assessment.postures_1_comment,
                            },
                            {
                                text: t("ramp_assessments.postures_form.postures_2_title"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "postures_2"),
                                score: RAMPAssessment.assessment.postures_2,
                                userComment: RAMPAssessment.assessment.postures_2_comment,
                            },
                            {
                                text: t("ramp_assessments.postures_form.postures_3_title"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "postures_3"),
                                score: postures_3,
                                userComment: RAMPAssessment.assessment.postures_3_comment,
                            },
                            {
                                text: t("ramp_assessments.postures_form.postures_4_title"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "postures_4"),
                                score: RAMPAssessment.assessment.postures_4,
                                userComment: RAMPAssessment.assessment.postures_4_comment,
                            },
                            {
                                text: `${t("ramp_assessments.postures_form.postures_5_title")} ${t("left_arm")}`,
                                staus: getScoreStatus(RAMPAssessment.assessment, "postures_5_left"),
                                score: RAMPAssessment.assessment.postures_5_left,
                                userComment: RAMPAssessment.assessment.postures_5_comment,
                            },
                            {
                                text: `${t("ramp_assessments.postures_form.postures_5_title")} ${t("right_arm")}`,
                                staus: getScoreStatus(RAMPAssessment.assessment, "postures_5_right"),
                                score: RAMPAssessment.assessment.postures_5_right,
                                userComment: RAMPAssessment.assessment.postures_5_comment,
                            },
                            {
                                text: `${t("ramp_assessments.postures_form.postures_6_title")} ${t("left_hand")}`,
                                staus: getScoreStatus(RAMPAssessment.assessment, "postures_6_left"),
                                score: RAMPAssessment.assessment.postures_6_left,
                                userComment: RAMPAssessment.assessment.postures_6_comment,
                            },
                            {
                                text: `${t("ramp_assessments.postures_form.postures_6_title")} ${t("right_hand")}`,
                                staus: getScoreStatus(RAMPAssessment.assessment, "postures_6_right"),
                                score: RAMPAssessment.assessment.postures_6_right,
                                userComment: RAMPAssessment.assessment.postures_6_comment,
                            },
                            {
                                text: `${t("ramp_assessments.postures_form.postures_7_title")} ${t("left_hand")}`,
                                staus: getScoreStatus(RAMPAssessment.assessment, "postures_7_left"),
                                score: postures_7_left,
                                userComment: RAMPAssessment.assessment.postures_7_comment,
                            },
                            {
                                text: `${t("ramp_assessments.postures_form.postures_7_title")} ${t("right_hand")}`,
                                staus: getScoreStatus(RAMPAssessment.assessment, "postures_7_right"),
                                score: postures_7_right,
                                userComment: RAMPAssessment.assessment.postures_7_comment,
                            },
                            {
                                text: t("ramp_assessments.postures_form.postures_8_title"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "postures_8"),
                                score: postures_8,
                                userComment: RAMPAssessment.assessment.postures_8_comment,
                            },
                        ],
                    },
                ],
            },
            {
                title: t("ramp_assessments.movements_repetition_form.title"),
                nbRed: `${movementsAndrRepetitionAggregatedResults.redScores}`,
                nbYellow: `${movementsAndrRepetitionAggregatedResults.yellowScores}`,
                nbGreen: `${movementsAndrRepetitionAggregatedResults.greenScores}`,
                tables: [
                    {
                        dataRows: [
                            {
                                text: `${t(
                                    "ramp_assessments.movements_repetition_form.movements_repetition_1_title"
                                )} ${t("left_arm")}`,
                                staus: getScoreStatus(RAMPAssessment.assessment, "movements_repetition_1_left"),
                                score: RAMPAssessment.assessment.movements_repetition_1_left,
                                userComment: RAMPAssessment.assessment.movements_repetition_1_comment,
                            },
                            {
                                text: `${t(
                                    "ramp_assessments.movements_repetition_form.movements_repetition_1_title"
                                )} ${t("right_arm")}`,
                                staus: getScoreStatus(RAMPAssessment.assessment, "movements_repetition_1_right"),
                                score: RAMPAssessment.assessment.movements_repetition_1_right,
                                userComment: RAMPAssessment.assessment.movements_repetition_1_comment,
                            },
                            {
                                text: `${t(
                                    "ramp_assessments.movements_repetition_form.movements_repetition_2_title"
                                )} ${t("left_hand")}`,
                                staus: getScoreStatus(RAMPAssessment.assessment, "movements_repetition_2_left"),
                                score: RAMPAssessment.assessment.movements_repetition_2_left,
                                userComment: RAMPAssessment.assessment.movements_repetition_2_comment,
                            },
                            {
                                text: `${t(
                                    "ramp_assessments.movements_repetition_form.movements_repetition_2_title"
                                )} ${t("right_hand")}`,
                                staus: getScoreStatus(RAMPAssessment.assessment, "movements_repetition_2_right"),
                                score: RAMPAssessment.assessment.movements_repetition_2_right,
                                userComment: RAMPAssessment.assessment.movements_repetition_2_comment,
                            },
                            {
                                text: `${t(
                                    "ramp_assessments.movements_repetition_form.movements_repetition_3_title"
                                )} ${t("left_hand")}`,
                                staus: getScoreStatus(RAMPAssessment.assessment, "movements_repetition_3_left"),
                                score: RAMPAssessment.assessment.movements_repetition_3_left,
                                userComment: RAMPAssessment.assessment.movements_repetition_3_comment,
                            },
                            {
                                text: `${t(
                                    "ramp_assessments.movements_repetition_form.movements_repetition_3_title"
                                )} ${t("right_hand")}`,
                                staus: getScoreStatus(RAMPAssessment.assessment, "movements_repetition_3_right"),
                                score: RAMPAssessment.assessment.movements_repetition_3_right,
                                userComment: RAMPAssessment.assessment.movements_repetition_3_comment,
                            },
                            {
                                text: t("ramp_assessments.movements_repetition_form.movements_repetition_4_title"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "movements_repetition_4"),
                                score: RAMPAssessment.assessment.movements_repetition_4,
                                userComment: RAMPAssessment.assessment.movements_repetition_4_comment,
                            },
                            {
                                text: t("ramp_assessments.movements_repetition_form.movements_repetition_5_title"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "movements_repetition_5"),
                                score: RAMPAssessment.assessment.movements_repetition_5,
                                userComment: RAMPAssessment.assessment.movements_repetition_5_comment,
                            },
                        ],
                    },
                ],
            },
            {
                title: t("ramp_assessments.lifting_work_form.title"),
                nbRed: `${liftingWorkAggregatedResults.redScores}`,
                nbYellow: `${liftingWorkAggregatedResults.yellowScores}`,
                nbGreen: `${liftingWorkAggregatedResults.greenScores}`,
                tables: [
                    {
                        dataRows: liftingWorkResults,
                    },
                ],
            },
            {
                title: t("ramp_assessments.pushing_and_pulling_form.title"),
                nbRed: `${pushingAndPullingAggregatedResults.redScores}`,
                nbYellow: `${pushingAndPullingAggregatedResults.yellowScores}`,
                nbGreen: `${pushingAndPullingAggregatedResults.greenScores}`,
                tables: [
                    {
                        dataRows: pushingAndPullingResults,
                    },
                ],
            },
            {
                title: t("ramp_assessments.influencing_factors_form.title"),
                nbRed: `${influencingFactorsAggregatedResults.redScores}`,
                nbYellow: `${influencingFactorsAggregatedResults.yellowScores}`,
                nbGreen: `${influencingFactorsAggregatedResults.greenScores}`,
                tables: [
                    {
                        title: `5.1 ${t("ramp_assessments.influencing_factors_form.influencing_factors_1_title")}`,
                        dataRows: [
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_1_a"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_1_a"),
                                score: RAMPAssessment.assessment.influencing_factors_1_a,
                                userComment: RAMPAssessment.assessment.influencing_factors_1_a_comment,
                            },
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_1_b"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_1_b"),
                                score: RAMPAssessment.assessment.influencing_factors_1_b,
                                userComment: RAMPAssessment.assessment.influencing_factors_1_b_comment,
                            },
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_1_c"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_1_c"),
                                score: RAMPAssessment.assessment.influencing_factors_1_c,
                                userComment: RAMPAssessment.assessment.influencing_factors_1_c_comment,
                            },
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_1_d"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_1_d"),
                                score: RAMPAssessment.assessment.influencing_factors_1_d,
                                userComment: RAMPAssessment.assessment.influencing_factors_1_d_comment,
                            },
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_1_e"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_1_e"),
                                score: RAMPAssessment.assessment.influencing_factors_1_e,
                                userComment: RAMPAssessment.assessment.influencing_factors_1_e_comment,
                            },
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_1_f"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_1_f"),
                                score: RAMPAssessment.assessment.influencing_factors_1_f,
                                userComment: RAMPAssessment.assessment.influencing_factors_1_f_comment,
                            },
                        ],
                    },
                    {
                        title: `5.2 ${t("ramp_assessments.influencing_factors_form.influencing_factors_2_title")}`,
                        dataRows: [
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_a"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_2_a"),
                                score: RAMPAssessment.assessment.influencing_factors_2_a,
                                userComment: RAMPAssessment.assessment.influencing_factors_2_a_comment,
                            },
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_b"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_2_b"),
                                score: RAMPAssessment.assessment.influencing_factors_2_b,
                                userComment: RAMPAssessment.assessment.influencing_factors_2_b_comment,
                            },
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_c"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_2_c"),
                                score: RAMPAssessment.assessment.influencing_factors_2_c,
                                userComment: RAMPAssessment.assessment.influencing_factors_2_c_comment,
                            },
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_d"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_2_d"),
                                score: RAMPAssessment.assessment.influencing_factors_2_d,
                                userComment: RAMPAssessment.assessment.influencing_factors_2_d_comment,
                            },
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_e"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_2_e"),
                                score: RAMPAssessment.assessment.influencing_factors_2_e,
                                userComment: RAMPAssessment.assessment.influencing_factors_2_e_comment,
                            },
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_f"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_2_f"),
                                score: RAMPAssessment.assessment.influencing_factors_2_f,
                                userComment: RAMPAssessment.assessment.influencing_factors_2_f_comment,
                            },
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_g"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_2_g"),
                                score: RAMPAssessment.assessment.influencing_factors_2_g,
                                userComment: RAMPAssessment.assessment.influencing_factors_2_g_comment,
                            },
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_2_h"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_2_h"),
                                score: RAMPAssessment.assessment.influencing_factors_2_h,
                                userComment: RAMPAssessment.assessment.influencing_factors_2_h_comment,
                            },
                        ],
                    },
                    {
                        title: `5.3 ${t("ramp_assessments.influencing_factors_form.influencing_factors_3_title")}`,
                        dataRows: [
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_3_a"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_3_a"),
                                score: RAMPAssessment.assessment.influencing_factors_3_a,
                                userComment: RAMPAssessment.assessment.influencing_factors_3_a_comment,
                            },
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_3_b"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_3_b"),
                                score: RAMPAssessment.assessment.influencing_factors_3_b,
                                userComment: RAMPAssessment.assessment.influencing_factors_3_b_comment,
                            },
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_3_c"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_3_c"),
                                score: RAMPAssessment.assessment.influencing_factors_3_c,
                                userComment: RAMPAssessment.assessment.influencing_factors_3_c_comment,
                            },
                            {
                                text: t("ramp_assessments.influencing_factors_form.influencing_factors_3_d"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "influencing_factors_3_d"),
                                score: RAMPAssessment.assessment.influencing_factors_3_d,
                                userComment: RAMPAssessment.assessment.influencing_factors_3_d_comment,
                            },
                        ],
                    },
                ],
            },
            {
                title: t("ramp_assessments.strenuous_work_form.title"),
                nbRed: `${strenuousWorkAggregatedResults.redScores}`,
                nbYellow: `${strenuousWorkAggregatedResults.yellowScores}`,
                nbGreen: `${strenuousWorkAggregatedResults.greenScores}`,
                tables: [
                    {
                        dataRows: [
                            {
                                text: t("ramp_assessments.strenuous_work_form.strenuous_work_1_a"),
                                staus: getScoreStatus(RAMPAssessment.assessment, "strenuous_work"),
                                score: RAMPAssessment.assessment.strenuous_work,
                                userComment: RAMPAssessment.assessment.strenuous_work_comment,
                            },
                            ...(RAMPAssessment.assessment.strenuous_work === ("2" as any)
                                ? strenuousWorkSubResults
                                : []),
                        ],
                    },
                ],
            },
            {
                title: t("ramp_assessments.perceived_physical_discomfort_form.title"),
                nbRed: `${perceivedPhysicalDiscomfortAggregatedResults.redScores}`,
                nbYellow: `${perceivedPhysicalDiscomfortAggregatedResults.yellowScores}`,
                nbGreen: `${perceivedPhysicalDiscomfortAggregatedResults.greenScores}`,
                tables: [
                    {
                        dataRows: [
                            {
                                text: t(
                                    "ramp_assessments.perceived_physical_discomfort_form.perceived_physical_discomfort_1_a"
                                ),
                                staus: getScoreStatus(RAMPAssessment.assessment, "perceived_physical_discomfort"),
                                score: RAMPAssessment.assessment.perceived_physical_discomfort,
                                userComment: RAMPAssessment.assessment.perceived_physical_discomfort_comment,
                            },
                            ...(RAMPAssessment.assessment.perceived_physical_discomfort === ("2" as any)
                                ? perceivedPhysicalDiscomfortSubResults
                                : []),
                        ],
                    },
                ],
            },
        ],
    };
};
