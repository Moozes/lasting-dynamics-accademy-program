import { SxProps, Theme } from "@mui/material";

export const popoverContentStyles: SxProps<Theme> = (theme) => ({
    padding: "8px 12px 0 12px",
    maxHeight: "251px",
    width: "168px",
    overflowY: "auto",
    "& > .search-input": {
        marginBottom: "8px",
    },
    "& > .factory-item, & > .line-item": {
        padding: "8px 0",
        cursor: "pointer",
        width: "100%",
        "&:hover": {
            backgroundColor: theme.color_system.divider.light_grey_20,
        },
    },
    "& > .center": {
        textAlign: "center",
        marginBottom: "8px",
    },
});
