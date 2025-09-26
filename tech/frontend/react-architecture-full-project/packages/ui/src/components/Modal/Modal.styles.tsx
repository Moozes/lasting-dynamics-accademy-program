import { styled } from "@mui/material/styles";

import { Modal } from "./Modal";

export const StyledModal = styled(Modal)(({ theme }) => ({
    bgcolor: theme.color_system.text.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > .MuiBackdrop-root": {
        background: theme.palette.mode == "dark" ? "rgba(141, 154, 167, 0.50)" : "rgba(66, 75, 84, 0.40)",
    },
    "& > .paper": {
        position: "relative",
        background: theme.color_system.divider.white,
        boxShadow: theme.color_system.boxShadow.gray,
        borderRadius: 10,
        maxHeight: "100vh",
        maxWidth: "100vw",
        overflow: "auto",
        "& > .icon-button": {
            position: "absolute",
            padding: 5,
            top: 2,
            right: 2,
            "& > .icon": {
                color: theme.color_system.text.light,
            },
        },
    },
}));
