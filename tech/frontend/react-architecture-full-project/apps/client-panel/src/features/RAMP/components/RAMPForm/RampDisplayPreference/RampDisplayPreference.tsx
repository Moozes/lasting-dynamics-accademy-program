import { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";

import { type HTMLDivProps, Radio, useTranslationV2 } from "ui";

import { RAMPAssessmentLimitsEnum } from "@app-types/index";
import { authAtom } from "@atoms/index";
import { rampLimitDisplayAtom } from "@features/RAMP/atoms";

type Props = HTMLDivProps;

export const RampDisplayPreference = (props: Props) => {
    const t = useTranslationV2();
    const [rampLimitDisplay, setRampLimitDisplay] = useAtom(rampLimitDisplayAtom);
    const auth = useAtomValue(authAtom);

    useEffect(() => {
        setRampLimitDisplay(auth.wergonicUser?.ramp_limit_display || "");
    }, [setRampLimitDisplay]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRampLimitDisplay(event.target.value);
    };

    return (
        <div {...props}>
            <div className="text">{t("ramp_assessments.choose_limit_display")}:</div>
            <div className="radio-buttons">
                <label>
                    <Radio
                        name="ramp_limit_display"
                        value={RAMPAssessmentLimitsEnum.TIME}
                        checked={rampLimitDisplay === RAMPAssessmentLimitsEnum.TIME}
                        onChange={handleChange}
                    />
                    {t("Time")}
                </label>
                <label>
                    <Radio
                        name="ramp_limit_display"
                        value={RAMPAssessmentLimitsEnum.PERCENTAGE}
                        checked={rampLimitDisplay === RAMPAssessmentLimitsEnum.PERCENTAGE}
                        onChange={handleChange}
                    />
                    {t("Percentage")}
                </label>
            </div>
        </div>
    );
};
