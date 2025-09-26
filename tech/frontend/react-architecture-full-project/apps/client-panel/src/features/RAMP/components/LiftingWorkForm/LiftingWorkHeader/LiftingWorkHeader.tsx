import { useFormikContext } from "formik";
import { useAtom } from "jotai";

import Typography from "@mui/material/Typography";

import { FormikCheckbox, type HTMLDivProps, Tabs, useTranslationV2 } from "ui";

import { liftingWorkSelectedTabAtom } from "@features/RAMP/atoms";
import { CommentIconButton } from "@features/RAMP/components/CommentIconButton";
import { LiftingWorkTabs } from "@features/RAMP/types";

type Props = HTMLDivProps;

export const LiftingWorkHeader = (props: Props) => {
    const t = useTranslationV2();
    const { values } = useFormikContext();
    const commentInputName = "lifting_work_comment_1";
    const chekboxInputName = "lifting_work_non_existent";
    const hasComment = (values as any)[commentInputName];
    const noLiftingWork = (values as any)[chekboxInputName];

    const [selectedTab, setSelectedTab] = useAtom(liftingWorkSelectedTabAtom);
    const handleChange = (event: React.SyntheticEvent, newValue: LiftingWorkTabs) => {
        setSelectedTab(newValue);
    };

    return (
        <div {...props}>
            <div className="no-lifting-work">
                <div className="note-container">
                    <Typography className="note-1" variant="body1">
                        {t("ramp_assessments.lifting_work_form.no_lifting_work_note_1")}
                    </Typography>
                    <Typography className="note-2" variant="body1">
                        {t("ramp_assessments.lifting_work_form.no_lifting_work_note_2")}
                    </Typography>
                </div>
                <label>
                    <FormikCheckbox name={chekboxInputName} />
                    <div className="text"> {t("ramp_assessments.lifting_work_form.no_lifting_work_label")} </div>
                </label>
                <CommentIconButton
                    className="comment-button"
                    showBadge={hasComment}
                    commentDialogInputName={commentInputName}
                />
            </div>
            {!noLiftingWork && (
                <Tabs
                    items={[
                        { label: "average", tabContent: null },
                        { label: "worst_case", tabContent: null },
                    ]}
                    selectedTab={selectedTab}
                    onChangeHandler={handleChange as any}
                />
            )}
        </div>
    );
};
