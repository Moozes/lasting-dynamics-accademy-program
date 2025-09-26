import { styled } from "@mui/material/styles";

import { AddFactoryForm } from "./AddFactoryForm";

export const StyledAddFactoryForm = styled(AddFactoryForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "32px 39px 35px",

    "& > .form-header": {
        display: "flex",
        alignItems: "center",
        marginBottom: 24,

        "& > .text": {
            "& > .title": {
                ...theme.typography.h4,
            },
        },
    },

    "& > .input": {
        marginBottom: 16,
        "& > label": {
            color: theme.color_system.text.secondary,
        },

        "& > input": {
            padding: "10px 12px",
        },
    },
}));
