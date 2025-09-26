import { Btn, type HTMLDivProps, useTranslateLimb, useTranslationV2, WarningIcon } from "ui";

import { ISelectedSessionProp } from "@features/sessions/types";

type Props = HTMLDivProps &
    ISelectedSessionProp & {
        onProceed: () => void;
        onCancel: () => void;
    };

export const MissingLimbsWarning = ({ selectedSession, onProceed, onCancel, ...props }: Props) => {
    const t = useTranslationV2();
    const { translateLimb } = useTranslateLimb();
    let hasMissingLimbsInfo = false;
    if (selectedSession.limbs_info && selectedSession.limbs_info.missing_limbs.length !== 0) {
        hasMissingLimbsInfo = true;
    }
    let missingLimbsText = ` ${t("missing_limbs")}: `;
    selectedSession.limbs_info?.missing_limbs.forEach((limb, index, array) => {
        const lastElement = index === array.length - 1;
        if (lastElement) {
            missingLimbsText += `${translateLimb(limb)}.`;
        } else {
            missingLimbsText += `${translateLimb(limb)}, `;
        }
    });
    return (
        <div {...props}>
            <div className="missing-limb-warning">
                <div className="icon">
                    <WarningIcon />
                </div>
                <div className="text">
                    <div className="title">{t("sessions_management.missing_limb_sensor_info")}</div>
                    <div className="description">
                        {t("sessions_management.missing_limb_sensor_info_description")}
                        {hasMissingLimbsInfo && missingLimbsText}
                    </div>
                </div>
                <div className="actions">
                    <Btn variant="primary-outlined" onClick={onCancel} className="cancel-btn" type="button">
                        {t("Cancel")}
                    </Btn>
                    <Btn variant="primary-contained" onClick={onProceed} className="proceed-btn">
                        {t("proceed")}
                    </Btn>
                </div>
            </div>
        </div>
    );
};
