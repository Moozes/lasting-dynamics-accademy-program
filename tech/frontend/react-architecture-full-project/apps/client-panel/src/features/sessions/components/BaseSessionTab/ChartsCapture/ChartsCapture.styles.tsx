import { styled } from "@mui/material/styles";

import { ChartsCapture } from "./ChartsCapture";

export const StyledChartsCapture = styled(ChartsCapture)(({}) => ({
    "& > .charts-container": {
        position: "absolute",
        top: "-9999px",
        left: "-9999px",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        opacity: 0,
    },
}));
