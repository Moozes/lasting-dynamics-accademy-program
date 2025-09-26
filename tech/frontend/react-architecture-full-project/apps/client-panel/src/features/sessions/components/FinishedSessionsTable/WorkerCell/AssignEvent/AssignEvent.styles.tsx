import { styled } from "@mui/material/styles";

import { AssignEvent } from "./AssignEvent";

export const StyledAssignEvent = styled(AssignEvent)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .icon-button": {
        padding: 7,
        border: `1px solid ${theme.color_system.divider.light_grey}`,
        "& > .icon": {
            width: 10.5,
            height: 10.5,
            "& path": {
                stroke: theme.color_system.button.disabled.text,
            },
        },
    },
}));
