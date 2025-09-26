import { styled } from "@mui/material/styles";

import { MultiSessionHeartRateDataPage } from "./MultiSessionHeartRateDataPage";

export const StyledMultiSessionHeartRateDataPage = styled(MultiSessionHeartRateDataPage)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .title": {
        marginBottom: 18,
    },
    "& > .table": {
        marginBottom: 30,
    },
}));
