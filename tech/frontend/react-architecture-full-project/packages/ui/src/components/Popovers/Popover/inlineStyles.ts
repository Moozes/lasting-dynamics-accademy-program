import { PopoverProps } from "@mui/material/Popover";

export const defaultPositionAndPaperProps: Omit<PopoverProps, "open" | "anchorEl" | "onClose"> = {
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
    },
    transformOrigin: {
        vertical: "top",
        horizontal: "right",
    },
    PaperProps: {
        sx: {
            marginTop: "5px",
            backgroundImage: "none",
            background: (theme) => theme.color_system.divider.white,
            borderRadius: "10px",
            boxShadow: (theme) => theme.color_system.boxShadow.purple_20,
        },
    },
};
