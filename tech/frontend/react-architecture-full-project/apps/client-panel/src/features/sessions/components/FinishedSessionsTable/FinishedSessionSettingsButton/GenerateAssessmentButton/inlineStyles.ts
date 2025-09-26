import { SxProps, Theme } from "@mui/material";

import { TABLE_SETTINGS_MENU_ITEM_PADDING } from "@utils/index";

export const generateAssessmentButtonStyles: SxProps<Theme> = {
    p: TABLE_SETTINGS_MENU_ITEM_PADDING,
};

export const popoverStyles = (theme: Theme): { popoverContent: SxProps<Theme>; popoverArrow: SxProps<Theme> } => ({
    popoverContent: {
        padding: "15px",
        width: "280px",
        color: theme.color_system.text.secondary,
        textAlign: "center",
        background: theme.color_system.divider.white,
        borderRadius: "8px",
        overflow: "visible",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    popoverArrow: {
        position: "absolute",
        width: "10px",
        height: "10px",
        background: theme.color_system.divider.white,
        borderWidth: "1px",
        borderColor: "transparent",
        transform: "rotate(45deg)",
        bottom: "100%",
        right: "10px",
    },
});
