/* eslint-disable no-underscore-dangle */
import { useAtomValue } from "jotai";

import { useTheme } from "@mui/material";

import { useTranslationV2 } from "ui";

import { RAMPAssessmentLimitsEnum } from "@app-types/index";
import { movementsOfArm, movementsOfWrist, typoOfGrip1, typoOfGrip2, typoOfGrip3 } from "@features/RAMP/assets";
import { rampLimitDisplayAtom } from "@features/RAMP/atoms";
import { FormCardProps } from "@features/RAMP/types";

export const useMovementsAndRepetitionFormFormData = () => {
    const t = useTranslationV2();
    const {
        palette: { mode },
    } = useTheme();
    const rampLimitDisplay = useAtomValue(rampLimitDisplayAtom);
    const right_hand = t("right_hand");
    const left_hand = t("left_hand");
    const right_arm = t("right_arm");
    const left_arm = t("left_arm");
    const constant_movements_mainly_without_pause = t(
        "ramp_assessments.labels.constant_movements_mainly_without_pause"
    );
    const frequent_movements_with_some_pauses = t("ramp_assessments.labels.frequent_movements_with_some_pauses");
    const varied_movements = t("ramp_assessments.labels.varied_movements");
    const up_to_5_times_per_minute = t("ramp_assessments.labels.up_to_5_times_per_minute");
    const more_than_20_times_per_minute = t("ramp_assessments.labels.more_than_x_times_per_y", {
        more_than: t("more_than"),
        x: 20,
        times: t("times"),
        per: t("per"),
        y: t("minutes_one"),
    });
    const _11_20_times_per_minute = t("ramp_assessments.labels.x_to_y_times_per_z", {
        x: 11,
        y: 20,
        times: t("times"),
        per: t("per"),
        z: t("minutes_one"),
    });
    const _6_10_times_per_minute = t("ramp_assessments.labels.x_to_y_times_per_z", {
        x: 6,
        y: 10,
        times: t("times"),
        per: t("per"),
        z: t("minutes_one"),
    });
    const _101_200_times_per_day = t("ramp_assessments.labels.x_to_y_times_per_z", {
        x: 101,
        y: 200,
        times: t("times"),
        per: t("per"),
        z: t("day"),
    });
    const _50_100_times_per_day = t("ramp_assessments.labels.x_to_y_times_per_z", {
        x: 50,
        y: 100,
        times: t("times"),
        per: t("per"),
        z: t("day"),
    });
    const less_than_50_times_per_day = t("ramp_assessments.labels.less_than_50_times_per_day");
    const more_than_200_minutes_per_day = t("ramp_assessments.labels.more_than_x_times_per_y", {
        more_than: t("more_than"),
        x: 200,
        times: t("minutes_one"),
        per: t("per"),
        y: t("day"),
    });
    const _30_seconds_or_less_per_10_minutes_work = t("ramp_assessments.labels.30_seconds_or_less_per_10_minutes_work");
    const between_30_90_seconds_per_10_minutes_work = t(
        "ramp_assessments.labels.between_30_90_seconds_per_10_minutes_work"
    );
    const _90_seconds_or_more_per_10_minutes_work = t("ramp_assessments.labels.90_seconds_or_more_per_10_minutes_work");

    const _every_4_hours_or_less_frequently = t("ramp_assessments.labels.every_4_hours_or_less_frequently");
    const _3_to_4_hours = t("ramp_assessments.labels.3_to_4_hours");
    const _2_to_3_hours = t("ramp_assessments.labels.2_to_3_hours");
    const _1_to_2_hours = t("ramp_assessments.labels.1_to_2_hours");

    const _every_50_percent_or_less_frequently = t("ramp_assessments.labels.every_50_percent_or_less_frequently");
    const _37_to_50_percent = t("ramp_assessments.labels.37_to_50_percent");
    const _25_to_37_percent = t("ramp_assessments.labels.25_to_37_percent");
    const _12_to_25_percent = t("ramp_assessments.labels.12_to_25_percent");

    let question_25_label1 = "";
    let question_25_label2 = "";
    let question_25_label3 = "";
    let question_25_label4 = "";

    if (rampLimitDisplay === RAMPAssessmentLimitsEnum.TIME) {
        question_25_label1 = _every_4_hours_or_less_frequently;
        question_25_label2 = _3_to_4_hours;
        question_25_label3 = _2_to_3_hours;
        question_25_label4 = _1_to_2_hours;
    } else if (rampLimitDisplay === RAMPAssessmentLimitsEnum.PERCENTAGE) {
        question_25_label1 = _every_50_percent_or_less_frequently;
        question_25_label2 = _37_to_50_percent;
        question_25_label3 = _25_to_37_percent;
        question_25_label4 = _12_to_25_percent;
    }

    const data: FormCardProps[] = [
        {
            title: t("ramp_assessments.movements_repetition_form.movements_repetition_1_title"),
            description: t("ramp_assessments.movements_repetition_form.movements_repetition_1_description"),
            images: [movementsOfArm(mode)],
            commentInputName: "movements_repetition_1_comment",
            dialogText: t("ramp_assessments.movements_repetition_form.movements_repetition_1_dialog_text"),
            forms: {
                form1Title: left_arm,
                form2Title: right_arm,
                form1Name: "movements_repetition_1_left",
                form2Name: "movements_repetition_1_right",
                form1Choices: [
                    {
                        label: constant_movements_mainly_without_pause,
                        displayValue: "5",
                        actualValue: "5",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: frequent_movements_with_some_pauses,
                        displayValue: "2",
                        actualValue: "2",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: varied_movements,
                        displayValue: "0",
                        actualValue: "0",
                        status: "normal",
                        firstStatus: true,
                    },
                ],
                form2Choices: [
                    {
                        label: constant_movements_mainly_without_pause,
                        displayValue: "5",
                        actualValue: "5",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: frequent_movements_with_some_pauses,
                        displayValue: "2",
                        actualValue: "2",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: varied_movements,
                        displayValue: "0",
                        actualValue: "0",
                        status: "normal",
                        firstStatus: true,
                    },
                ],
            },
        },
        {
            title: t("ramp_assessments.movements_repetition_form.movements_repetition_2_title"),
            description: t("ramp_assessments.movements_repetition_form.movements_repetition_2_description"),
            images: [movementsOfWrist(mode)],
            commentInputName: "movements_repetition_2_comment",
            dialogText: t("ramp_assessments.movements_repetition_form.movements_repetition_2_dialog_text"),
            forms: {
                form1Title: left_hand,
                form2Title: right_hand,
                form1Name: "movements_repetition_2_left",
                form2Name: "movements_repetition_2_right",
                form1Choices: [
                    {
                        label: more_than_20_times_per_minute,
                        displayValue: "5",
                        actualValue: "5",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: _11_20_times_per_minute,
                        displayValue: "3",
                        actualValue: "3",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: _6_10_times_per_minute,
                        displayValue: "1",
                        actualValue: "1",
                        status: "medium",
                        firstStatus: false,
                    },
                    {
                        label: up_to_5_times_per_minute,
                        displayValue: "0",
                        actualValue: "0",
                        status: "normal",
                        firstStatus: true,
                    },
                ],
                form2Choices: [
                    {
                        label: more_than_20_times_per_minute,
                        displayValue: "5",
                        actualValue: "5",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: _11_20_times_per_minute,
                        displayValue: "3",
                        actualValue: "3",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: _6_10_times_per_minute,
                        displayValue: "1",
                        actualValue: "1",
                        status: "medium",
                        firstStatus: false,
                    },
                    {
                        label: up_to_5_times_per_minute,
                        displayValue: "0",
                        actualValue: "0",
                        status: "normal",
                        firstStatus: true,
                    },
                ],
            },
        },
        {
            title: t("ramp_assessments.movements_repetition_form.movements_repetition_3_title"),
            description: t("ramp_assessments.movements_repetition_form.movements_repetition_3_description"),
            images: [typoOfGrip1(mode), typoOfGrip2(mode), typoOfGrip3(mode)],
            commentInputName: "movements_repetition_3_comment",
            dialogText: t("ramp_assessments.movements_repetition_form.movements_repetition_3_dialog_text"),
            forms: {
                form1Title: left_hand,
                form2Title: right_hand,
                form1Name: "movements_repetition_3_left",
                form2Name: "movements_repetition_3_right",
                form1Choices: [
                    {
                        label: more_than_200_minutes_per_day,
                        displayValue: "4",
                        actualValue: "4",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: _101_200_times_per_day,
                        displayValue: "2",
                        actualValue: "2",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: _50_100_times_per_day,
                        displayValue: "1",
                        actualValue: "1",
                        status: "normal",
                        firstStatus: true,
                    },
                    {
                        label: less_than_50_times_per_day,
                        displayValue: "0",
                        actualValue: "0",
                        status: "normal",
                        firstStatus: false,
                    },
                ],
                form2Choices: [
                    {
                        label: more_than_200_minutes_per_day,
                        displayValue: "4",
                        actualValue: "4",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: _101_200_times_per_day,
                        displayValue: "2",
                        actualValue: "2",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: _50_100_times_per_day,
                        displayValue: "1",
                        actualValue: "1",
                        status: "normal",
                        firstStatus: true,
                    },
                    {
                        label: less_than_50_times_per_day,
                        displayValue: "0",
                        actualValue: "0",
                        status: "normal",
                        firstStatus: false,
                    },
                ],
            },
        },
        {
            title: t("ramp_assessments.movements_repetition_form.movements_repetition_4_title"),
            description: t("ramp_assessments.movements_repetition_form.movements_repetition_4_description"),
            commentInputName: "movements_repetition_4_comment",
            dialogText: t("ramp_assessments.movements_repetition_form.movements_repetition_4_dialog_text"),
            images: [],
            forms: {
                form2Title: "",
                form2Name: "movements_repetition_4",
                form2Choices: [
                    {
                        label: _30_seconds_or_less_per_10_minutes_work,
                        displayValue: "10",
                        actualValue: "10",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: between_30_90_seconds_per_10_minutes_work,
                        displayValue: "4",
                        actualValue: "4",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: _90_seconds_or_more_per_10_minutes_work,
                        displayValue: "0",
                        actualValue: "0",
                        status: "normal",
                        firstStatus: true,
                    },
                ],
            },
        },
        {
            title: t("ramp_assessments.movements_repetition_form.movements_repetition_5_title"),
            description: t("ramp_assessments.movements_repetition_form.movements_repetition_5_description"),
            images: [],
            commentInputName: "movements_repetition_5_comment",
            dialogText: t("ramp_assessments.movements_repetition_form.movements_repetition_5_dialog_text"),
            forms: {
                form2Title: "",
                form2Name: "movements_repetition_5",
                form2Choices: [
                    {
                        label: question_25_label1,
                        displayValue: "10",
                        actualValue: "10",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: question_25_label2,
                        displayValue: "6",
                        actualValue: "6",
                        status: "danger",
                        firstStatus: false,
                    },
                    {
                        label: question_25_label3,
                        displayValue: "3",
                        actualValue: "3",
                        status: "medium",
                        firstStatus: true,
                    },
                    {
                        label: question_25_label4,
                        displayValue: "0",
                        actualValue: "0",
                        status: "normal",
                        firstStatus: true,
                    },
                ],
            },
        },
    ];
    return { data };
};
