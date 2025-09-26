import { FormikRadio, type HTMLDivProps, useTranslationV2 } from "ui";

import { RAMPAssessmentLimitsEnum } from "@app-types/index";

type Props = HTMLDivProps;

export const DisplayPreferencesScreen = (props: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <div className="title">{t("settings.ramp_assessment_limits")}</div>
            <div className="text">{t("settings.ramp_assessment_limits_description")}</div>
            <label>
                <FormikRadio id="ramp_limit_display" name="ramp_limit_display" value={RAMPAssessmentLimitsEnum.TIME} />
                <div className="main-text">
                    {t("settings.view_data_as_time")} (
                    <span className="secondary-text">{t("settings.3_to_lt_4_hours")}</span>)
                </div>
            </label>
            <label>
                <FormikRadio
                    id="ramp_limit_display"
                    name="ramp_limit_display"
                    value={RAMPAssessmentLimitsEnum.PERCENTAGE}
                />
                <div className="main-text">
                    {t("settings.view_data_as_percentage")} (<span className="secondary-text">37.5%</span>)
                </div>
            </label>
        </div>
    );
};
