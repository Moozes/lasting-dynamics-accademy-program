import { useMemo } from "react";
import { useFormikContext } from "formik";
import { useAtom, useAtomValue } from "jotai";

import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";

import { Btn, FormikFilledTextarea, useTranslationV2 } from "ui";

import { commentDialogInputNameAtom, commentDialogOpenAtom } from "@features/RAMP/atoms";

type Props = { className?: string };

export const CommentDialog = (props: Props) => {
    const t = useTranslationV2();
    const commentDialogInputName = useAtomValue(commentDialogInputNameAtom);
    const [commentDialogOpen, setCommentDialogOpen] = useAtom(commentDialogOpenAtom);
    const formikContext = useFormikContext();
    const commentInputInitialValue = useMemo(
        () => (formikContext.values as any)[commentDialogInputName],
        [commentDialogInputName, commentDialogOpen]
    );
    const closeDialog = () => {
        setCommentDialogOpen(false);
    };
    const onCancel = () => {
        formikContext.setFieldValue(commentDialogInputName, commentInputInitialValue, false);
        setCommentDialogOpen(false);
    };
    return (
        <Dialog open={commentDialogOpen} onClose={closeDialog} {...props}>
            <IconButton className="close-icon" onClick={closeDialog}>
                <CloseIcon />
            </IconButton>
            <div className="content">
                <Typography className="title" variant="h4">
                    {t("add_comment")}
                </Typography>
                <FormikFilledTextarea
                    id={commentDialogInputName}
                    name={commentDialogInputName}
                    placeholder={t("add_comment_here")}
                    maxLength={100}
                    rows={5}
                />
            </div>
            <div className="actions">
                <Btn variant="secondary-contained" onClick={onCancel} type="button">
                    {t("Cancel")}
                </Btn>
                <Btn variant="primary-contained" onClick={closeDialog}>
                    {t("post")}
                </Btn>
            </div>
        </Dialog>
    );
};
