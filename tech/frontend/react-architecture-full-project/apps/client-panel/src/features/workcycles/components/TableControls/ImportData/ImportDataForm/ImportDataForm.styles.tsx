import { styled } from "@mui/material/styles";

import { ImportDataForm } from "./ImportDataForm";

export const StyledImportDataForm = styled(ImportDataForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "2px 25px",

    "& .import-header": {
        textAlign: "center",
        padding: "21px 77px 26px",
        "& > .icon": {
            marginBottom: 28,
        },
        "& > .title": {
            ...theme.typography.h4,
            color: theme.color_system.primary.dark,
        },
    },

    "& > .import-content": {
        textAlign: "left",
        marginBottom: 24,

        "& > .description": {
            marginBottom: 15,
            color: theme.color_system.text.primary,
        },

        "& > label": {
            marginBottom: 5,
            display: "flex",
            alignItems: "center",
            gap: 10,
            "& > .text": {
                fontWeight: "bold",
                color: theme.color_system.text.primary,
            },
        },
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
            "&.next": {
                padding: "8px 12px",
            },
        },
    },
}));
