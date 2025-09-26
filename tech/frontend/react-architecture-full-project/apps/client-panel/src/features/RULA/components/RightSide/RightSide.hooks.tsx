import { useEffect } from "react";
import { useFormikContext } from "formik";

import { useTheme } from "@mui/material";

import { useTranslationV2 } from "ui";

import {
    FormControlTypeEnum,
    ImagesFormCardProps,
    RULAAssessmentDetail as AssessmentDetail,
    TextOnlyFormCardProps,
} from "@app-types/index";
import {
    lowerArmAngleCheckboxImage,
    rightLowerArmAngle1,
    rightLowerArmAngle2,
    rightLowerArmAngle3,
    rightUpperArmPosition1,
    rightUpperArmPosition2,
    rightUpperArmPosition3,
    rightUpperArmPosition4,
    rightUpperArmPosition5,
    rightWristPosition1,
    rightWristPosition2,
    rightWristPosition3,
    rightWristPosition4,
    wristPositionCheckboxImage,
} from "@features/RULA/assets";

type FormatedData = {
    imagesFormCards: ImagesFormCardProps[];
    textOnlyFormCards: TextOnlyFormCardProps[];
};

export const useFormatedData = (): FormatedData => {
    const t = useTranslationV2();
    const {
        palette: { mode },
    } = useTheme();
    const { values, setFieldValue } = useFormikContext<AssessmentDetail>();
    const UpperArm = t("rula_assessments.locate_upper_arm_position");
    const UpperArmRadio1 = t("rula_assessments.between_-20°_and_20°");
    const UpperArmRadio2 = t("rula_assessments.extension_>_than_-20°");
    const UpperArmRadio3 = t("rula_assessments.flexion_between_20°_and_45");
    const UpperArmRadio4 = t("rula_assessments.flexion_between_45°_and_90°");
    const UpperArmRadio5 = t("rula_assessments.flexion_>_90°");
    const UpperArmCheckbox1 = t("rula_assessments.shoulder_is_raised");
    const UpperArmCheckbox2 = t("rula_assessments.upper_arm_is_abducted");
    const UpperArmCheckbox3 = t("rula_assessments.arm_aupported_or_person_is_leaning");

    const LowerArm = t("rula_assessments.locate_lower_arm_angle");
    const LowerArmRadio1 = t("rula_assessments.between_60°_and_100°");
    const LowerArmRadio2 = t("rula_assessments.between_0°_and_60°");
    const LowerArmRadio3 = t("rula_assessments.more_than_100°");
    const LowerArmCheckbox1 = t("rula_assessments.either_arm_is_working_across_midline_or_out_to_side_of_body");

    const WristPosition = t("rula_assessments.locate_wrist_position");
    const WristPositionRadio1 = t("neutral");
    const WristPositionRadio2 = t("rula_assessments.15°_of_flexion/extension");
    const WristPositionRadio3 = t("rula_assessments.>_15°_of_flexion/extension");
    const WristPositionRadio4 = t("rula_assessments.>_15°_of_flexion/extension");
    const WristPositionCheckbox1 = t("rula_assessments.wrist_is_bent_from_midline");

    const WristTwist = t("rula_assessments.wrist_twist");
    const WristTwistRadio1 = t("rula_assessments.wrist_is_twisted_in_mid-range");
    const WristTwistRadio2 = t("rula_assessments.wrist_is_at_or_near_end_of_range");

    const MuscleUseScore = t("rula_assessments.muscle_use_score");
    const MuscleUseScoreCheckbox = t("rula_assessments.muscle_use_score_label");

    const ForceLoadScore = t("rula_assessments.force/load_score");
    const ForceLoadScoreRadio1 = t("rula_assessments.load_<_4.4lbs.(intermittent)");
    const ForceLoadScoreRadio2 = t("rula_assessments.load_4.4_to_22_lbs.(intermittent)");
    const ForceLoadScoreRadio3 = t("rula_assessments.load_4.4_to_22_lbs.(static_or_repeated)");
    const ForceLoadScoreRadio4 = t("rula_assessments.more_than_22_lbs.or_repeated_or_shocks");

    // prevent selecting rightUpperArmPosition = 1, and rightUpperArmPositionCheckbox3 = true
    useEffect(() => {
        if (values.rightUpperArmPosition === "1") setFieldValue("rightUpperArmPositionCheckbox3", false);
    }, [values, setFieldValue]);

    if (values.noRightSide) {
        return {
            imagesFormCards: [],
            textOnlyFormCards: [],
        };
    }

    return {
        imagesFormCards: [
            {
                title: UpperArm,
                radioItems: [
                    {
                        label: UpperArmRadio1,
                        name: "rightUpperArmPosition",
                        value: "1",
                        score: "+1",
                        image: rightUpperArmPosition1(mode),
                    },
                    {
                        label: UpperArmRadio2,
                        name: "rightUpperArmPosition",
                        value: "2.1",
                        score: "+2",
                        image: rightUpperArmPosition2(mode),
                    },
                    {
                        label: UpperArmRadio3,
                        name: "rightUpperArmPosition",
                        value: "2.2",
                        score: "+2",
                        image: rightUpperArmPosition3(mode),
                    },
                    {
                        label: UpperArmRadio4,
                        name: "rightUpperArmPosition",
                        value: "3",
                        score: "+3",
                        image: rightUpperArmPosition4(mode),
                    },
                    {
                        label: UpperArmRadio5,
                        name: "rightUpperArmPosition",
                        value: "4",
                        score: "+4",
                        image: rightUpperArmPosition5(mode),
                    },
                ],
                checkboxItems: [
                    {
                        label: UpperArmCheckbox1,
                        name: "rightUpperArmPositionCheckbox1",
                        score: "+1",
                    },
                    {
                        label: UpperArmCheckbox2,
                        name: "rightUpperArmPositionCheckbox2",
                        score: "+1",
                    },
                    {
                        label: UpperArmCheckbox3,
                        name: "rightUpperArmPositionCheckbox3",
                        score: "-1",
                        // prevent selecting rightUpperArmPosition = 1, and rightUpperArmPositionCheckbox3 = true
                        disabled: values.rightUpperArmPosition === "1",
                    },
                ],
            },
            {
                title: LowerArm,
                radioItems: [
                    {
                        label: LowerArmRadio1,
                        name: "rightLowerArmPosition",
                        value: "1",
                        score: "+1",
                        image: rightLowerArmAngle1(mode),
                    },
                    {
                        label: LowerArmRadio2,
                        name: "rightLowerArmPosition",
                        value: "2.1",
                        score: "+2",
                        image: rightLowerArmAngle2(mode),
                    },
                    {
                        label: LowerArmRadio3,
                        name: "rightLowerArmPosition",
                        value: "2.2",
                        score: "+2",
                        image: rightLowerArmAngle3(mode),
                    },
                ],
                checkboxItems: [
                    {
                        label: LowerArmCheckbox1,
                        name: "rightLowerArmPositionCheckbox1",
                        score: "+1",
                    },
                ],
                checkboxImage: lowerArmAngleCheckboxImage(mode),
            },
            {
                title: WristPosition,
                radioItems: [
                    {
                        label: WristPositionRadio1,
                        name: "rightWristPosition",
                        value: "1",
                        score: "+1",
                        image: rightWristPosition1(mode),
                    },
                    {
                        label: WristPositionRadio2,
                        name: "rightWristPosition",
                        value: "2",
                        score: "+2",
                        image: rightWristPosition2(mode),
                    },
                    {
                        label: WristPositionRadio3,
                        name: "rightWristPosition",
                        value: "3.1",
                        score: "+3",
                        image: rightWristPosition3(mode),
                    },
                    {
                        label: WristPositionRadio4,
                        name: "rightWristPosition",
                        value: "3.2",
                        score: "+3",
                        image: rightWristPosition4(mode),
                    },
                ],
                checkboxItems: [
                    {
                        label: WristPositionCheckbox1,
                        name: "rightWristPositionCheckbox1",
                        score: "+1",
                    },
                ],
                checkboxImage: wristPositionCheckboxImage(mode),
            },
        ],
        textOnlyFormCards: [
            {
                title: WristTwist,
                items: [
                    { label: WristTwistRadio1, value: "1", score: "+1", name: "rightWristTwist" },
                    { label: WristTwistRadio2, value: "2", score: "+2", name: "rightWristTwist" },
                ],
                itemsType: FormControlTypeEnum.radio,
            },
            {
                title: MuscleUseScore,
                items: [{ label: MuscleUseScoreCheckbox, value: "1", score: "+1", name: "rightMuscleUseScore" }],
                itemsType: FormControlTypeEnum.checkbox,
            },
            {
                title: ForceLoadScore,
                items: [
                    { label: ForceLoadScoreRadio1, value: "0", score: "+0", name: "rightForceLoadScore" },
                    { label: ForceLoadScoreRadio2, value: "1", score: "+1", name: "rightForceLoadScore" },
                    { label: ForceLoadScoreRadio3, value: "2", score: "+2", name: "rightForceLoadScore" },
                    { label: ForceLoadScoreRadio4, value: "3", score: "+3", name: "rightForceLoadScore" },
                ],
                itemsType: FormControlTypeEnum.radio,
            },
        ],
    };
};
