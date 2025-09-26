import { styled } from "@mui/material/styles";

import { GeneratedResultsSummary } from "./GeneratedResultsSummary";

export const StyledGeneratedResultsSummary = styled(GeneratedResultsSummary)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "26px 81px 39px 43px",
    background: theme.color_system.divider.white,
    boxShadow: theme.color_system.boxShadow.gray,
    borderRadius: 10,
    "& > .title": {
        marginBottom: 37,
    },
    "& > .sub-title-container": {
        marginBottom: 22,
        color: theme.color_system.text.secondary,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& > .sub-title": {},
    },
    "& > .risk-score-container": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "&.mb": {
            marginBottom: 17,
        },
        "& > .text": {},
        "& > .oval": {
            width: 89,
            height: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
            ...theme.typography.body1,
            "&.danger": {
                background: theme.color_system.status.error.light,
            },
            "&.medium": {
                background: theme.color_system.status.warning.light,
            },
            "&.normal": {
                background: theme.color_system.status.success.light,
            },
        },
    },
}));
