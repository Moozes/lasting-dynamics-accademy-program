import { styled } from "@mui/material/styles";

import { MultiSessionDetailsPageSkeleton } from "./MultiSessionDetailsPageSkeleton";

export const StyledMultiSessionDetailsPageSkeleton = styled(MultiSessionDetailsPageSkeleton)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "0 34px",
    "& .MuiSkeleton-root": {
        background: theme.color_system.divider.light_grey,
        boxShadow: theme.color_system.boxShadow.gray,
    },
    "& > .back-button": {
        marginBottom: 10,
    },
    "& > .title": {
        marginBottom: 14,
    },
    "& > .export-pdf-container": {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 26,
        "& > .btn": {
            width: 199,
            height: 41,
            borderRadius: 8,
        },
    },
    "& > .navbar": {
        borderRadius: 8,
        height: 42,
        marginBottom: 36,
    },
    "& > .table": {
        borderRadius: 8,
        height: 236,
        marginBottom: 20,
    },
}));
