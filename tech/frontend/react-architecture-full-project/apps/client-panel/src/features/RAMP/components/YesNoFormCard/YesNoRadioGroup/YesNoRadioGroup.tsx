import { useFormikContext } from "formik";

import { FormikRadio, type HTMLDivProps, useTranslationV2 } from "ui";

import { CommentIconButton } from "@features/RAMP/components/CommentIconButton";
import { YesNoRadioGroupProps } from "@features/RAMP/types";

type Props = HTMLDivProps & YesNoRadioGroupProps;

export const YesNoRadioGroup = ({
    name,
    yesStatus,
    noStatus,
    yesValue,
    noValue,
    commentInputName,
    hideStatuses,
    ...props
}: Props) => {
    const t = useTranslationV2();
    const { values } = useFormikContext();
    const hasComment = (values as any)[commentInputName];
    return (
        <div {...props}>
            <div className="radio-group">
                <label>
                    <FormikRadio name={name} value={yesValue} />
                    <div className="text">{t("yes")}</div>
                </label>
                <label>
                    <FormikRadio name={name} value={noValue} />
                    <div className="text">{t("no")}</div>
                </label>
            </div>
            {!hideStatuses && (
                <div className="statuses">
                    <div className={`yes-status ${yesStatus}`}>{yesValue}</div>
                    <div className={`no-status ${noStatus}`}>
                        <div className={`oval ${yesStatus}`} />
                        <div className="value">{noStatus === "disabled" ? "x" : noValue}</div>
                    </div>
                </div>
            )}
            <CommentIconButton className="icon" commentDialogInputName={commentInputName} showBadge={hasComment} />
        </div>
    );
};
