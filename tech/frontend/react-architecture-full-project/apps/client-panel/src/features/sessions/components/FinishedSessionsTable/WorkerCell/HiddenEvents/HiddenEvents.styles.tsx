import { styled } from "@mui/material/styles";

import { HiddenEvents } from "./HiddenEvents";

export const StyledHiddenEvents = styled(HiddenEvents)(({ theme }) => ({
    "& > .icon-button": {
        color: theme.color_system.button.disabled.text,
        ...theme.typography.caption,
        width: 26.5,
        height: 26.5,
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        border: `1px solid ${theme.color_system.divider.light_grey}`,
    },
}));
