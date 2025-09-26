import { styled } from "@mui/material/styles";

import { NotFound } from "./NotFound";

export const StyledNotFound = styled(NotFound)(({ theme }) => ({
    color: theme.color_system.text.primary,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& > .text": {
        marginBottom: 15,
        marginTop: 45,
    },
}));
