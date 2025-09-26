import { styled } from "@mui/material/styles";

import { URLFactoryFilter } from "./URLFactoryFilter";

export const StyledURLFactoryFilter = styled(URLFactoryFilter)(({ theme }) => ({
    background: theme.color_system.divider.white,
    border: `1px solid ${theme.color_system.divider.light_grey}`,
    width: "183px",
    padding: "8px 12px",
    display: "flex",
    alignItems: "center",
    gap: 15,
    cursor: "pointer",
    borderRadius: 8,
    "&:hover": {
        opacity: 0.8,
    },
    "& > .text": {
        ...theme.typography.h6,
        color: theme.color_system.button.disabled.text,
    },
}));
