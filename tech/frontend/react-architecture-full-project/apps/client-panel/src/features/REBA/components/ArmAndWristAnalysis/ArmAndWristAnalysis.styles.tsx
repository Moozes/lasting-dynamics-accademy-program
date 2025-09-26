import { styled } from "@mui/material/styles";

import { FORM_CARD_MARGIN_BOTTOM, FORM_CARD_MARGIN_BOTTOM_SMALL } from "@features/REBA/utils";
import { ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1, getMediaQueryMaxWidthString } from "@utils/index";

import { ArmAndWristAnalysis } from "./ArmAndWristAnalysis";

export const StyledArmAndWristAnalysis = styled(ArmAndWristAnalysis)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .form-card": {
        marginBottom: FORM_CARD_MARGIN_BOTTOM,
    },
    [getMediaQueryMaxWidthString(ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1)]: {
        "& > .form-card": {
            marginBottom: FORM_CARD_MARGIN_BOTTOM_SMALL,
        },
    },
}));
