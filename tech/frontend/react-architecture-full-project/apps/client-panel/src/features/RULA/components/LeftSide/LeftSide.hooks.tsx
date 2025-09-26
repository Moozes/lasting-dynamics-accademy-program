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
    leftLowerArmAngle1,
    leftLowerArmAngle2,
    leftLowerArmAngle3,
    leftUpperArmPosition1,
    leftUpperArmPosition2,
    leftUpperArmPosition3,
    leftUpperArmPosition4,
    leftUpperArmPosition5,
    leftWristPosition1,
    leftWristPosition2,
    leftWristPosition3,
    leftWristPosition4,
    lowerArmAngleCheckboxImage,
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

    // prevent selecting leftUpperArmPosition = 1, and leftUpperArmPositionCheckbox3 = true
    useEffect(() => {
        if (values.leftUpperArmPosition === "1") setFieldValue("leftUpperArmPositionCheckbox3", false);
    }, [values, setFieldValue]);

    if (values.noLeftSide) {
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
                        name: "leftUpperArmPosition",
                        value: "1",
                        score: "+1",
                        image: leftUpperArmPosition1(mode),
                    },
                    {
                        label: UpperArmRadio2,
                        name: "leftUpperArmPosition",
                        value: "2.1",
                        score: "+2",
                        image: leftUpperArmPosition2(mode),
                    },
                    {
                        label: UpperArmRadio3,
                        name: "leftUpperArmPosition",
                        value: "2.2",
                        score: "+2",
                        image: leftUpperArmPosition3(mode),
                    },
                    {
                        label: UpperArmRadio4,
                        name: "leftUpperArmPosition",
                        value: "3",
                        score: "+3",
                        image: leftUpperArmPosition4(mode),
                    },
                    {
                        label: UpperArmRadio5,
                        name: "leftUpperArmPosition",
                        value: "4",
                        score: "+4",
                        image: leftUpperArmPosition5(mode),
                    },
                ],
                checkboxItems: [
                    {
                        label: UpperArmCheckbox1,
                        name: "leftUpperArmPositionCheckbox1",
                        score: "+1",
                    },
                    {
                        label: UpperArmCheckbox2,
                        name: "leftUpperArmPositionCheckbox2",
                        score: "+1",
                    },
                    {
                        label: UpperArmCheckbox3,
                        name: "leftUpperArmPositionCheckbox3",
                        score: "-1",
                        // prevent selecting leftUpperArmPosition = 1, and leftUpperArmPositionCheckbox3 = true
                        disabled: values.leftUpperArmPosition === "1",
                    },
                ],
            },
            {
                title: LowerArm,
                radioItems: [
                    {
                        label: LowerArmRadio1,
                        name: "leftLowerArmPosition",
                        value: "1",
                        score: "+1",
                        image: leftLowerArmAngle1(mode),
                    },
                    {
                        label: LowerArmRadio2,
                        name: "leftLowerArmPosition",
                        value: "2.1",
                        score: "+2",
                        image: leftLowerArmAngle2(mode),
                    },
                    {
                        label: LowerArmRadio3,
                        name: "leftLowerArmPosition",
                        value: "2.2",
                        score: "+2",
                        image: leftLowerArmAngle3(mode),
                    },
                ],
                checkboxItems: [
                    {
                        label: LowerArmCheckbox1,
                        name: "leftLowerArmPositionCheckbox1",
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
                        name: "leftWristPosition",
                        value: "1",
                        score: "+1",
                        image: leftWristPosition1(mode),
                    },
                    {
                        label: WristPositionRadio2,
                        name: "leftWristPosition",
                        value: "2",
                        score: "+2",
                        image: leftWristPosition2(mode),
                    },
                    {
                        label: WristPositionRadio3,
                        name: "leftWristPosition",
                        value: "3.1",
                        score: "+3",
                        image: leftWristPosition3(mode),
                    },
                    {
                        label: WristPositionRadio4,
                        name: "leftWristPosition",
                        value: "3.2",
                        score: "+3",
                        image: leftWristPosition4(mode),
                    },
                ],
                checkboxItems: [
                    {
                        label: WristPositionCheckbox1,
                        name: "leftWristPositionCheckbox1",
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
                    { label: WristTwistRadio1, value: "1", score: "+1", name: "leftWristTwist" },
                    { label: WristTwistRadio2, value: "2", score: "+2", name: "leftWristTwist" },
                ],
                itemsType: FormControlTypeEnum.radio,
            },
            {
                title: MuscleUseScore,
                items: [{ label: MuscleUseScoreCheckbox, value: "1", score: "+1", name: "leftMuscleUseScore" }],
                itemsType: FormControlTypeEnum.checkbox,
            },
            {
                title: ForceLoadScore,
                items: [
                    { label: ForceLoadScoreRadio1, value: "0", score: "+0", name: "leftForceLoadScore" },
                    { label: ForceLoadScoreRadio2, value: "1", score: "+1", name: "leftForceLoadScore" },
                    { label: ForceLoadScoreRadio3, value: "2", score: "+2", name: "leftForceLoadScore" },
                    { label: ForceLoadScoreRadio4, value: "3", score: "+3", name: "leftForceLoadScore" },
                ],
                itemsType: FormControlTypeEnum.radio,
            },
        ],
    };
};
