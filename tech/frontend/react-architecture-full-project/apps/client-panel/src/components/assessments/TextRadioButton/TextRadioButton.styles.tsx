import { styled } from "@mui/material/styles";

import { ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1, getMediaQueryMaxWidthString } from "@utils/index";

import { TextRadioButton } from "./TextRadioButton";

export const StyledTextRadioButton = styled(TextRadioButton)(({ theme }) => ({
    color: theme.color_system.text.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    "&.border": {
        padding: "25px 10px",
        border: `1px solid ${theme.color_system.divider.light_grey}`,
        borderRadius: 8,
        "&.selected": {
            border: `1px solid ${theme.color_system.primary.dark}`,
        },
        "& > label": {
            "& > .text": {
                ...theme.typography.h6,
            },
        },
    },
    "& > label": {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        "& > .text": {
            ...theme.typography.h5,
        },
    },
    "& > .number-circle": {},

    [getMediaQueryMaxWidthString(ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1)]: {
        "&.border": {
            padding: "20px 16px",
            "&.selected": {
                border: `1px solid ${theme.color_system.primary.dark}`,
            },
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
