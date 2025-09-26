import { SxProps, Theme } from "@mui/material";

export const popoverContentStyles: SxProps<Theme> = (theme) => ({
    padding: "8px 12px 0 12px",
    maxHeight: "251px",
    width: "168px",
    overflowY: "auto",
    "& > .search-input": {
        marginBottom: "8px",
    },
    "& > .organization-item": {
        marginBottom: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& > .organization-name": {
            ...theme.typography.body2,
        },
    },
    "& > .center": {
        textAlign: "center",
        marginBottom: "8px",
    },
});
