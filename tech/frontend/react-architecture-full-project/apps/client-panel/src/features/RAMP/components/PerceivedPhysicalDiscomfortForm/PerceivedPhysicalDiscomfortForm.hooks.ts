import { useTranslationV2 } from "ui";

import { YesNoFormCardProps } from "@features/RAMP/types";

export const usePerceivedPhysicalDiscomfortFormData = () => {
    const t = useTranslationV2();
    const data: YesNoFormCardProps[] = [
        {
            title: t("ramp_assessments.perceived_physical_discomfort_form.perceived_physical_discomfort_1_title"),
            choices: [
                {
                    text: t("ramp_assessments.perceived_physical_discomfort_form.perceived_physical_discomfort_1_a"),
                    name: "perceived_physical_discomfort",
                    commentInputName: "perceived_physical_discomfort_comment",
                    yesValue: "2",
                    noValue: "0",
                    yesStatus: "medium",
                    noStatus: "normal",
                },
            ],
        },
    ];
    return { data };
};
