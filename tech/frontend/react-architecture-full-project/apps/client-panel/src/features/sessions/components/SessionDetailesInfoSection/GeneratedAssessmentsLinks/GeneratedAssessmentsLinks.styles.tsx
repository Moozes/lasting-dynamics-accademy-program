import { styled } from "@mui/material/styles";

import { GeneratedAssessmentsLinks } from "./GeneratedAssessmentsLinks";

export const StyledGeneratedAssessmentsLinks = styled(GeneratedAssessmentsLinks)(({ theme }) => ({
    "& > .link": {
        ...theme.typography.body1,
        color: theme.color_system.primary.dark,
        textDecoration: "underline",
        display: "block",
    },
}));
