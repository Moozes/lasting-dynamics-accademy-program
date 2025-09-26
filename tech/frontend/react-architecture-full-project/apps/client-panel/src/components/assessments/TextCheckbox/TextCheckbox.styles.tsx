import { styled } from "@mui/material/styles";

import { ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1, getMediaQueryMaxWidthString } from "@utils/index";

import { TextCheckbox } from "./TextCheckbox";

export const StyledTextCheckbox = styled(TextCheckbox)(({ theme }) => ({
    color: theme.color_system.text.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    "& > label": {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        "& > .text": {
            ...theme.typography.h5,
        },
    },
    "&.border": {
        borderRadius: 8,
        padding: "25px 10px",
        border: `1px solid ${theme.color_system.divider.light_grey}`,
        "&.selected": {
            border: `1px solid ${theme.color_system.primary.dark}`,
        },

        "& > label": {
            "& > .text": {
                ...theme.typography.h6,
            },
        },
    },
    "& > .number-circle": {},

    [getMediaQueryMaxWidthString(ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1)]: {
        "&.border": {
            padding: "20px 16px",
            "&.selected": {},
            "& > label": {
                "& > .text": {
                    ...theme.typography.caption,
                },
            },
        },
        "& > label": {
            "& > .text": {
                ...theme.typography.caption,
            },
        },
        "& > .number-circle": {},
    },
}));
