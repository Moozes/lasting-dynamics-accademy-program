import { styled } from "@mui/material/styles";

import { AddFirmwareForm } from "./AddFirmwareForm";

export const StyledAddFirmwareForm = styled(AddFirmwareForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "20px 30px",

    "& > .add-firmware-form": {
        "& > .text": {
            textAlign: "left",
            marginBottom: 24,
            "& > .title": {
                ...theme.typography.h4,
                marginBottom: 8,
            },
        },
        "& > .input": {
            marginBottom: "16px",
        },
        "& > .file-input": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            border: `1px solid ${theme.color_system.divider.dark_grey}`,
            borderRadius: 8,
            textAlign: "center",
            marginTop: 16,
            cursor: "pointer",

            "& > .selected-file-name": {
                marginTop: 8,
                color: theme.color_system.text.secondary,
            },
            "& > .file-input-label": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                "& > svg": {
                    width: 40,
                    height: 50,
                    marginBottom: 8,
                },
                "& > .upload-instruction": {
                    color: theme.color_system.primary.dark,
                    marginBottom: 8,
                },
                "& > .file-size-instruction": {
                    color: theme.color_system.text.secondary,
                },
            },
        },
    },
}));
