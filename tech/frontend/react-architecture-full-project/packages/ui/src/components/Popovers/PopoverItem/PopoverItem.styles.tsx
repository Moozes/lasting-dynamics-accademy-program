import { styled } from "@mui/material/styles";

import { PopoverItem } from "./PopoverItem";

export const StyledPopoverItem = styled(PopoverItem)(({ theme }) => ({
    cursor: "pointer",
    "&:hover": {
        background: theme.color_system.divider.light_grey,
    },
    "&.selected": {
        background: theme.color_system.divider.light_grey,
    },
    "&.disabled": {
        opacity: 0.5,
        // this disables cliking and all pointer events, just like a disabled button
        pointerEvents: "none",
        "& *": {
            pointerEvents: "none",
        },
    },
}));
