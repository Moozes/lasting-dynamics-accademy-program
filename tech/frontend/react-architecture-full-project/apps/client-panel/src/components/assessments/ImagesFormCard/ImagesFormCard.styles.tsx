import { styled } from "@mui/material/styles";

import { ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1, getMediaQueryMaxWidthString } from "@utils/index";

import { ImagesFormCard } from "./ImagesFormCard";

export const StyledImagesFormCard = styled(ImagesFormCard)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "20px 30px 0 38px",
    background: theme.color_system.divider.white,
    borderRadius: 10,
    boxShadow: theme.color_system.boxShadow.gray,
    "& > .title": {
        marginBottom: 18,
    },
    "& > .main": {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 23,
        "& > .radio-buttons": {
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            padding: "16px 0 34px 0",
            "& > .item": {},
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
            "& > .checkbox-image": {
                textAlign: "center",
            },
        },
    },

    [getMediaQueryMaxWidthString(ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1)]: {
        padding: "13px 22px 0 19px",
        "& > .title": {
            marginBottom: 16,
            ...theme.typography.h6,
        },
        "& > .main": {
            gap: 16,
            "& > .radio-buttons": {
                gap: 12,
                padding: "4px 0 12px 0",
                "& > .item": {},
            },
            "& > .adjust-section": {
                padding: "0 0 0 13px",
                width: 288,
                "& > .item": {
                    marginBottom: 17,
                },
            },
        },
    },
}));
