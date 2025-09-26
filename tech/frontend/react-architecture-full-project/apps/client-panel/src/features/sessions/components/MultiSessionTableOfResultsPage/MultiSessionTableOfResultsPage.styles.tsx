import { styled } from "@mui/material/styles";

import { MultiSessionTableOfResultsPage } from "./MultiSessionTableOfResultsPage";

export const StyledMultiSessionTableOfResultsPage = styled(MultiSessionTableOfResultsPage)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .limb-table": {
        marginBottom: 20,
    },
}));
