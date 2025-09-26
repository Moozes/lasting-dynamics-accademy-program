/* eslint-disable no-underscore-dangle */
import * as jotai from "jotai";

import { useTheme } from "@mui/material";

import { useTranslationV2 } from "ui";

import { RAMPAssessmentLimitsEnum } from "@app-types/index";
import {
    backPosture1,
    backPosture2,
    backPosture3,
    backPosture4,
    backPosture5,
    backPosture6,
    legFootSpace1,
    legFootSpace2,
    postureOfHead1,
    postureOfHead2,
    postureOfHead3,
    postureOfHead4,
    upperArmPosture1,
    upperArmPosture2,
    wristPosture1,
    wristPosture2,
} from "@features/RAMP/assets";
import { rampLimitDisplayAtom } from "@features/RAMP/atoms";
import { FormCardProps } from "@features/RAMP/types";

export const usePosturesFormData = () => {
    const t = useTranslationV2();
    const {
        palette: { mode },
    } = useTheme();
    const rampLimitDisplay = jotai.useAtomValue(rampLimitDisplayAtom);
    const right_hand = t("right_hand");
    const left_hand = t("left_hand");
    const right_arm = t("right_arm");
    const left_arm = t("left_arm");

    const _4_hours_or_more = t("ramp_assessments.labels.4_hours_or_more");
    const _3_to_4_hours = t("ramp_assessments.labels.3_to_4_hours");
    const _2_to_3_hours = t("ramp_assessments.labels.2_to_3_hours");
    const _1_to_2_hours = t("ramp_assessments.labels.1_to_2_hours");
    const _30_min_to_1_hour = t("ramp_assessments.labels.30_min_to_1_hour");
    const _5_min_to_30_min = t("ramp_assessments.labels.5_min_to_30_min");
    const _less_then_5_min = t("ramp_assessments.labels.less_then_5_min");

    const _50_percent_or_more = t("ramp_assessments.labels.50_percent_or_more");
    const _37_to_50_percent = t("ramp_assessments.labels.37_to_50_percent");
    const _25_to_37_percent = t("ramp_assessments.labels.25_to_37_percent");
    const _12_to_25_percent = t("ramp_assessments.labels.12_to_25_percent");
    const _6_to_12_percent = t("ramp_assessments.labels.6_to_12_percent");
    const _1_to_6_percent = t("ramp_assessments.labels.1_to_6_percent");
    const _less_then_1_percent = t("ramp_assessments.labels.less_then_1_percent");

    let label1 = "";
    let label2 = "";
    let label3 = "";
    let label4 = "";
    let label5 = "";
    let label6 = "";
    let label7 = "";

    if (rampLimitDisplay === RAMPAssessmentLimitsEnum.TIME) {
        label1 = _4_hours_or_more;
        label2 = _3_to_4_hours;
        label3 = _2_to_3_hours;
        label4 = _1_to_2_hours;
        label5 = _30_min_to_1_hour;
        label6 = _5_min_to_30_min;
        label7 = _less_then_5_min;
    } else if (rampLimitDisplay === RAMPAssessmentLimitsEnum.PERCENTAGE) {
        label1 = _50_percent_or_more;
        label2 = _37_to_50_percent;
        label3 = _25_to_37_percent;
        label4 = _12_to_25_percent;
        label5 = _6_to_12_percent;
        label6 = _1_to_6_percent;
        label7 = _less_then_1_percent;
    }

    const data: FormCardProps[] = [
        {
            title: t("ramp_assessments.postures_form.postures_1_title"),
            description: t("ramp_assessments.postures_form.postures_1_description"),
            images: [postureOfHead1(mode), postureOfHead2(mode), postureOfHead3(mode)],
            commentInputName: "postures_1_comment",
            dialogText: t("ramp_assessments.postures_form.postures_1_dialog_text"),
            forms: {
                form2Title: "",
                form2Name: "postures_1",
                form2Choices: [
                    {
                        label: label1,
                        displayValue: "7",
                        actualValue: "7",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label2,
                        displayValue: "5",
                        actualValue: "5",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label3,
                        displayValue: "3",
                        actualValue: "3",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label4,
                        displayValue: "2",
                        actualValue: "2",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: label5,
                        displayValue: "1",
                        actualValue: "1",
                        status: "normal",
                        firstStatus: true,
                    },
                    {
                        label: label6,
                        displayValue: "0.5",
                        actualValue: "0.5",
                        status: "normal",
                        firstStatus: false,
                    },
                    {
                        label: label7,
                        displayValue: "0",
                        actualValue: "0",
                        status: "normal",
                        firstStatus: false,
                    },
                ],
            },
        },
        {
            title: t("ramp_assessments.postures_form.postures_2_title"),
            description: t("ramp_assessments.postures_form.postures_2_description"),
            images: [postureOfHead4(mode)],
            commentInputName: "postures_2_comment",
            dialogText: t("ramp_assessments.postures_form.postures_2_dialog_text"),
            forms: {
                form2Title: "",
                form2Name: "postures_2",
                form2Choices: [
                    {
                        label: label1,
                        displayValue: "10",
                        actualValue: "10",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label2,
                        displayValue: "6",
                        actualValue: "6",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label3,
                        displayValue: "3",
                        actualValue: "3",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label4,
                        displayValue: "1.5",
                        actualValue: "1.5",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: label5,
                        displayValue: "0",
                        actualValue: "0",
                        status: "normal",
                        firstStatus: true,
                    },
                ],
            },
        },
        {
            title: t("ramp_assessments.postures_form.postures_3_title"),
            description: t("ramp_assessments.postures_form.postures_3_description"),
            images: [backPosture1(mode), backPosture2(mode)],
            commentInputName: "postures_3_comment",
            dialogText: t("ramp_assessments.postures_form.postures_3_dialog_text"),
            forms: {
                form2Title: "",
                form2Name: "postures_3",
                form2Choices: [
                    {
                        label: label1,
                        displayValue: "7",
                        actualValue: "7",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label2,
                        displayValue: "5",
                        actualValue: "5",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label3,
                        displayValue: "3",
                        actualValue: "3",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label4,
                        displayValue: "2",
                        actualValue: "2",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: label5,
                        displayValue: "1",
                        actualValue: "1",
                        status: "normal",
                        firstStatus: true,
                    },
                    {
                        label: label6,
                        displayValue: "0",
                        actualValue: "0.2",
                        status: "normal",
                        firstStatus: false,
                    },
                    {
                        label: label7,
                        displayValue: "0",
                        actualValue: "0.1",
                        status: "normal",
                        firstStatus: false,
                    },
                ],
            },
        },
        {
            title: t("ramp_assessments.postures_form.postures_4_title"),
            description: t("ramp_assessments.postures_form.postures_4_description"),
            images: [backPosture3(mode), backPosture4(mode), backPosture5(mode), backPosture6(mode)],
            commentInputName: "postures_4_comment",
            dialogText: t("ramp_assessments.postures_form.postures_4_dialog_text"),
            forms: {
                form2Title: "",
                form2Name: "postures_4",
                form2Choices: [
                    {
                        label: label1,
                        displayValue: "10",
                        actualValue: "10",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label2,
                        displayValue: "7",
                        actualValue: "7",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label3,
                        displayValue: "5",
                        actualValue: "5",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label4,
                        displayValue: "3",
                        actualValue: "3",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label5,
                        displayValue: "2",
                        actualValue: "2",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: label6,
                        displayValue: "1",
                        actualValue: "1",
                        status: "normal",
                        firstStatus: true,
                    },
                    {
                        label: label7,
                        displayValue: "0",
                        actualValue: "0",
                        status: "normal",
                        firstStatus: false,
                    },
                ],
            },
        },
        {
            title: t("ramp_assessments.postures_form.postures_5_title"),
            description: t("ramp_assessments.postures_form.postures_5_description"),
            images: [upperArmPosture1(mode)],
            commentInputName: "postures_5_comment",
            dialogText: t("ramp_assessments.postures_form.postures_5_dialog_text"),
            forms: {
                form1Title: left_arm,
                form2Title: right_arm,
                form1Name: "postures_5_left",
                form2Name: "postures_5_right",
                form1Choices: [
                    {
                        label: label1,
                        displayValue: "10",
                        actualValue: "10",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label2,
                        displayValue: "7",
                        actualValue: "7",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label3,
                        displayValue: "5",
                        actualValue: "5",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label4,
                        displayValue: "3",
                        actualValue: "3",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label5,
                        displayValue: "2",
                        actualValue: "2",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: label6,
                        displayValue: "1",
                        actualValue: "1",
                        status: "normal",
                        firstStatus: true,
                    },
                    {
                        label: label7,
                        displayValue: "0",
                        actualValue: "0",
                        status: "normal",
                        firstStatus: false,
                    },
                ],
                form2Choices: [
                    {
                        label: label1,
                        displayValue: "10",
                        actualValue: "10",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label2,
                        displayValue: "7",
                        actualValue: "7",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label3,
                        displayValue: "5",
                        actualValue: "5",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label4,
                        displayValue: "3",
                        actualValue: "3",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label5,
                        displayValue: "2",
                        actualValue: "2",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: label6,
                        displayValue: "1",
                        actualValue: "1",
                        status: "normal",
                        firstStatus: true,
                    },
                    {
                        label: label7,
                        displayValue: "0",
                        actualValue: "0",
                        status: "normal",
                        firstStatus: false,
                    },
                ],
            },
        },
        {
            title: t("ramp_assessments.postures_form.postures_6_title"),
            description: t("ramp_assessments.postures_form.postures_6_description"),
            images: [upperArmPosture2(mode)],
            commentInputName: "postures_6_comment",
            dialogText: t("ramp_assessments.postures_form.postures_6_dialog_text"),
            forms: {
                form1Title: left_hand,
                form2Title: right_hand,
                form1Name: "postures_6_left",
                form2Name: "postures_6_right",
                form1Choices: [
                    {
                        label: label1,
                        displayValue: "10",
                        actualValue: "10",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label2,
                        displayValue: "7",
                        actualValue: "7",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label3,
                        displayValue: "5",
                        actualValue: "5",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label4,
                        displayValue: "3",
                        actualValue: "3",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label5,
                        displayValue: "2",
                        actualValue: "2",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: label6,
                        displayValue: "1",
                        actualValue: "1",
                        status: "normal",
                        firstStatus: true,
                    },
                    {
                        label: label7,
                        displayValue: "0",
                        actualValue: "0",
                        status: "normal",
                        firstStatus: false,
                    },
                ],
                form2Choices: [
                    {
                        label: label1,
                        displayValue: "10",
                        actualValue: "10",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label2,
                        displayValue: "7",
                        actualValue: "7",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label3,
                        displayValue: "5",
                        actualValue: "5",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label4,
                        displayValue: "3",
                        actualValue: "3",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label5,
                        displayValue: "2",
                        actualValue: "2",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: label6,
                        displayValue: "1",
                        actualValue: "1",
                        status: "normal",
                        firstStatus: true,
                    },
                    {
                        label: label7,
                        displayValue: "0",
                        actualValue: "0",
                        status: "normal",
                        firstStatus: false,
                    },
                ],
            },
        },
        {
            title: t("ramp_assessments.postures_form.postures_7_title"),
            description: t("ramp_assessments.postures_form.postures_7_description"),
            images: [wristPosture1(mode), wristPosture2(mode)],
            commentInputName: "postures_7_comment",
            dialogText: t("ramp_assessments.postures_form.postures_7_dialog_text"),
            forms: {
                form1Title: left_hand,
                form2Title: right_hand,
                form1Name: "postures_7_left",
                form2Name: "postures_7_right",
                form1Choices: [
                    {
                        label: label1,
                        displayValue: "7",
                        actualValue: "7",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label2,
                        displayValue: "5",
                        actualValue: "5",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label3,
                        displayValue: "3",
                        actualValue: "3",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label4,
                        displayValue: "2",
                        actualValue: "2",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: label5,
                        displayValue: "1",
                        actualValue: "1",
                        status: "normal",
                        firstStatus: true,
                    },
                    {
                        label: label6,
                        displayValue: "0",
                        actualValue: "0.2",
                        status: "normal",
                        firstStatus: false,
                    },
                    {
                        label: label7,
                        displayValue: "0",
                        actualValue: "0.1",
                        status: "normal",
                        firstStatus: false,
                    },
                ],
                form2Choices: [
                    {
                        label: label1,
                        displayValue: "7",
                        actualValue: "7",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label2,
                        displayValue: "5",
                        actualValue: "5",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label3,
                        displayValue: "3",
                        actualValue: "3",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label4,
                        displayValue: "2",
                        actualValue: "2",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: label5,
                        displayValue: "1",
                        actualValue: "1",
                        status: "normal",
                        firstStatus: true,
                    },
                    {
                        label: label6,
                        displayValue: "0",
                        actualValue: "0.2",
                        status: "normal",
                        firstStatus: false,
                    },
                    {
                        label: label7,
                        displayValue: "0",
                        actualValue: "0.1",
                        status: "normal",
                        firstStatus: false,
                    },
                ],
            },
        },
        {
            title: t("ramp_assessments.postures_form.postures_8_title"),
            description: t("ramp_assessments.postures_form.postures_8_description"),
            images: [legFootSpace1(mode), legFootSpace2(mode)],
            commentInputName: "postures_8_comment",
            dialogText: t("ramp_assessments.postures_form.postures_8_dialog_text"),
            forms: {
                form2Title: "",
                form2Name: "postures_8",
                form2Choices: [
                    {
                        label: label1,
                        displayValue: "3",
                        actualValue: "3",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: label2,
                        displayValue: "2",
                        actualValue: "2",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: label3,
                        displayValue: "1.5",
                        actualValue: "1.5",
                        status: "medium",
                        firstStatus: false,
                    },
                    {
                        label: label4,
                        displayValue: "1",
                        actualValue: "1",
                        status: "medium",
                        firstStatus: false,
                    },
                    {
                        label: label5,
                        displayValue: "0.5",
                        actualValue: "0.5",
                        status: "normal",
                        firstStatus: true,
                    },
                    {
                        label: label6,
                        displayValue: "0",
                        actualValue: "0.2",
                        status: "normal",
                        firstStatus: false,
                    },
                    {
                        label: label7,
                        displayValue: "0",
                        actualValue: "0.1",
                        status: "normal",
                        firstStatus: false,
                    },
                ],
            },
        },
    ];
    return { data };
};
