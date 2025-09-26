/* eslint-disable @typescript-eslint/no-unused-vars */
import { Btn, type HTMLDivProps, useTranslationV2 } from "ui";

import { IFormControlsProps } from "@app-types/index";

import { useContinue, usePrevious, useSave, useSubmit } from "./AssessmentFormControls.hooks";

type Props = HTMLDivProps & IFormControlsProps;

export const AssessmentFormControls = ({
    assessmentFormSubRoutes,
    canSubmit,
    setAllTabsAsVisited,
    ...props
}: Props) => {
    const t = useTranslationV2();

    const { onPrevious, currentRoute } = usePrevious(assessmentFormSubRoutes);
    const { onContinue } = useContinue(assessmentFormSubRoutes);
    const { onSave } = useSave();
    const { onSubmit } = useSubmit(canSubmit, setAllTabsAsVisited);
    const firstRoute = assessmentFormSubRoutes[0];
    const lastRoute = assessmentFormSubRoutes[assessmentFormSubRoutes.length - 1];

    return (
        <div {...props}>
            <Btn variant="text" disabled={currentRoute === firstRoute} onClick={onPrevious} type="button">
                {t("Previous")}
            </Btn>
            <div className="empty" />
            <Btn variant="primary-contained" onClick={onSave}>
                {t("save")}
            </Btn>
            {currentRoute !== lastRoute ? (
                <Btn disabled={false} variant="primary-contained" onClick={onContinue}>
                    {t("save_and_continue")}
                </Btn>
            ) : (
                <Btn disabled={false} variant="primary-contained" onClick={onSubmit}>
                    {t("submit")}
                </Btn>
            )}
        </div>
    );
};
