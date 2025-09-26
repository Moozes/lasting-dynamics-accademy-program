import { tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Tooltip } from "./Tooltip";

export const StyledTooltip = styled(Tooltip)(({ theme }) => ({
    [`& > .${tooltipClasses.tooltip}`]: {
        ...theme.typography.caption,
        color: theme.color_system.text.light,
        background: theme.color_system.divider.white,
        borderRadius: 8,
        padding: "11px 13px",
        boxShadow: theme.color_system.boxShadow.purple_20,
        [`& > .${tooltipClasses.arrow}`]: {
            color: theme.color_system.divider.white,
        },
    },
}));
