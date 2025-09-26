import { styled } from "@mui/material/styles";

import { RAMPDetailPageSkeleton } from "./RAMPDetailPageSkeleton";

export const StyledRAMPDetailPageSkeleton = styled(RAMPDetailPageSkeleton)(({ theme }) => ({
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
        marginBottom: 33,
        "& > .left": {
            flexGrow: 1,
            height: 174,
        },
        "& > .right": {
            width: 184,
            height: 174,
        },
    },
    "& > .navigation": {
        height: 42,
        borderRadius: 10,
        marginBottom: 23,
    },
    "& > .form": {
        height: 420,
        marginBottom: 24,
    },
}));
