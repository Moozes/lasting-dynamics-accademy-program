import { PopoverProps } from "@mui/material/Popover";

export const popoverProps: Omit<PopoverProps, "open" | "anchorEl" | "onClose"> = {
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "left",
    },
    transformOrigin: {
        vertical: "top",
        horizontal: "left",
    },
    PaperProps: { sx: { backgroundImage: "none" } },
};
