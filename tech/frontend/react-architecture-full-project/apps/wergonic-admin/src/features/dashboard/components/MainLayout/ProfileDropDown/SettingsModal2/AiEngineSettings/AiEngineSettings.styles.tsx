import { styled } from "@mui/material/styles";

import { AiEngineSettings } from "./AiEngineSettings";

export const StyledAiEngineSettings = styled(AiEngineSettings)(({ theme }) => ({
    "& .title": {
        ...theme.typography.h6,
        color: theme.color_system.primary.dark,
        marginBottom: "8px",
    },

    "& > .description": {
        ...theme.typography.body2,
        color: theme.color_system.text.secondary,
    },

    "& > .selectBox": {
        marginTop: "32px",
    },
}));
