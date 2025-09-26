import { styled } from "@mui/material/styles";

import { ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1, getMediaQueryMaxWidthString } from "@utils/index";

import { LegsFormCard } from "./LegsFormCard";

const paddingLeft = 51;
const paddingLeftSmall = 13;

export const StyledLegsFormCard = styled(LegsFormCard)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "20px 34px 34px 38px",
    borderRadius: 10,
    background: theme.color_system.divider.white,
    boxShadow: theme.color_system.boxShadow.gray,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: paddingLeft,
    "& > .main-section": {
        "& > .title": {
            marginBottom: 34,
        },
        "& > .content": {
            display: "flex",
            alignItems: "stretch",
            gap: 20,
            "& > .item": {},
        },
    },
    "& > .adjust-section": {
        // width: "x"
        "& > .title": {
            marginBottom: 36,
            paddingLeft,
        },
        "& > .content": {
            paddingLeft,
            borderLeft: `1px solid ${theme.color_system.divider.light_grey}`,
            display: "flex",
            alignItems: "stretch",
            gap: 20,
            flexWrap: "wrap",
            "& > .item": {},
        },
    },

    [getMediaQueryMaxWidthString(ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1)]: {
        padding: "13px 19px 40px",
        gap: paddingLeftSmall,
        "& > .main-section": {
            "& > .title": {
                marginBottom: 15,
                ...theme.typography.h6,
            },
            "& > .content": {
                gap: 12,
                "& > .item": {},
            },
        },
        "& > .adjust-section": {
            "& > .title": {
                marginBottom: 15,
                paddingLeft: paddingLeftSmall,
                ...theme.typography.h6,
            },
            "& > .content": {
                paddingLeft: paddingLeftSmall,
                gap: 12,
                "& > .item": {},
            },
        },
    },
}));
