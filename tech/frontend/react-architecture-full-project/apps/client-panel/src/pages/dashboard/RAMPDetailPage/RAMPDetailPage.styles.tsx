import { styled } from "@mui/material/styles";

import { RAMPDetailPage } from "./RAMPDetailPage";

export const StyledRAMPDetailPage = styled(RAMPDetailPage)(({ theme }) => ({
    "& > .goback-button": {
        marginLeft: 34,
    },
    "& > .page-title": {
        color: theme.color_system.text.primary,
        marginBottom: 20,
        paddingLeft: 34,
        fontFamily: "Manrope",
        fontSize: 24,
        fontWeight: 700,
    },
}));
