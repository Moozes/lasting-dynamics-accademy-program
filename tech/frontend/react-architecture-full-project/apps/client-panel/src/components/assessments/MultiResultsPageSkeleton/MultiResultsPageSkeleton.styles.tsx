import { styled } from "@mui/material/styles";

import { MultiResultsPageSkeleton } from "./MultiResultsPageSkeleton";

export const StyledMultiResultsPageSkeleton = styled(MultiResultsPageSkeleton)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "0 34px",
    "& .MuiSkeleton-root": {
        borderRadius: 20,
        background: theme.color_system.divider.light_grey,
        boxShadow: theme.color_system.boxShadow.gray,
    },
    "& > .title": {
        marginBottom: 14,
    },
    "& > .btn-skeleton": {
        marginBottom: 26,
        display: "flex",
        justifyContent: "flex-end",
        "& > .btn": {
            width: 155,
            height: 41,
            borderRadius: 8,
        },
    },
    "& > .card": {
        height: 1000,
        borderRadius: 10,
    },
}));
