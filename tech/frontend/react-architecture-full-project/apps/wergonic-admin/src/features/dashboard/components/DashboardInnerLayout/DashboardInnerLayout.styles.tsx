import { styled } from "@mui/material/styles";

import { DashboardInnerLayout } from "./DashboardInnerLayout";

export const StyledDashboardInnerLayout = styled(DashboardInnerLayout)(({ theme }) => ({
    "& > .dashboard-inner-container": {
        minWidth: "100%",
        padding: "40px",
        backgroundColor: theme.color_system.background.default,
        "& > .go-back-button": {
            marginBottom: "16px",
        },
        "& > .header-container": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
            width: "100%",
            "& > .header-title": {
                ...theme.typography.h4,
                color: theme.color_system.text.primary,
                textAlign: "left",
            },
            "& > .page-actions": {
                display: "flex",
                gap: "8px",
                justifyContent: "flex-end",
                width: "auto",
            },
        },
    },
}));
