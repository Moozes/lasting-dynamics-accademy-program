import { styled } from "@mui/material/styles";

import { DialogWithCloseIcon } from "./DialogWithCloseIcon";

export const StyledDialogWithCloseIcon = styled(DialogWithCloseIcon)(({ theme }) => ({
    ".MuiDialog-paper": {
        background: theme.color_system.divider.white,
        boxShadow: theme.color_system.boxShadow.gray,
        position: "relative",
        borderRadius: 10,
        "& > .close-icon": {
            color: theme.color_system.divider.dark_grey,
            position: "absolute",
            top: 14,
            right: 14,
        },
        "& > .content": {
            padding: "38px 51px 20px 38px",
        },
    },
}));
