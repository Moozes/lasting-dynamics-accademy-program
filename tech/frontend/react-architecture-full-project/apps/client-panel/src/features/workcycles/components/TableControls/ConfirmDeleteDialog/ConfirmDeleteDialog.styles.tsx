import { styled } from "@mui/material/styles";

import { ConfirmDeleteDialog } from "./ConfirmDeleteDialog";

export const StyledConfirmDeleteDialog = styled(ConfirmDeleteDialog)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "10px",
    textAlign: "center",
    width: "575px",

    "& > .warning-icon": {
        marginBottom: "20px",
        "& > .icon": {
            fontSize: "40px",
            bgcolor: `${theme.color_system.status.error.dark}1a`,
            "svg path": {
                stroke: theme.color_system.status.error.dark,
            },
        },
    },

    "& > .title": {
        ...theme.typography.h4,
        color: theme.color_system.primary.dark,
        marginBottom: "16px",
    },

    "& > .description": {
        marginBottom: "50px",
        color: theme.color_system.text.primary,
    },

    "& > .buttons": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 15,
        padding: "0 19px 22px",
        "& > .button": {
            minWidth: "100px",
            borderRadius: "8px",
            "&.cancel": {
                padding: "7.5px, 16px, 7.5px, 16px",
            },
        },
    },
}));
