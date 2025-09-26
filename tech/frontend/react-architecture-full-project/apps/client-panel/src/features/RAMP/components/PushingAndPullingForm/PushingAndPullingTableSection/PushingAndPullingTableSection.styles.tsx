import { styled } from "@mui/material/styles";

import { RAMP_DETAILS_BREAK_POINT } from "@features/RAMP/utils";
import { getMediaQueryMaxWidthString } from "@utils/index";

import { PushingAndPullingTableSection } from "./PushingAndPullingTableSection";

export const StyledPushingAndPullingTableSection = styled(PushingAndPullingTableSection)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "76px 31px 28px 31px",
    "& > .table-container": {
        overflowX: "auto",
        "& > table": {
            borderCollapse: "collapse",
            width: "100%",
            marginBottom: 41,
            ...theme.typography.h4,
            "& > thead": {
                "& > tr": {
                    "& > th": {
                        padding: "18px 22px",
                        textAlign: "left",
                        border: `1.5px solid ${theme.color_system.divider.light_grey}`,
                        "&.head-1": {
                            background: theme.color_system.accent.grey,
                        },
                        "&.center": {
                            textAlign: "center",
                            width: 198,
                        },
                    },
                },
            },
            "& > tbody": {
                "& > tr": {
                    "& > td": {
                        textAlign: "center",
                        padding: "18px 30px",
                        border: `1.5px solid ${theme.color_system.divider.light_grey}`,
                        "&.text": {
                            textAlign: "left",
                        },
                        "&.head-1": {
                            background: theme.color_system.accent.grey,
                            fontWeight: "bold",
                        },
                        "&.empty-row": {
                            height: 55,
                            borderLeft: 0,
                            borderRight: 0,
                        },
                        "& > .no-factor-container": {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            "& > label": {
                                display: "flex",
                                alignItems: "center",
                                gap: 15,
                                "& > .text": {
                                    ...theme.typography.body1,
                                },
                            },
                        },
                    },
                },
            },
        },
    },

    "& > .result-section": {
        display: "flex",
        alignItems: "start",
        flexWrap: "wrap",
        "& > .comment-container": {
            marginRight: 31,
            flexBasis: "40%",
            "& > .comment": {},
        },
        "& > .score-info": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            marginRight: 23,
            "& > .title": {},
            "& > .score": {},
        },
        "& > .color-info": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 19,
            "& > .title": {},
            "& > .color-circle": {
                width: 21,
                height: 21,
                borderRadius: "50%",
                "&.danger": {
                    background: theme.color_system.status.error.light,
                },
                "&.medium": {
                    background: theme.color_system.status.warning.light,
                },
                "&.normal": {
                    background: theme.color_system.status.success.light,
                },
            },
        },
        "& > .empty": {
            flexGrow: 1,
        },
        "& > .risk-scores-container": {
            display: "flex",
            alignItems: "start",
            "& > .risk-scores": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                alignSelf: "center",
                gap: 14,
                "&.initial-force": { marginRight: 26 },
                "& > .risk-score": {
                    display: "flex",
                    alignItems: "center",
                    gap: 21,
                    ...theme.typography.h4,
                },
            },
        },
    },

    [getMediaQueryMaxWidthString(RAMP_DETAILS_BREAK_POINT)]: {
        padding: "32px 30px 28px 30px",
        "& > .table-container": {
            "& > table": {
                marginBottom: 36,
                ...theme.typography.subtitle1,
                "& > thead": {
                    "& > tr": {
                        "& > th": {
                            padding: "11px 18px",
                            "&.head-1": {},
                            "&.center": {},
                        },
                    },
                },
                "& > tbody": {
                    "& > tr": {
                        "& > td": {
                            padding: "11px 18px",
                            "&.text": {},
                            "&.head-1": {},
                            "&.empty-row": {},
                            "& > .no-factor-container": {},
                        },
                    },
                },
            },
        },

        "& > .result-section": {
            "& > .comment-container": {
                "& > .comment": {},
            },
            "& > .score-info": {
                marginRight: 23,
                "& > .title": {},
                "& > .score": {},
            },
            "& > .color-info": {
                "& > .title": {},
                "& > .color-circle": {
                    "&.danger": {},
                    "&.medium": {},
                    "&.normal": {},
                },
            },
            "& > .empty": {},
            "& > .risk-scores-container": {
                "& > .risk-scores": {
                    "&.initial-force": {},
                    "& > .risk-score": {},
                },
            },
        },
    },
}));
