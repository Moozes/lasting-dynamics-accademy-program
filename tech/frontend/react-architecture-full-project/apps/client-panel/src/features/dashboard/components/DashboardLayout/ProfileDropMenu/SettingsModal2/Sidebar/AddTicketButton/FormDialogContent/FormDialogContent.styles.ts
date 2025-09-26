import { styled } from "@mui/material/styles";

import { FormDialogContent } from "./FormDialogContent";

export const StyledFormDialogContent = styled(FormDialogContent)(({ theme }) => ({
    color: theme.color_system.text.primary,
    width: "min(90vw, 570px)",
    "& > .inputs": {
        padding: "26px 37px 14px",
        "& > .title": {
            ...theme.typography.h4,
            marginBottom: 38,
        },
        "& > .formik-input": {
            marginBottom: 3,
        },
        "& > label": {
            "& > .upload-file": {
                height: "68px",
                width: "100%",
                borderRadius: "5px",
                background: theme.color_system.divider.light_grey_20,
                border: "1px dashed",
                borderColor: theme.color_system.divider.light_grey,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                marginBottom: 3,
            },
        },
    },
    "& > .actions": {
        display: "flex",
        justifyContent: "flex-end",
        padding: "23px 37px 21px",
        background: theme.color_system.divider.light_purple,
    },
}));
