import { styled } from "@mui/material/styles";

import { LicenseStatistics } from "./LicenseStatistics";

export const StyledLicenseStatistics = styled(LicenseStatistics)(({ theme }) => ({
    color: theme.color_system.text.primary,
    background: theme.color_system.divider.white,
    borderRadius: "24px",
    boxShadow: theme.color_system.boxShadow.gray,
    padding: "30px 59px 30px 28px",
    "& > .title": {
        marginBottom: "38.76px",
    },
    "& > .stats": {
        "& > .stat": {
            marginBottom: "17px",
            display: "flex",
            alignItems: "flex-end",
            gap: "12px",
            "& > .text": {
                flexGrow: 1,
                flexBasis: 0,
                color: theme.color_system.text.light,
            },
            "& > .progress": {
                flexBasis: 0,
                flexGrow: 1,
            },
        },
    },
}));
