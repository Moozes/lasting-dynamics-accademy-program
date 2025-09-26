import { styled } from "@mui/material/styles";

import { ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1, getMediaQueryMaxWidthString } from "@utils/index";

import { FinalScoreClassNamesEnum } from "../../types";

import { DetailedSummary } from "./DetailedSummary";

export const StyledDetailedSummary = styled(DetailedSummary)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "34px 62px 69px 63px",
    background: theme.color_system.divider.white,
    boxShadow: theme.color_system.boxShadow.gray,
    borderRadius: 10,
    "& > table": {
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: 46,
        "& > thead": {
            "& > tr": {
                "& > th": {
                    border: `1px solid ${theme.color_system.divider.light_grey}`,
                    textAlign: "left",
                    padding: "31px 54px",
                    ...theme.typography.h4,
                    background: theme.color_system.divider.light_grey_20,
                },
            },
        },
        "& > tbody": {
            "& > tr": {
                ...theme.typography.h5,
                "& > td": {
                    border: `1px solid ${theme.color_system.divider.light_grey}`,
                    padding: "12px 54px",
                    "&.section": {
                        background: theme.color_system.primary.light_20,
                        "& > p": {
                            margin: 0,
                            marginLeft: -21,
                            ...theme.typography.h5,
                        },
                    },
                    "&.text": {
                        width: "80%",
                        "& > p": {
                            display: "list-item",
                            margin: 0,
                        },
                    },
                    "&.score": {
                        textAlign: "center",
                        background: theme.color_system.primary.light_20,
                        [`&.${FinalScoreClassNamesEnum.veryLow}`]: {
                            background: theme.color_system.status.success.light,
                        },
                        [`&.${FinalScoreClassNamesEnum.low}`]: {
                            background: theme.color_system.status.warning.light,
                        },
                        [`&.${FinalScoreClassNamesEnum.medium}`]: {
                            background: theme.color_system.status.error.light,
                        },
                        [`&.${FinalScoreClassNamesEnum.high}`]: {
                            background: theme.color_system.status.error.dark,
                        },
                    },
                    "&.empty-row": {
                        height: 34,
                        borderLeft: 0,
                        borderRight: 0,
                    },
                    "&.detailed-summary-title": {
                        ...theme.typography.h4,
                        paddingTop: 31,
                        paddingBottom: 32,
                        background: theme.color_system.divider.light_grey_20,
                    },
                },
            },
        },
    },

    [getMediaQueryMaxWidthString(ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1)]: {
        padding: "20px 36px 32px 20px",
        "& > table": {
            "& > thead": {
                "& > tr": {
                    "& > th": {
                        padding: "31px 37px",
                    },
                },
            },
            "& > tbody": {
                "& > tr": {
                    ...theme.typography.h6,
                    "& > td": {
                        padding: "12px 34px",
                        "&.section": {
                            "& > p": {
                                marginLeft: -21,
                                ...theme.typography.h6,
                            },
                        },
                        "&.text": {
                            width: "80%",
                            "& > p": {},
                        },
                        "&.score": {
                            [`&.${FinalScoreClassNamesEnum.veryLow}`]: {},
                            [`&.${FinalScoreClassNamesEnum.low}`]: {},
                            [`&.${FinalScoreClassNamesEnum.medium}`]: {},
                            [`&.${FinalScoreClassNamesEnum.high}`]: {},
                        },
                        "&.empty-row": {},
                        "&.detailed-summary-title": {},
                    },
                },
            },
        },
    },
}));
