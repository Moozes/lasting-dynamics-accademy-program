import { styled } from "@mui/material/styles";

import { ConfirmationDialog } from "./ConfirmationDialog";

export const StyledConfirmationDialog = styled(ConfirmationDialog)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "20px",
    textAlign: "center",

    "& > .import-icon": {
        marginBottom: "20px",
        "& > .icon": {
            fontSize: "40px",
            color: theme.color_system.primary.dark,
        },
    },

    "& > .title": {
        ...theme.typography.h4,
        color: theme.color_system.primary.dark,
        marginBottom: "16px",
    },

    "& > .description": {
        marginBottom: "24px",
        color: theme.color_system.text.primary,
    },

    "& > .buttons": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 15,
        padding: "0 19px 22px",
        "& .button": {
            borderRadius: 5,
            "&.cancel": {
                padding: 8,
            },
            "&.confirm": {
                padding: "8px 12px",
            },
        },
    },
}));
