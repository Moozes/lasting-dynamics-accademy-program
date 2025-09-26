import { styled } from "@mui/material/styles";

export const StyledDiv = styled("div")(({ theme }) => ({
    color: theme.color_system.text.secondary,
    padding: "7px 0",
    borderRadius: 8,
    background: theme.color_system.divider.white,
    boxShadow: theme.color_system.boxShadow.purple_20,
    "& > .search-input-container": {
        padding: "0 7px",
        "& > .search-input": {
            "&.margin-bottom": {
                marginBottom: 11,
            },
        },
    },
    "& > .loading": {
        textAlign: "center",
        marginBottom: 3,
        ...theme.typography.body2,
    },
    "& > .list": {
        "& .list-item": {
            marginBottom: 3,
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "8px 12px",
            borderRadius: 4,
            cursor: "pointer",
            "&:hover": {
                background: theme.color_system.divider.light_grey_20,
            },
            "&:last-of-type": {
                marginBottom: 0,
            },
            "&.loading": {
                cursor: "not-allowed",
            },
            "& > .label": {
                ...theme.typography.body1,
            },
            "& > .small-colored-circle-icon": {
                width: 7,
                height: 7,
                background: theme.color_system.text.secondary,
            },
            "& > .category": {
                ...theme.typography.caption,
            },
            "& > .circular-progress": {
                color: "inherit",
            },
        },
    },
}));
