import { styled } from "@mui/material/styles";

import { HomePageSkeleton } from "./HomePageSkeleton";

export const StyledHomePageSkeleton = styled(HomePageSkeleton)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& .MuiSkeleton-root": {
        borderRadius: 20,
        background: theme.color_system.divider.light_grey,
        boxShadow: theme.color_system.boxShadow.gray,
    },
    "& > .welcome-card": {
        height: 142,
        marginBottom: 25,
    },
    "& > .grid": {
        height: 154,
        marginBottom: 21,
        display: "flex",
        gap: 25,
        "& > .item": {
            height: "100%",
            flexGrow: 1,
        },
    },
    "& > .sessions-statistics": {
        height: 359,
        marginBottom: 21,
    },
    "& > .license-statistics": {
        height: 345,
    },
}));
