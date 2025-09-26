import { styled } from "@mui/material/styles";

import { ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1, getMediaQueryMaxWidthString } from "@utils/index";

import { CheckboxCard } from "./CheckboxCard";

export const StyledCheckboxCard = styled(CheckboxCard)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "28px 37px",
    background: theme.color_system.divider.white,
    borderRadius: 10,
    boxShadow: theme.color_system.boxShadow.gray,
    "& > label": {
        display: "flex",
        alingItems: "center",
        gap: 23,
        "& > .text": {
            ...theme.typography.body1,
        },
    },

    [getMediaQueryMaxWidthString(ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1)]: {
        padding: "19px 22px",
    },
}));
