import { styled } from "@mui/material/styles";

import { FirmwarePage } from "./FirmwarePage";

export const StyledFirmwarePage = styled(FirmwarePage)(({ theme }) => ({
    color: theme.color_system.text.primary,
    rowGap: 20,
    padding: "0 32px 77px 32px",
    "& > .title": {
        ...theme.typography.h4,
        marginBottom: 28,
    },
    "& > .table-controls": {
        marginBottom: 28,
    },
    "& > .sub-title": {
        ...theme.typography.h6,
        marginBottom: 16,
        color: theme.color_system.text.secondary,
    },
}));
