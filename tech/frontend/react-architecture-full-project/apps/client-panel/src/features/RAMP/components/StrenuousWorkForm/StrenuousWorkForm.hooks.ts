import { useFormikContext } from "formik";

import { useTranslationV2 } from "ui";

import { RAMPAssessmentDetail as AssessmentDetail } from "@app-types/index";
import { YesNoFormCardProps } from "@features/RAMP/types";

export const useStrenuousWorkFormData = () => {
    const t = useTranslationV2();
    const strenuousWorkInputName = "strenuous_work";
    const { values } = useFormikContext<AssessmentDetail>();
    const data: YesNoFormCardProps[] = [
        {
            title: t("ramp_assessments.strenuous_work_form.strenuous_work_1_title"),
            choices: [
                {
                    text: t("ramp_assessments.strenuous_work_form.strenuous_work_1_a"),
                    name: strenuousWorkInputName,
                    commentInputName: "strenuous_work_comment",
                    yesValue: "2",
                    noValue: "0",
                    yesStatus: "medium",
                    noStatus: "normal",
                },
            ],
        },
    ];

    const subForm: YesNoFormCardProps = {
        title: t("ramp_assessments.strenuous_work_form.strenuous_work_2_title"),
        hideResultSquare: true,
        showDividers: true,
        choices: [
            {
                text: t("ramp_assessments.strenuous_work_form.strenuous_work_2_a"),
                name: "strenuous_work_type_1",
                commentInputName: "strenuous_work_type_1_comment",
                yesValue: "yes",
                noValue: "no",
                yesStatus: "normal",
                noStatus: "normal",
                hideStatuses: true,
            },
            {
                text: t("ramp_assessments.strenuous_work_form.strenuous_work_2_b"),
                name: "strenuous_work_type_2",
                commentInputName: "strenuous_work_type_2_comment",
                yesValue: "yes",
                noValue: "no",
                yesStatus: "normal",
                noStatus: "normal",
                hideStatuses: true,
            },
            {
                text: t("ramp_assessments.strenuous_work_form.strenuous_work_2_c"),
                name: "strenuous_work_type_3",
                commentInputName: "strenuous_work_type_3_comment",
                yesValue: "yes",
                noValue: "no",
                yesStatus: "normal",
                noStatus: "normal",
                hideStatuses: true,
            },
            {
                text: t("ramp_assessments.strenuous_work_form.strenuous_work_2_d"),
                name: "strenuous_work_type_4",
                commentInputName: "strenuous_work_type_4_comment",
                yesValue: "yes",
                noValue: "no",
                yesStatus: "normal",
                noStatus: "normal",
                hideStatuses: true,
            },
            {
                text: t("ramp_assessments.strenuous_work_form.strenuous_work_2_e"),
                name: "",
                commentInputName: "strenuous_work_type_other_comment",
                yesValue: "yes",
                noValue: "no",
                yesStatus: "normal",
                noStatus: "normal",
                hideStatuses: true,
                hasCommentOnly: true,
            },
        ],
    };

    if (values[strenuousWorkInputName] === ("2" as any)) data.push(subForm);
    return { data };
};
