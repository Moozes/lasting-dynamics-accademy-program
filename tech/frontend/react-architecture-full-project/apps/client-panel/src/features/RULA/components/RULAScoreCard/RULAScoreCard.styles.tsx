import { styled } from "@mui/material/styles";

import { ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1, getMediaQueryMaxWidthString } from "@utils/index";

import { RULAScoreCard } from "./RULAScoreCard";

const OVAL_WIDTH = "89px";
const OVAL_WIDTH_SMALL = "48px";

export const StyledRULAScoreCard = styled(RULAScoreCard)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "26px 81px 39px 43px",
    background: theme.color_system.divider.white,
    boxShadow: theme.color_system.boxShadow.gray,
    borderRadius: 10,
    "& > .title": {
        marginBottom: 11,
    },
    "& > .sub-title-container": {
        marginBottom: 30,
        color: theme.color_system.text.secondary,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        "& > .sub-title": {
            width: OVAL_WIDTH,
            textAlign: "center",
        },
    },
    "& > .risk-score-container": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "&.mb": {
            marginBottom: 17,
        },
        "& > .text": {},
        "& > .oval": {
            width: OVAL_WIDTH,
            height: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
            ...theme.typography.body1,
            "&.very-high-risk": {
                background: theme.color_system.status.error.dark,
            },
            "&.medium-risk": {
                background: theme.color_system.status.error.light,
            },
            "&.low-risk": {
                background: theme.color_system.status.warning.light,
            },
            "&.negligible-risk": {
                background: theme.color_system.status.success.light,
            },
        },
    },

    [getMediaQueryMaxWidthString(ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1)]: {
        padding: "26px 81px 39px 43px",
        "& > .title": {
            marginBottom: 19,
            ...theme.typography.h6,
        },
        "& > .sub-title-container": {
            marginBottom: 13,
            "& > .sub-title": {
                width: OVAL_WIDTH_SMALL,
                textAlign: "center",
                ...theme.typography.subtitle2,
            },
        },
        "& > .risk-score-container": {
            "&.mb": {
                marginBottom: 10,
            },
            "& > .text": {
                ...theme.typography.body2,
            },
            "& > .oval": {
                width: OVAL_WIDTH_SMALL,
                height: 20,
                ...theme.typography.overline,
                fontWeight: 600,
                "&.very-high-risk": {
                    background: theme.color_system.status.error.dark,
                },
                "&.medium-risk": {
                    background: theme.color_system.status.error.light,
                },
                "&.low-risk": {
                    background: theme.color_system.status.warning.light,
                },
                "&.negligible-risk": {
                    background: theme.color_system.status.success.light,
                },
            },
        },
    },
}));
