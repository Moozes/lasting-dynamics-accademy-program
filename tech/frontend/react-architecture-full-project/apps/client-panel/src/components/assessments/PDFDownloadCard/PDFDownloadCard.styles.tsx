import { styled } from "@mui/material/styles";

import { PDFDownloadCard } from "./PDFDownloadCard";

export const StyledPDFDownloadCard = styled(PDFDownloadCard)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "30px 50px",
    background: theme.color_system.background.paper,
    boxShadow: theme.color_system.boxShadow.gray,
    borderRadius: 10,
    "& > a": {
        textDecoration: "none",
    },
}));
