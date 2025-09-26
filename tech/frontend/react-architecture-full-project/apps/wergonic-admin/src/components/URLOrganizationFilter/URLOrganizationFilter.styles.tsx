import { styled } from "@mui/material/styles";

import { URLOrganizationFilter } from "./URLOrganizationFilter";

export const StyledURLOrganizationFilter = styled(URLOrganizationFilter)(({ theme }) => ({
    background: theme.color_system.divider.white,
    padding: "8px 12px",
    display: "flex",
    alignItems: "center",
    gap: 15,
    cursor: "pointer",
    borderRadius: 8,
    "&:hover": {
        opacity: 0.8,
    },
    "& > .icon": {
        height: 15,
        width: 18,
        path: { fill: theme.color_system.button.disabled.text },
    },
    "& > .text": {
        ...theme.typography.h6,
        color: theme.color_system.button.disabled.text,
    },
}));
