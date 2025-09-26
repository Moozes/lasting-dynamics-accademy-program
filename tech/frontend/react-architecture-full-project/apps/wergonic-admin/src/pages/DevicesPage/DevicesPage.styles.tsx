import { styled } from "@mui/material/styles";

import { DevicesPage } from "./DevicesPage";

export const StyledDevicesPage = styled(DevicesPage)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "0 32px 77px 32px",
    "& > .title": {
        ...theme.typography.h4,
        marginBottom: 28,
    },
    "& > .table-controls": {
        marginBottom: 28,
    },
}));
