import { styled } from "@mui/material/styles";

import { MultiResultsCard } from "./MultiResultsCard";

export const StyledMultiResultsCard = styled(MultiResultsCard)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "26px 47px",
    background: theme.color_system.divider.white,
    borderRadius: 10,
    boxShadow: theme.color_system.boxShadow.gray,
    "& > .title": {
        marginBottom: 24,
    },
}));
