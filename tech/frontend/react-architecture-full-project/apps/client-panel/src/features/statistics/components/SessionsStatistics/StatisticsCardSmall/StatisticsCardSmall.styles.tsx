import { styled } from "@mui/material/styles";

import { StatisticsCardSmall } from "./StatisticsCardSmall";

export const StyledStatisticsCardSmall = styled(StatisticsCardSmall)(({ theme }) => ({
    padding: "18px 12.5px 22.5px 26px",
    background: theme.color_system.accent.light_grey,
    borderRadius: "22.707px",
    boxShadow: theme.color_system.boxShadow.purple_10,
    color: theme.color_system.text.primary,
    "& > .title": {
        marginBottom: "20px",
    },
    "& > .content": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& > .number": {},
        "& > .trending div": {
            svg: {
                display: "block",
            },
            "& > .percentage": {
                textAlign: "center",
                display: "block",
                "&.up": {
                    color: theme.color_system.status.success.light,
                },
                "&.down": {
                    color: theme.color_system.status.error.light,
                },
            },
        },
    },
    "& > .ongoing": {
        color: theme.color_system.text.secondary,
    },
}));
