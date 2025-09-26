import { styled } from "@mui/material/styles";

import { Appendix } from "./Appendix";

export const StyledAppendix = styled(Appendix)(({ theme }) => ({
    "& > .appendix-container": {
        padding: "24px",
        backgroundColor: theme.color_system.background.paper,
        marginTop: "32px",
        boxShadow: theme.color_system.boxShadow.gray,
        borderRadius: "8px",
        "& > .appendix-title": {
            ...theme.typography.h4,
            marginBottom: "16px",
            "&:hover": {
                cursor: "default",
            },
            display: "block",
            fontSize: "24px",
            fontWeight: 700,
            color: theme.color_system.text.primary,
        },
        "& > .appendix-content": {
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            "& > .appendix-row": {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                "& > .appendix-label": {
                    fontWeight: 600,
                    color: theme.color_system.text.primary,
                    flex: "1",
                },
                "& > .appendix-description": {
                    color: theme.color_system.text.primary,
                    flex: "5",
                },
            },
        },
    },
}));
