import { useEffect } from "react";
import { useFormikContext } from "formik";

import { useTheme } from "@mui/material";

import { useTranslationV2 } from "ui";

import {
    FormControlTypeEnum,
    ImagesFormCardProps,
    REBAAssessmentDetail as AssessmentDetail,
    TextOnlyFormCardProps,
} from "@app-types/index";
import {
    lowerArmPosition1,
    lowerArmPosition2,
    lowerArmPosition3,
    upperArmPosition1,
    upperArmPosition2,
    upperArmPosition3,
    upperArmPosition4,
    upperArmPosition5,
    wristPosition1,
    wristPosition2,
    wristPosition3,
} from "@features/REBA/assets";

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
    const locateUpperArmPosition = t("reba_assessments.locate_upper_arm_position");
    const upperArmPositionRadio1 = t("reba_assessments.between_-20°_and_20°");
    const upperArmPositionRadio2 = t("reba_assessments.20°_in_extension");
    const upperArmPositionRadio3 = t("reba_assessments.flexion_between_20°_and_45°");
    const upperArmPositionRadio4 = t("reba_assessments.flexion_between_45°_and_90°");
    const upperArmPositionRadio5 = t("reba_assessments.flexion_>_90°");
    const upperArmPositionCheckbox1 = t("reba_assessments.shoulder_is_Raised");
    const upperArmPositionCheckbox2 = t("reba_assessments.upper_arm_is_abducted");
    const upperArmPositionCheckbox3 = t("reba_assessments.arm_supported_or_person_is_leaning");

    const locateLowerArmPosition = t("reba_assessments.locate_lower_arm_position");
    const lowerArmPositionRadio1 = "60° - 100°";
    const lowerArmPositionRadio2 = "0° - 60°";
    const lowerArmPositionRadio3 = "100°+";

    const locateWristPosition = t("reba_assessments.locate_wrist_position");
    const wristPositionRadio1 = t("reba_assessments.15°_of_flexion_extension");
    const wristPositionRadio2 = t("reba_assessments.>_15°_of_flexion_extension");
    const wristPositionRadio3 = t("reba_assessments.>_15°_of_flexion_extension");
    const wristPositionCheckbox = t("reba_assessments.wrist_is_bent_from_midline_or_twisted");

    const couplingScore = t("reba_assessments.coupling_score");
    const couplingScoreRadio1 = t("reba_assessments.coupling_score_1");
    const couplingScoreRadio2 = t("reba_assessments.coupling_score_2");
    const couplingScoreRadio3 = t("reba_assessments.coupling_score_3");
    const couplingScoreRadio4 = t("reba_assessments.coupling_score_4");

    const activityScore = t("reba_assessments.activity_score");
    const activityScoreCheckbox1 = t("reba_assessments.activity_score_1");
    const activityScoreCheckbox2 = t("reba_assessments.activity_score_2");
    const activityScoreCheckbox3 = t("reba_assessments.activity_score_3");

    // prevent selecting upperArmPosition = 1, and upperArmPositionCheckbox3 = true
    useEffect(() => {
        if (values.upperArmPosition === "1") setFieldValue("upperArmPositionCheckbox3", false);
    }, [values, setFieldValue]);

    return {
        imagesFormCards: [
            {
                title: locateUpperArmPosition,
                radioItems: [
                    {
                        label: upperArmPositionRadio1,
                        name: "upperArmPosition",
                        value: "1",
                        score: "+1",
                        image: upperArmPosition1(mode),
                    },
                    {
                        label: upperArmPositionRadio2,
                        name: "upperArmPosition",
                        value: "2.1",
                        score: "+2",
                        image: upperArmPosition2(mode),
                    },
                    {
                        label: upperArmPositionRadio3,
                        name: "upperArmPosition",
                        value: "2.2",
                        score: "+2",
                        image: upperArmPosition3(mode),
                    },
                    {
                        label: upperArmPositionRadio4,
                        name: "upperArmPosition",
                        value: "3",
                        score: "+3",
                        image: upperArmPosition4(mode),
                    },
                    {
                        label: upperArmPositionRadio5,
                        name: "upperArmPosition",
                        value: "4",
                        score: "+4",
                        image: upperArmPosition5(mode),
                    },
                ],
                checkboxItems: [
                    {
                        label: upperArmPositionCheckbox1,
                        name: "upperArmPositionCheckbox1",
                        score: "+1",
                    },
                    {
                        label: upperArmPositionCheckbox2,
                        name: "upperArmPositionCheckbox2",
                        score: "+1",
                    },
                    {
                        label: upperArmPositionCheckbox3,
                        name: "upperArmPositionCheckbox3",
                        score: "-1",
                        // prevent selecting upperArmPosition = 1, and upperArmPositionCheckbox3 = true
                        disabled: values.upperArmPosition === "1",
                    },
                ],
            },
            {
                title: locateLowerArmPosition,
                radioItems: [
                    {
                        label: lowerArmPositionRadio1,
                        name: "lowerArmPosition",
                        value: "1",
                        score: "+1",
                        image: lowerArmPosition1(mode),
                    },
                    {
                        label: lowerArmPositionRadio2,
                        name: "lowerArmPosition",
                        value: "2.1",
                        score: "+2",
                        image: lowerArmPosition2(mode),
                    },
                    {
                        label: lowerArmPositionRadio3,
                        name: "lowerArmPosition",
                        value: "2.2",
                        score: "+2",
                        image: lowerArmPosition3(mode),
                    },
                ],
            },
            {
                title: locateWristPosition,
                radioItems: [
                    {
                        label: wristPositionRadio1,
                        name: "wristPosition",
                        value: "1",
                        score: "+1",
                        image: wristPosition1(mode),
                    },
                    {
                        label: wristPositionRadio2,
                        name: "wristPosition",
                        value: "2.1",
                        score: "+2",
                        image: wristPosition2(mode),
                    },
                    {
                        label: wristPositionRadio3,
                        name: "wristPosition",
                        value: "2.2",
                        score: "+2",
                        image: wristPosition3(mode),
                    },
                ],
                checkboxItems: [
                    {
                        label: wristPositionCheckbox,
                        name: "wristPositionCheckbox",
                        score: "+1",
                    },
                ],
            },
        ],
        textOnlyFormCards: [
            {
                title: couplingScore,
                items: [
                    { label: couplingScoreRadio1, value: "0", score: "+0", name: "couplingScore" },
                    { label: couplingScoreRadio2, value: "1", score: "+1", name: "couplingScore" },
                    { label: couplingScoreRadio3, value: "2", score: "+2", name: "couplingScore" },
                    { label: couplingScoreRadio4, value: "3", score: "+3", name: "couplingScore" },
                ],
                itemsType: FormControlTypeEnum.radio,
            },
            {
                title: activityScore,
                items: [
                    { label: activityScoreCheckbox1, value: "1", score: "+1", name: "activityScoreCheckbox1" },
                    { label: activityScoreCheckbox2, value: "1", score: "+1", name: "activityScoreCheckbox2" },
                    { label: activityScoreCheckbox3, value: "1", score: "+1", name: "activityScoreCheckbox3" },
                ],
                itemsType: FormControlTypeEnum.checkbox,
            },
        ],
    };
};
