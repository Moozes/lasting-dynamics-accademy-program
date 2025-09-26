import { styled } from "@mui/material/styles";

import { MultiSessionTnoResultsPage } from "./MultiSessionTnoResultsPage";

export const StyledMultiSessionTnoResultsPage = styled(MultiSessionTnoResultsPage)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .limb-table": {
        marginBottom: 20,
    },
}));
