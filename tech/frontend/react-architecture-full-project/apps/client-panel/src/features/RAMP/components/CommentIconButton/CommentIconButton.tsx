import { useSetAtom } from "jotai";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

import { CommentIcon, type HTMLDivProps } from "ui";

import { commentDialogInputNameAtom, commentDialogOpenAtom } from "@features/RAMP/atoms";

type Props = HTMLDivProps & {
    showBadge?: boolean;
    commentDialogInputName: string;
};

export const CommentIconButton = ({ showBadge, commentDialogInputName, ...props }: Props) => {
    const setCommentDialogOpen = useSetAtom(commentDialogOpenAtom);
    const setCommentDialogInputName = useSetAtom(commentDialogInputNameAtom);
    const clickHandler = () => {
        // open comment dialog, and set comment input name to commentDialogInputName
        setCommentDialogOpen(true);
        setCommentDialogInputName(commentDialogInputName);
    };

    return (
        <div {...props}>
            <Badge overlap="circular" variant="dot" invisible={!showBadge}>
                <IconButton onClick={clickHandler}>
                    <CommentIcon />
                </IconButton>
            </Badge>
        </div>
    );
};
