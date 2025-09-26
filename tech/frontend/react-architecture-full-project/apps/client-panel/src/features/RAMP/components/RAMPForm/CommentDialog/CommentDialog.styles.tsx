import { styled } from "@mui/material/styles";

import { CommentDialog } from "./CommentDialog";

export const StyledCommentDialog = styled(CommentDialog)(({ theme }) => ({
    color: theme.color_system.text.primary,
    ".MuiDialog-paper": {
        width: 604,
        background: theme.color_system.divider.white,
        boxShadow: theme.color_system.boxShadow.gray,
        position: "relative",
        borderRadius: 10,
        "& > .close-icon": {
            color: theme.color_system.divider.dark_grey,
            position: "absolute",
            top: 14,
            right: 14,
        },
        "& > .content": {
            padding: "38px 51px 20px 38px",
            "& > .title": {
                marginBottom: 20,
            },
        },
        "& > .actions": {
            display: "flex",
            justifyContent: "flex-end",
            gap: 13,
            padding: "15px 53px",
            background: theme.color_system.divider.light_purple,
        },
    },
}));
