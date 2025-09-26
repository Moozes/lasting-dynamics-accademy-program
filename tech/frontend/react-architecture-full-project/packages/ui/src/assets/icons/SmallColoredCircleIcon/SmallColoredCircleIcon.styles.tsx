import { styled } from "@mui/material/styles";

import { SmallColoredCircleIcon } from "./SmallColoredCircleIcon";

export const StyledSmallColoredCircleIcon = styled(SmallColoredCircleIcon, {
    shouldForwardProp: (prop) => prop !== "bgColor",
})(({ height = 14, width = 14, bgColor = "black" }) => ({
    display: "inline-block",
    height,
    width,
    background: bgColor,
    borderRadius: "50%",
}));
