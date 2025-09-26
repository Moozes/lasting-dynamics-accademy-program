import { styled } from "@mui/material/styles";

import { ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1, getMediaQueryMaxWidthString } from "@utils/index";

import { NumberCircle } from "./NumberCircle";

export const StyledNumberCircle = styled(NumberCircle)(({ theme }) => ({
    color: theme.color_system.primary.dark,
    ...theme.typography.subtitle1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${theme.color_system.primary.dark}`,
    borderRadius: "50%",
    width: 31,
    height: 31,
    flexShrink: 0,

    [getMediaQueryMaxWidthString(ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1)]: {
        ...theme.typography.overline,
        fontWeight: 600,
        width: 20,
        height: 20,
    },
}));
