import { styled } from "@mui/material/styles";

import { OpenDrawerButton } from "./OpenDrawerButton";

export const StyledOpenDrawerButton = styled(OpenDrawerButton)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .icon path": {
        stroke: theme.color_system.text.light,
    },
}));
