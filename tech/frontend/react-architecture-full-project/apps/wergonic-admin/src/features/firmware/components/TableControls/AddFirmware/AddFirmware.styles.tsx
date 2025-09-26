import { styled } from "@mui/material/styles";

import { AddFirmware } from "./AddFirmware";

export const StyledAddFirmware = styled(AddFirmware)(({ theme }) => ({
    "& > .add-button": {
        padding: "8px 14px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        ...theme.typography.h6,
        "& svg path": {
            stroke: theme.color_system.button.enabled.text,
        },
    },
    "& > .form-actions": {
        background: theme.color_system.divider.light_purple,
        padding: "23px 43px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "13px",
        "& > .btn": {
            borderRadius: "5px",
        },
    },
}));
