import { type HTMLDivProps, useTranslationV2 } from "ui";

import { useTrasnlatedIllustration } from "./LiftingWorkInfo.hooks";

type Props = HTMLDivProps;

export const LiftingWorkInfo = (props: Props) => {
    const t = useTranslationV2();
    const { infoIllustration } = useTrasnlatedIllustration();
    const list = [
        t("ramp_assessments.lifting_work_form.info_dialog_text_1"),
        t("ramp_assessments.lifting_work_form.info_dialog_text_2"),
        t("ramp_assessments.lifting_work_form.info_dialog_text_3"),
        t("ramp_assessments.lifting_work_form.info_dialog_text_4"),
        t("ramp_assessments.lifting_work_form.info_dialog_text_5"),
        t("ramp_assessments.lifting_work_form.info_dialog_text_6"),
    ];

    return (
        <div {...props}>
            <ol>
                {list.map((elm) => (
                    <li key={elm}>{elm}</li>
                ))}
            </ol>
            <img src={infoIllustration} alt="illustration" />
        </div>
    );
};
