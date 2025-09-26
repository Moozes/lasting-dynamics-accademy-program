import { styled } from "@mui/material/styles";

import { REBAResultsPageSkeleton } from "./REBAResultsPageSkeleton";

export const StyledREBAResultsPageSkeleton = styled(REBAResultsPageSkeleton)(({ theme }) => ({
    padding: "0 34px",
    "& > .page-title": {
        color: theme.color_system.text.primary,
        marginBottom: 20,
        fontFamily: "Manrope",
        fontSize: 24,
        fontWeight: 700,
    },
    "& .MuiSkeleton-root": {
        borderRadius: 20,
        background: theme.color_system.divider.light_grey,
        boxShadow: theme.color_system.boxShadow.gray,
    },
    "& > .assessment-info": {
        display: "flex",
        gap: 15,
        marginBottom: 20,
        "& > .left": {
            flexGrow: 1,
            height: 174,
        },
        "& > .right": {
            width: 184,
            height: 174,
        },
    },
    "& > .card": {
        height: 303,
        marginBottom: 20,
    },
}));
