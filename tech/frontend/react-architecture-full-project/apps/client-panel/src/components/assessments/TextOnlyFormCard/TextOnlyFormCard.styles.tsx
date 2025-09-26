import { styled } from "@mui/material/styles";

import { ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1, getMediaQueryMaxWidthString } from "@utils/index";

import { TextOnlyFormCard } from "./TextOnlyFormCard";

export const StyledTextOnlyFormCard = styled(TextOnlyFormCard)(({ theme }) => {
    return {
        color: theme.color_system.text.primary,
        background: theme.color_system.divider.white,
        padding: "20px 38px 38px 38px",
        borderRadius: 8,
        boxShadow: theme.color_system.boxShadow.gray,
        "& > .title": {
            marginBottom: 40,
        },
        "& > .group": {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 23,
            "& > .main-section": {
                display: "flex",
                alignItems: "stretch",
                flexWrap: "wrap",
                gap: 23,
                flexGrow: 1,
                "& > .item": {
                    flexGrow: 1,
                },
            },
            "& > .adjust-section": {
                borderLeft: `1px solid ${theme.color_system.divider.light_grey}`,
                padding: "0 0 0 23px",
                alignSelf: "stretch",
                flexShrink: 0,
                width: 342,
                "& > .adjust": {
                    ...theme.typography.h5,
                    marginBottom: 32,
                },
                "& > .item": {
                    marginBottom: 34,
                },
            },
        },

        [getMediaQueryMaxWidthString(ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1)]: {
            padding: "14px 19px 19px 19px",
            "& > .title": {
                marginBottom: 33,
                ...theme.typography.h6,
            },
            "& > .group": {
                "& > .main-section": {
                    "& > .item": {},
                },
                "& > .adjust-section": {},
            },
        },
    };
});
