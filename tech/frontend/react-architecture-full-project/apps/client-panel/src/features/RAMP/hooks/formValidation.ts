import { useFormikContext } from "formik";

import { useTranslationV2 } from "ui";

import { FieldNameFilledStatusArray, RAMPAssessmentDetail as AssessmentDetail } from "@app-types/index";
import { formatNonFilledFields } from "@utils/index";

export const useRAMPFormValidation = () => {
    const t = useTranslationV2();
    const { values } = useFormikContext<AssessmentDetail>();

    // returns [{fieldName: "...", filled: true or false}]
    const constructStatusArray = (arr: AssessmentDetailKeys[]) =>
        arr.reduce<FieldNameFilledStatusArray>((acc, current) => {
            return acc.concat({
                fieldName: current,
                filled: Boolean(values[current]) || values[current] !== "",
            });
        }, []);

    type AssessmentDetailKeys = keyof AssessmentDetail;
    const posturesRequiredFields: AssessmentDetailKeys[] = [
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
    ];
    const posturesRequiredFieldsStatuses = constructStatusArray(posturesRequiredFields);
    const posturesNonFilledRequiredFields = formatNonFilledFields(posturesRequiredFieldsStatuses, [
        "1.1",
        "1.2",
        "1.3",
        "1.4",
        `1.5 (${t("left")})`,
        `1.5 (${t("right")})`,
        `1.6 (${t("left")})`,
        `1.6 (${t("right")})`,
        `1.7 (${t("left")})`,
        `1.7 (${t("right")})`,
        "1.8",
    ]);

    const movementsAndRepetitionRequiredFields: AssessmentDetailKeys[] = [
        "movements_repetition_1_left",
        "movements_repetition_1_right",
        "movements_repetition_2_left",
        "movements_repetition_2_right",
        "movements_repetition_3_left",
        "movements_repetition_3_right",
        "movements_repetition_4",
        "movements_repetition_5",
    ];
    const movementsAndRepetitionRequiredFieldsStatuses = constructStatusArray(movementsAndRepetitionRequiredFields);
    const movementsAndRepetitionNonFilledRequiredFields = formatNonFilledFields(
        movementsAndRepetitionRequiredFieldsStatuses,
        [
            `2.1 (${t("left")})`,
            `2.1 (${t("right")})`,
            `2.2 (${t("left")})`,
            `2.2 (${t("right")})`,
            `2.3 (${t("left")})`,
            `2.3 (${t("right")})`,
            "2.4",
            "2.5",
        ]
    );

    let liftingWorkRequiredFields: AssessmentDetailKeys[] = ["lifting_work_non_existent"];

    if (!values.lifting_work_non_existent) {
        liftingWorkRequiredFields = [
            ...liftingWorkRequiredFields,
            "lifting_work_table_1_factor_x",
            "lifting_work_table_1_factor_y",
            "lifting_work_table_1_worst_factor_x",
            "lifting_work_table_1_worst_factor_y",
            "lifting_work_table_2_factor_x",
            "lifting_work_table_2_factor_y",
            "lifting_work_table_2_worst_factor_x",
            "lifting_work_table_2_worst_factor_y",
        ];
    }
    const liftingWorkRequiredFieldsStatuses = constructStatusArray(liftingWorkRequiredFields);
    const liftingWorkNonFilledRequiredFields = formatNonFilledFields(liftingWorkRequiredFieldsStatuses, [
        "",
        `${t("table")} 1 (${t("average_case")})`,
        `${t("table")} 1 (${t("average_case")})`,
        `${t("table")} 1 (${t("worst_case")})`,
        `${t("table")} 1 (${t("worst_case")})`,
        `${t("table")} 2 (${t("average_case")})`,
        `${t("table")} 2 (${t("average_case")})`,
        `${t("table")} 2 (${t("worst_case")})`,
        `${t("table")} 2 (${t("worst_case")})`,
    ]);

    let pushingAndPullingRequiredFields: AssessmentDetailKeys[] = ["pushing_and_pulling_non_existent"];

    if (!values.pushing_and_pulling_non_existent) {
        pushingAndPullingRequiredFields = [
            ...pushingAndPullingRequiredFields,
            "pushing_and_pulling_table_1_initial_force_factor_x",
            "pushing_and_pulling_table_1_initial_force_factor_y",
            "pushing_and_pulling_table_1_initial_force_worst_factor_x",
            "pushing_and_pulling_table_1_initial_force_worst_factor_y",
            "pushing_and_pulling_table_2_continuous_force_factor_x",
            "pushing_and_pulling_table_2_continuous_force_factor_y",
            "pushing_and_pulling_table_2_continuous_force_worst_factor_x",
            "pushing_and_pulling_table_2_continuous_force_worst_factor_y",
        ];
    }
    const pushingAndPullingRequiredFieldsStatuses = constructStatusArray(pushingAndPullingRequiredFields);
    const pushingAndPullingNonFilledRequiredFields = formatNonFilledFields(pushingAndPullingRequiredFieldsStatuses, [
        "",
        `${t("table")} 4 (${t("average_case")})`,
        `${t("table")} 4 (${t("average_case")})`,
        `${t("table")} 4 (${t("worst_case")})`,
        `${t("table")} 4 (${t("worst_case")})`,
        `${t("table")} 5 (${t("average_case")})`,
        `${t("table")} 5 (${t("average_case")})`,
        `${t("table")} 5 (${t("worst_case")})`,
        `${t("table")} 5 (${t("worst_case")})`,
    ]);

    const influencingFactorsRequiredFields: AssessmentDetailKeys[] = [
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
    ];
    const influencingFactorsRequiredFieldsStatuses = constructStatusArray(influencingFactorsRequiredFields);
    const influencingFactorsNonFilledRequiredFields = formatNonFilledFields(influencingFactorsRequiredFieldsStatuses, [
        "5.1",
        "5.1",
        "5.1",
        "5.1",
        "5.1",
        "5.1",
        "5.2",
        "5.2",
        "5.2",
        "5.2",
        "5.2",
        "5.2",
        "5.2",
        "5.2",
        "5.3",
        "5.3",
        "5.3",
        "5.3",
    ]);

    let strenuousWorkRequiredFields: AssessmentDetailKeys[] = ["strenuous_work"];

    if (values.strenuous_work === ("2" as any)) {
        strenuousWorkRequiredFields = [
            ...strenuousWorkRequiredFields,
            "strenuous_work_type_1",
            "strenuous_work_type_2",
            "strenuous_work_type_3",
            "strenuous_work_type_4",
        ];
    }
    const strenuousWorkRequiredFieldsStatuses = constructStatusArray(strenuousWorkRequiredFields);
    const strenuousWorkNonFilledRequiredFields = formatNonFilledFields(strenuousWorkRequiredFieldsStatuses, [
        "6.1",
        "6.2",
        "6.2",
        "6.2",
        "6.2",
    ]);

    const perceivedPhysicalDiscomfortRequiredFields: AssessmentDetailKeys[] = ["perceived_physical_discomfort"];
    const perceivedPhysicalDiscomfortRequiredFieldsStatuses = constructStatusArray(
        perceivedPhysicalDiscomfortRequiredFields
    );
    const perceivedPhysicalDiscomfortNonFilledRequiredFields = formatNonFilledFields(
        perceivedPhysicalDiscomfortRequiredFieldsStatuses,
        ["7"]
    );

    return {
        posturesCompleted: posturesRequiredFields.every((elm) => values[elm]),
        movementsAndRepetitionCompleted: movementsAndRepetitionRequiredFields.every((elm) => values[elm]),
        liftingWorkCompleted: liftingWorkRequiredFields.every((elm) => values[elm] !== ""),
        pushingAndPullingCompleted: pushingAndPullingRequiredFields.every((elm) => values[elm] !== ""),
        influencingFactorsCompleted: influencingFactorsRequiredFields.every((elm) => values[elm]),
        strenuousWorkCompleted: strenuousWorkRequiredFields.every((elm) => values[elm]),
        perceivedPhysicalDiscomfortCompleted: perceivedPhysicalDiscomfortRequiredFields.every((elm) => values[elm]),
        posturesNonFilledRequiredFields,
        movementsAndRepetitionNonFilledRequiredFields,
        liftingWorkNonFilledRequiredFields,
        pushingAndPullingNonFilledRequiredFields,
        influencingFactorsNonFilledRequiredFields,
        strenuousWorkNonFilledRequiredFields,
        perceivedPhysicalDiscomfortNonFilledRequiredFields,
    };
};
