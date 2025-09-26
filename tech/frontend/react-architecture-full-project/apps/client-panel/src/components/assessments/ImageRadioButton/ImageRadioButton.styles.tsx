import { styled } from "@mui/material/styles";

import { ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1, getMediaQueryMaxWidthString } from "@utils/index";

import { ImageRadioButton } from "./ImageRadioButton";

export const StyledImageRadioButton = styled(ImageRadioButton)(({ theme }) => ({
    color: theme.color_system.text.primary,
    border: `1px solid ${theme.color_system.divider.light_grey}`,
    borderRadius: 8,
    display: "inline-block",
    position: "relative",
    overflow: "hidden",
    width: 220,
    "&.selected": {
        border: `1px solid ${theme.color_system.primary.dark}`,
    },
    "& > .image-container": {
        height: 175,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        padding: "8px 0",
    },
    "& > .form-control": {
        padding: "0 19px",
        background: theme.color_system.primary.light_20,
        borderTop: `1px solid ${theme.color_system.divider.light_grey}`,
        height: 55,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& > label": {
            display: "flex",
            alingItems: "center",
            gap: 8,
            "& > .text": {
                ...theme.typography.body2,
            },
        },
    },
    "& > .number-circle": {
        position: "absolute",
        top: 8,
        right: 10,
    },

    [getMediaQueryMaxWidthString(ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1)]: {
        width: 140,
        "&.selected": {},
        "& > .image-container": {
            height: 120,
            padding: "5px 0",
            img: {
                height: "calc(100% - 10px)",
            },
        },
        "& > .form-control": {
            padding: "0 10px",
            height: 35,
            "& > label": {
                display: "flex",
                alingItems: "center",
                gap: 8,
                "& > .text": {
                    ...theme.typography.caption,
                },
            },
        },
        "& > .number-circle": {
            top: 5,
            right: 6,
        },
    },
}));
