import { styled } from "@mui/material/styles";

import { OvalShape } from "./OvalShape";

const shouldForwardProp = (prop: string) =>
    prop !== "width" && prop !== "height" && prop !== "borderRadius" && prop !== "backgroundColor";

export const StyledOvalShape = styled(OvalShape, { shouldForwardProp })(
    ({ theme, width, height, borderRadius, backgroundColor }) => ({
        width: width || 70,
        height: height || 30,
        background: backgroundColor || theme.color_system.status.success.light,
        borderRadius: borderRadius || 9,
        display: "inline-block",
    })
);
