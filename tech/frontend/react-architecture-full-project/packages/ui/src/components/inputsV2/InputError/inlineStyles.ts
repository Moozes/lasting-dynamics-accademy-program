import { tooltipClasses, TooltipProps } from "@mui/material";

export const tooltipCustomSlotProps: TooltipProps["slotProps"] = {
    popper: {
        sx: {
            [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] > .MuiTooltip-tooltip`]: { margin: "5px" },
        },
    },
};
