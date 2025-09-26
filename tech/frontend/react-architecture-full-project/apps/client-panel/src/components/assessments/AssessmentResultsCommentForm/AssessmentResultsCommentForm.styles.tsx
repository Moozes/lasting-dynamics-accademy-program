import { styled } from "@mui/material/styles";

import { AssessmentResultsCommentForm } from "./AssessmentResultsCommentForm";

export const StyledAssessmentResultsCommentForm = styled(AssessmentResultsCommentForm)(() => ({
    "& > .text-area": {
        marginBottom: 10,
    },
    "& > .btn-container": {
        display: "flex",
        justifyContent: "flex-end",
    },
}));
