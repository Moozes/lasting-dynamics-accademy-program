import { styled } from "@mui/material/styles";

import { ToggleTheme } from "./ToggleTheme";

export const StyledToggleTheme = styled(ToggleTheme)(({ theme }) => ({
    "& > .icon": {
        color: theme.color_system.primary.dark,
    },
}));
