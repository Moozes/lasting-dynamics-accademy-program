import { useTheme } from "@mui/material";

import { useTranslationV2 } from "ui";

import { FormControlTypeEnum, ImagesFormCardProps, TextOnlyFormCardProps } from "@app-types/index";
import {
    legs1,
    legs2,
    legs3,
    legs4,
    neckPosition1,
    neckPosition2,
    neckPosition3,
    trunkPosition1,
    trunkPosition2,
    trunkPosition3,
    trunkPosition4,
    trunkPosition5,
    trunkPosition6,
} from "@features/REBA/assets";
import { LegsFormCardProps } from "@features/REBA/types";

type FormatedData = {
    imagesFormCards: ImagesFormCardProps[];
    textOnlyFormCards: TextOnlyFormCardProps[];
    legsFormCard: LegsFormCardProps;
};

export const useFormatedData = (): FormatedData => {
    const t = useTranslationV2();
    const {
        palette: { mode },
    } = useTheme();
    const locateNeckPosition = t("reba_assessments.locate_neck_position");
    const neckPositionRadio1 = t("reba_assessments.between_10°_and_20°");
    const neckPositionRadio2 = t("reba_assessments.more_than_+20°");
    const neckPositionRadio3 = t("reba_assessments.in_extension");
    const neckPositionAdjustRadio1 = t("reba_assessments.neck_is_twisted");
    const neckPositionAdjustRadio2 = t("reba_assessments.neck_is_side_bending");

    const locateTrunkPosition = t("reba_assessments.locate_trunk_position");
    const trunkPositionRadio1 = "0°";
    const trunkPositionRadio2 = t("reba_assessments.from_0°_to_-20°");
    const trunkPositionRadio3 = t("reba_assessments.from_0°_to_20°");
    const trunkPositionRadio4 = t("reba_assessments.from_20°_to_60°");
    const trunkPositionRadio5 = "> 20°";
    const trunkPositionRadio6 = "+ 60°";
    const trunkPositionAdjustRadio1 = t("reba_assessments.trunk_is_twisted");
    const trunkPositionAdjustRadio2 = t("reba_assessments.trunk_is_side_bending");

    const legs = t("legs");
    const legsRadio1 = t("reba_assessments.both_legs_down");
    const legsRadio2 = t("reba_assessments.one_leg_raised");
    const legsAdjustRadio1 = t("reba_assessments.from_30°_to_60°");
    const legsAdjustRadio2 = "+60°";

    const forceLoadScore = t("reba_assessments.force_load_score");
    const forceLoadScoreRadio1 = t("reba_assessments.load_<_11_lbs");
    const forceLoadScoreRadio2 = t("reba_assessments.11_lbs_<_load_<_22_lbs");
    const forceLoadScoreRadio3 = t("reba_assessments.load_>_22_lbs");
    const forceLoadScoreAdjustCheckbox = t("reba_assessments.shock_or_rapid_build_up_of_force");
    return {
        imagesFormCards: [
            {
                title: locateNeckPosition,
                radioItems: [
                    {
                        label: neckPositionRadio1,
                        name: "neckPosition",
                        value: "1",
                        score: "+1",
                        image: neckPosition1(mode),
                    },
                    {
                        label: neckPositionRadio2,
                        name: "neckPosition",
                        value: "2.1",
                        score: "+2",
                        image: neckPosition2(mode),
                    },
                    {
                        label: neckPositionRadio3,
                        name: "neckPosition",
                        value: "2.2",
                        score: "+2",
                        image: neckPosition3(mode),
                    },
                ],
                radioButtonItems: [
                    {
                        label: neckPositionAdjustRadio1,
                        name: "neckIsTwistedOrSideBending",
                        score: "+1",
                        value: "1.1",
                    },
                    {
                        label: neckPositionAdjustRadio2,
                        name: "neckIsTwistedOrSideBending",
                        score: "+1",
                        value: "1.2",
                    },
                ],
            },
            {
                title: locateTrunkPosition,
                radioItems: [
                    {
                        label: trunkPositionRadio1,
                        name: "trunkPosition",
                        value: "1",
                        score: "+1",
                        image: trunkPosition1(mode),
                    },
                    {
                        label: trunkPositionRadio2,
                        name: "trunkPosition",
                        value: "2.1",
                        score: "+2",
                        image: trunkPosition2(mode),
                    },
                    {
                        label: trunkPositionRadio3,
                        name: "trunkPosition",
                        value: "2.2",
                        score: "+2",
                        image: trunkPosition3(mode),
                    },
                    {
                        label: trunkPositionRadio4,
                        name: "trunkPosition",
                        value: "3.1",
                        score: "+3",
                        image: trunkPosition4(mode),
                    },
                    {
                        label: trunkPositionRadio5,
                        name: "trunkPosition",
                        value: "3.2",
                        score: "+3",
                        image: trunkPosition5(mode),
                    },
                    {
                        label: trunkPositionRadio6,
                        name: "trunkPosition",
                        value: "4",
                        score: "+4",
                        image: trunkPosition6(mode),
                    },
                ],
                radioButtonItems: [
                    {
                        label: trunkPositionAdjustRadio1,
                        name: "trunkIsTwistedOrSideBending",
                        score: "+1",
                        value: "1.1",
                    },
                    {
                        label: trunkPositionAdjustRadio2,
                        name: "trunkIsTwistedOrSideBending",
                        score: "+1",
                        value: "1.2",
                    },
                ],
            },
        ],
        textOnlyFormCards: [
            {
                title: forceLoadScore,
                items: [
                    { label: forceLoadScoreRadio1, value: "0", score: "+0", name: "forceLoadScore" },
                    { label: forceLoadScoreRadio2, value: "1", score: "+1", name: "forceLoadScore" },
                    { label: forceLoadScoreRadio3, value: "2", score: "+2", name: "forceLoadScore" },
                ],
                itemsType: FormControlTypeEnum.radio,
                adjustCheckboxItems: [
                    {
                        label: forceLoadScoreAdjustCheckbox,
                        name: "forceLoadScoreCheckbox",
                        score: "+1",
                    },
                ],
            },
        ],
        legsFormCard: {
            title: legs,
            mainRadioItems: [
                {
                    label: legsRadio1,
                    name: "legsDownOrRaised",
                    value: "1",
                    score: "+1",
                    image: legs1(mode),
                },
                {
                    label: legsRadio2,
                    name: "legsDownOrRaised",
                    value: "2",
                    score: "+2",
                    image: legs2(mode),
                },
            ],
            adjustRadioItems: [
                {
                    label: legsAdjustRadio1,
                    name: "legsAngle",
                    value: "1",
                    score: "+1",
                    image: legs3(mode),
                },
                {
                    label: legsAdjustRadio2,
                    name: "legsAngle",
                    value: "2",
                    score: "+2",
                    image: legs4(mode),
                },
            ],
        },
    };
};
