import { styled } from "@mui/material/styles";

import { DisplaySquare } from "./DisplaySquare";

export const StyledDisplaySquare = styled(DisplaySquare)(({ theme, width, height }) => ({
    color: theme.color_system.text.primary,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11.3,
    border: `1px solid ${theme.color_system.divider.light_grey}`,
    width,
    height,
    "&.normal": {
        backgroundColor: theme.color_system.divider.white,
    },
    "&.disabled": {
        backgroundColor: theme.color_system.divider.light_grey_20,
    },
}));
