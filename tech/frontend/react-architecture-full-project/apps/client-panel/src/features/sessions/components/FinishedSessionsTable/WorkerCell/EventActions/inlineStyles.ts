import { PopoverProps } from "@mui/material/Popover";

const sharedProps: Omit<PopoverProps, "open" | "anchorEl" | "onClose"> = {
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "left",
    },
    transformOrigin: {
        vertical: "top",
        horizontal: "left",
    },
};

export const popoverProps: Omit<PopoverProps, "open" | "anchorEl" | "onClose"> = {
    ...sharedProps,
    PaperProps: { sx: { backgroundImage: "none" } },
};
export const popoverProps2: Omit<PopoverProps, "open" | "anchorEl" | "onClose"> = {
    ...sharedProps,
    PaperProps: { sx: { backgroundImage: "none", marginTop: "6px" } },
};
