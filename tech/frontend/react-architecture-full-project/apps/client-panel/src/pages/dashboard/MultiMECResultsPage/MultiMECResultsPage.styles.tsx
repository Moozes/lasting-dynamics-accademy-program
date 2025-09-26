import { styled } from "@mui/material/styles";

import { MultiMECResultsPage } from "./MultiMECResultsPage";

export const StyledMultiMECResultsPage = styled(MultiMECResultsPage)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& .multi-assessments-info-table": {
        marginBottom: 46,
        borderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
    },
}));
