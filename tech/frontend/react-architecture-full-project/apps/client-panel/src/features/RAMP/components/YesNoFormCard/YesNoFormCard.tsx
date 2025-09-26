import { useFormikContext } from "formik";

import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { RAMPAssessmentDetail as AssessmentDetail } from "@app-types/index";
import { useInformationDialog } from "@features/RAMP/hooks";
import { YesNoFormCardProps } from "@features/RAMP/types";

import { CommentIconButton } from "../CommentIconButton";
import { TextAndQuestionIcon } from "../TextAndQuestionIcon";

import { useResultValue } from "./YesNoFormCard.hooks";
import { YesNoRadioGroup } from "./YesNoRadioGroup";

type Props = HTMLDivProps & YesNoFormCardProps;

export const YesNoFormCard = ({ title, choices, hideResultSquare, showDividers, ...props }: Props) => {
    const { result } = useResultValue(choices);
    const t = useTranslationV2();
    const { values } = useFormikContext<AssessmentDetail>();
    const { openInformationDialog } = useInformationDialog();
    return (
        <div {...props}>
            <div className="header">
                <Typography className="title" variant="h4">
                    {title}
                </Typography>
                {!hideResultSquare && (
                    <div className="result">
                        <Typography className="text" variant="body1">
                            {t("result")}
                        </Typography>
                        <div className="square">{result}</div>
                    </div>
                )}
            </div>
            {choices.map((choice, index, choiceArray) => {
                /* show divider when prop is true && not last element in array */
                const showBorderBottom = showDividers && index !== choiceArray.length - 1;
                const hasComment = !!(values as any)[choice.commentInputName];
                return (
                    <div className={`form-element ${showBorderBottom ? "border-bottom" : ""}`} key={choice.text}>
                        {/* show question mark icon that opens a dialog if info property is defined */}
                        {choice.info ? (
                            <TextAndQuestionIcon
                                className="text"
                                text={choice.text}
                                onQuestionIconClick={() => {
                                    openInformationDialog(choice.info);
                                }}
                            />
                        ) : (
                            <Typography className="text" variant="body2">
                                {choice.text}
                            </Typography>
                        )}
                        {!choice.hasCommentOnly ? (
                            <YesNoRadioGroup className="radio-group" {...choice} />
                        ) : (
                            <CommentIconButton
                                showBadge={hasComment}
                                commentDialogInputName={choice.commentInputName}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};
