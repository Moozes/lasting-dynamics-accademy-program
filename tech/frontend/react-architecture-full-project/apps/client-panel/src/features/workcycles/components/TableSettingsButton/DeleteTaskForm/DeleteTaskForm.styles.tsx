import { styled } from "@mui/material/styles";

import { DeleteTaskForm } from "./DeleteTaskForm";

export const StyledDeleteTaskForm = styled(DeleteTaskForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    width: 450,
    textAlign: "center",
    padding: "20px 25px",

    "& > .warning-icon": {
        marginBottom: 20,
        "& > .icon": {
            fontSize: 40,
            color: theme.palette.error.main,
        },
    },

    "& > .title": {
        ...theme.typography.h4,
        color: theme.color_system.primary.dark,
        marginBottom: 16,
    },

    "& > .description": {
        marginBottom: 24,
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
