import { styled } from "@mui/material/styles";

import { Input } from "./Input";

export const StyledInput = styled(Input)(({ theme, value }) => ({
    color: value ? theme.color_system.text.primary : theme.color_system.divider.light_grey,
    border: `1px solid ${theme.color_system.divider.light_grey}`,
    borderRadius: 8,
    background: theme.color_system.divider.white,
    height: 41,
    width: 210,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 12px",
    cursor: "pointer",
    ...theme.typography.body2,
    "& > .icons": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
}));
