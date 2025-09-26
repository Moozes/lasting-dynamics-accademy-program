import { styled } from "@mui/material/styles";

import { getMediaQueryMaxWidthString } from "@utils/index";

import { PrivacyAndDataDeletionPolicyPage } from "./PrivacyAndDataDeletionPolicyPage";

export const StyledPrivacyAndDataDeletionPolicyPage = styled(PrivacyAndDataDeletionPolicyPage)(({ theme }) => ({
    color: theme.color_system.text.primary,
    minHeight: "100vh",
    background: theme.color_system.background.default,
    padding: 34,
    "& > .page-title": {
        marginBottom: 37,
        ...theme.typography.h4,
    },
    "& > .card": {
        ...theme.typography.body1,
        paddingRight: 23,
        background: theme.color_system.divider.white,
        boxShadow: theme.color_system.boxShadow.gray,
        borderRadius: 10,
        display: "flex",
        justifyContent: "stretch",
        "& > .info": {
            padding: "58px 0 60px 39px",
            "& > .text": {
                marginBottom: 20,
            },
            "& > ol": {
                margin: 0,
                padding: 0,
                listStylePosition: "inside",
                "& > li": {
                    marginBottom: 8,
                    "& > a": {
                        color: theme.color_system.status.infos.light,
                        textDecoration: "none",
                    },
                    "& > ul": {
                        margin: 0,
                        padding: 0,
                        listStyleType: "disc",
                        paddingLeft: 5,
                        "& > li": {
                            marginBottom: 8,
                        },
                    },
                },
            },
            "& > .non-admin-text": {
                marginBottom: 8,
            },
        },
        "& > .illustration-container": {
            flexShrink: 0,
            "& > .illustration": {
                height: "100%",
            },
        },
    },

    [getMediaQueryMaxWidthString("1120px")]: {
        padding: "22px 22px 22px 32px",
        "& > .page-title": {
            marginBottom: 40,
        },
        "& > .card": {
            ...theme.typography.body2,
            padding: "58px 24px 44px",
            flexDirection: "column",
            alignItems: "center",
            "& > .info": {
                padding: 0,
                marginBottom: 42,
                "& > .text": {
                    marginBottom: 30,
                },
                "& > ol": {
                    "& > li": {
                        marginBottom: 11,
                        "& > a": {},
                        "& > ul": {
                            paddingLeft: 5,
                            "& > li": {
                                marginBottom: 11,
                            },
                        },
                    },
                },
                "& > .non-admin-text": {
                    marginBottom: 9,
                },
            },
            "& > .illustration-container": {
                flexShrink: 0,
                "& > .illustration": {
                    height: "100%",
                },
            },
        },
    },
}));
