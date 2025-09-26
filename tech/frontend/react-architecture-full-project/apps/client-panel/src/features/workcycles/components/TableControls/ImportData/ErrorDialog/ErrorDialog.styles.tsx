import { styled } from "@mui/material/styles";

import { ErrorDialog } from "./ErrorDialog";

export const StyledErrorDialog = styled(ErrorDialog)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "24px",
    textAlign: "center",

    "& > .error-icon": {
        marginBottom: "20px",
        "& > .icon": {
            fontSize: "40px",
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
            "&.retry": {
                padding: "8px 12px",
            },
        },
    },
}));
