import { useFormikContext } from "formik";

import { useTranslationV2 } from "ui";

import { RULAAssessmentDetail } from "@app-types/index";
import { constructStatusArray, formatNonFilledFields } from "@utils/index";

export const useRULAFormValidation = () => {
    const t = useTranslationV2();
    const { values } = useFormikContext<RULAAssessmentDetail>();

    type AssessmentDetailKeys = keyof RULAAssessmentDetail;
    let rightRequiredField: AssessmentDetailKeys[] = [
        "rightUpperArmPosition",
        "rightLowerArmPosition",
        "rightWristPosition",
        "rightWristTwist",
        "rightForceLoadScore",
    ];
    if (values.noRightSide) rightRequiredField = [];
    const rightRequiredFieldsStatuses = constructStatusArray(rightRequiredField, values);
    const rightNonFilledRequiredFields = formatNonFilledFields(rightRequiredFieldsStatuses, [
        t("rula_assessments.locate_upper_arm_position"),
        t("rula_assessments.locate_lower_arm_angle"),
        t("rula_assessments.locate_wrist_position"),
        t("rula_assessments.wrist_twist"),
        t("rula_assessments.force/load_score"),
    ]);

    let leftRequiredField: AssessmentDetailKeys[] = [
        "leftUpperArmPosition",
        "leftLowerArmPosition",
        "leftWristPosition",
        "leftWristTwist",
        "leftForceLoadScore",
    ];
    if (values.noLeftSide) leftRequiredField = [];
    const leftRequiredFieldsStatuses = constructStatusArray(leftRequiredField, values);
    const leftNonFilledRequiredFields = formatNonFilledFields(leftRequiredFieldsStatuses, [
        t("rula_assessments.locate_upper_arm_position"),
        t("rula_assessments.locate_lower_arm_angle"),
        t("rula_assessments.locate_wrist_position"),
        t("rula_assessments.wrist_twist"),
        t("rula_assessments.force/load_score"),
    ]);

    const headTrunkAndLegsRequiredField: AssessmentDetailKeys[] = [
        "headAndNeck",
        "trunk",
        "legs",
        "headTrunkAndLegsForceLoadScore",
    ];
    const headTrunkAndLegsRequiredFieldsStatuses = constructStatusArray(headTrunkAndLegsRequiredField, values);
    const headTrunkAndLegsNonFilledRequiredFields = formatNonFilledFields(headTrunkAndLegsRequiredFieldsStatuses, [
        t("rula_assessments.head_and_neck"),
        t("trunk"),
        t("legs"),
        t("rula_assessments.force/load_score"),
    ]);

    return {
        rightCompleted: rightRequiredField.every((elm) => values[elm]),
        leftCompleted: leftRequiredField.every((elm) => values[elm]),
        headTrunkAndLegsCompleted: headTrunkAndLegsRequiredField.every((elm) => values[elm]),
        rightNonFilledRequiredFields,
        leftNonFilledRequiredFields,
        headTrunkAndLegsNonFilledRequiredFields,
    };
};
