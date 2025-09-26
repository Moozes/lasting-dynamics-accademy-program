import { useTheme } from "@mui/material";

import { useTranslationV2 } from "ui";

import { FormControlTypeEnum, ImagesFormCardProps, TextOnlyFormCardProps } from "@app-types/index";
import {
    headAndNeck1,
    headAndNeck2,
    headAndNeck3,
    headAndNeck4,
    trunk1,
    trunk2,
    trunk3,
    trunk4,
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
    const HeadAndNeck = t("rula_assessments.head_and_neck");
    const HeadAndNeckRadio1 = t("rula_assessments.between_0°_and_10°");
    const HeadAndNeckRadio2 = t("rula_assessments.between_10°_and_20°");
    const HeadAndNeckRadio3 = t("rula_assessments.more_than_20°");
    const HeadAndNeckRadio4 = t("rula_assessments.any_extension");
    const HeadAndNeckCheckbox1 = t("rula_assessments.neck_is_twisted");
    const HeadAndNeckCheckbox2 = t("rula_assessments.neck_is_side_bending");

    const Trunk = t("trunk");
    const TrunkRadio1 = t("rula_assessments.between_0°_and_10°");
    const TrunkRadio2 = t("rula_assessments.between_10°_and_20°");
    const TrunkRadio3 = t("rula_assessments.more_than_20°");
    const TrunkRadio4 = t("rula_assessments.any_extension");
    const TrunkCheckbox1 = t("rula_assessments.trunk_is_twisted");
    const TrunkCheckbox2 = t("rula_assessments.trunk_is_side_bending");

    const Legs = t("legs");
    const LegsRadio1 = t("rula_assessments.legs_and_feet_are_supported");
    const LegsRadio2 = t("rula_assessments.legs_and_feet_are_not_supported");

    const MuscleUseScore = t("rula_assessments.muscle_use_score");
    const MuscleUseScoreCheckbox = t("rula_assessments.muscle_use_score_label");

    const ForceLoadScore = t("rula_assessments.force/load_score");
    const ForceLoadScoreRadio1 = t("rula_assessments.load_<_4.4lbs.(intermittent)");
    const ForceLoadScoreRadio2 = t("rula_assessments.load_4.4_to_22_lbs.(intermittent)");
    const ForceLoadScoreRadio3 = t("rula_assessments.load_4.4_to_22_lbs.(static_or_repeated)");
    const ForceLoadScoreRadio4 = t("rula_assessments.more_than_22_lbs.or_repeated_or_shocks");

    return {
        imagesFormCards: [
            {
                title: HeadAndNeck,
                radioItems: [
                    {
                        label: HeadAndNeckRadio1,
                        name: "headAndNeck",
                        value: "1",
                        score: "+1",
                        image: headAndNeck1(mode),
                    },
                    {
                        label: HeadAndNeckRadio2,
                        name: "headAndNeck",
                        value: "2",
                        score: "+2",
                        image: headAndNeck2(mode),
                    },
                    {
                        label: HeadAndNeckRadio3,
                        name: "headAndNeck",
                        value: "3",
                        score: "+3",
                        image: headAndNeck3(mode),
                    },
                    {
                        label: HeadAndNeckRadio4,
                        name: "headAndNeck",
                        value: "4",
                        score: "+4",
                        image: headAndNeck4(mode),
                    },
                ],
                checkboxItems: [
                    {
                        label: HeadAndNeckCheckbox1,
                        name: "headAndNeckCheckbox1",
                        score: "+1",
                    },
                    {
                        label: HeadAndNeckCheckbox2,
                        name: "headAndNeckCheckbox2",
                        score: "+1",
                    },
                ],
            },
            {
                title: Trunk,
                radioItems: [
                    {
                        label: TrunkRadio1,
                        name: "trunk",
                        value: "1",
                        score: "+1",
                        image: trunk1(mode),
                    },
                    {
                        label: TrunkRadio2,
                        name: "trunk",
                        value: "2",
                        score: "+2",
                        image: trunk2(mode),
                    },
                    {
                        label: TrunkRadio3,
                        name: "trunk",
                        value: "3",
                        score: "+3",
                        image: trunk3(mode),
                    },
                    {
                        label: TrunkRadio4,
                        name: "trunk",
                        value: "4",
                        score: "+4",
                        image: trunk4(mode),
                    },
                ],
                checkboxItems: [
                    {
                        label: TrunkCheckbox1,
                        name: "trunkCheckbox1",
                        score: "+1",
                    },
                    {
                        label: TrunkCheckbox2,
                        name: "trunkCheckbox2",
                        score: "+1",
                    },
                ],
            },
        ],
        textOnlyFormCards: [
            {
                title: Legs,
                items: [
                    { label: LegsRadio1, value: "1", score: "+1", name: "legs" },
                    { label: LegsRadio2, value: "2", score: "+2", name: "legs" },
                ],
                itemsType: FormControlTypeEnum.radio,
            },
            {
                title: MuscleUseScore,
                items: [
                    { label: MuscleUseScoreCheckbox, value: "1", score: "+1", name: "headTrunkAndLegsMuscleUseScore" },
                ],
                itemsType: FormControlTypeEnum.checkbox,
            },
            {
                title: ForceLoadScore,
                items: [
                    { label: ForceLoadScoreRadio1, value: "0", score: "+0", name: "headTrunkAndLegsForceLoadScore" },
                    { label: ForceLoadScoreRadio2, value: "1", score: "+1", name: "headTrunkAndLegsForceLoadScore" },
                    { label: ForceLoadScoreRadio3, value: "2", score: "+2", name: "headTrunkAndLegsForceLoadScore" },
                    { label: ForceLoadScoreRadio4, value: "3", score: "+3", name: "headTrunkAndLegsForceLoadScore" },
                ],
                itemsType: FormControlTypeEnum.radio,
            },
        ],
    };
};
