import { useFormikContext } from "formik";
import { useAtom } from "jotai";

import Typography from "@mui/material/Typography";

import { FormikCheckbox, type HTMLDivProps, Tabs, useTranslationV2 } from "ui";

import { PushingAndPullingSelectedTabAtom } from "@features/RAMP/atoms";
import { CommentIconButton } from "@features/RAMP/components/CommentIconButton";
import { PushingAndPullingTabs } from "@features/RAMP/types";

type Props = HTMLDivProps;

export const PushingAndPullingHeader = (props: Props) => {
    const t = useTranslationV2();
    const { values } = useFormikContext();
    const commentInputName = "pushing_and_pulling_comment_1";
    const chekboxInputName = "pushing_and_pulling_non_existent";
    const hasComment = (values as any)[commentInputName];
    const noPushingAndPulling = (values as any)[chekboxInputName];

    const [selectedTab, setSelectedTab] = useAtom(PushingAndPullingSelectedTabAtom);
    const handleChange = (event: React.SyntheticEvent, newValue: PushingAndPullingTabs) => {
        setSelectedTab(newValue);
    };

    return (
        <div {...props}>
            <div className="no-lifting-work">
                <div className="note-container">
                    <Typography className="note-1" variant="body1">
                        {t("ramp_assessments.pushing_and_pulling_form.no_pushing_and_pulling_note_1")}
                    </Typography>
                    <Typography className="note-2" variant="body1">
                        {t("ramp_assessments.pushing_and_pulling_form.no_pushing_and_pulling_note_2")}
                    </Typography>
                </div>
                <label>
                    <FormikCheckbox name={chekboxInputName} />
                    <div className="text">
                        {" "}
                        {t("ramp_assessments.pushing_and_pulling_form.no_pushing_and_pulling_label")}{" "}
                    </div>
                </label>
                <CommentIconButton
                    className="comment-button"
                    showBadge={hasComment}
                    commentDialogInputName={commentInputName}
                />
            </div>
            {!noPushingAndPulling && (
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
