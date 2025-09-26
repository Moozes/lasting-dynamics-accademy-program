import { styled } from "@mui/material/styles";

import { TextAndQuestionIcon } from "./TextAndQuestionIcon";

export const StyledTextAndQuestionIcon = styled(TextAndQuestionIcon)(() => ({
    display: "flex",
    alignItems: "center",
    gap: 8,
    "& > .icon-button": {
        padding: 0,
        flexShrink: 0,
    },
}));
