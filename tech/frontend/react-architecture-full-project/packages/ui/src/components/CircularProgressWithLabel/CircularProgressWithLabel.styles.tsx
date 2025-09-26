import { styled } from "@mui/material/styles";

import { CircularProgressWithLabel } from "./CircularProgressWithLabel";

export const StyledCircularProgressWithLabel = styled(CircularProgressWithLabel)(({ theme }) => ({
    position: "relative",
    display: "inline-block",
    height: "82px",
    color: theme.color_system.primary.dark,
    "& > .circular-progress": {
        position: "relative",
        zIndex: 2,
    },
    "& > .circular-progress-background-container": {
        color: theme.color_system.divider.light_grey_20,
        "& > .circular-progress-background": {
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
        },
    },
    "& > .label-container": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& > .label": {
            color: theme.color_system.text.primary,
        },
    },
}));
