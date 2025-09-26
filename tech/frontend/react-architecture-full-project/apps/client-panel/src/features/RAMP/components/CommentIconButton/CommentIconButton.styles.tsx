import { styled } from "@mui/material/styles";

import { CommentIconButton } from "./CommentIconButton";

export const StyledCommentIconButton = styled(CommentIconButton)(({ theme }) => ({
    color: theme.color_system.text.primary,
    button: {
        padding: 0,
    },
    ".MuiBadge-badge": {
        background: theme.color_system.status.error.dark,
    },
}));
