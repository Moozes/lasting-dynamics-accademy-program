import { styled } from "@mui/material/styles";

import { AssessmentFormControls } from "./AssessmentFormControls";

export const StyledAssessmentFormControls = styled(AssessmentFormControls)(({ theme }) => ({
    display: "flex",
    gap: 26,
    padding: "30px 20px",
    background: theme.color_system.background.paper,
    borderRadius: 10,
    boxShadow: theme.color_system.boxShadow.gray,
    "& > .empty": {
        flexGrow: 1,
    },
}));
