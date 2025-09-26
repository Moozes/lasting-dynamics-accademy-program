import { styled } from "@mui/material/styles";

import { PrivacyPolicyPage } from "./PrivacyPolicyPage";

export const StyledPrivacyPolicyPage = styled(PrivacyPolicyPage)(({ theme }) => ({
    color: theme.color_system.text.primary,
    minHeight: "100vh",
    background: theme.color_system.background.default,
    padding: 34,

    "& > .page-title": {
        marginBottom: 24,
        ...theme.typography.h4,
    },

    "& > .card": {
        ...theme.typography.body1,
        paddingRight: 23,
        background: theme.color_system.divider.white,
        boxShadow: theme.color_system.boxShadow.gray,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        padding: "20px",

        "& > .text": {
            marginBottom: 16,
            ...theme.typography.body1,
        },
        "& > .text-bold": {
            marginBottom: 32,
            ...theme.typography.subtitle1,
        },
        "& a": {
            color: theme.color_system.status.infos.light,
            textDecoration: "none",
        },
        "& > .list": {
            display: "flex",
            flexDirection: "column",
            gap: 8,
            marginBottom: 20,

            "& > div": {
                ...theme.typography.body1,
            },
        },

        "& > .section-title": {
            marginTop: 24,
            marginBottom: 16,
            ...theme.typography.subtitle1,
            color: theme.color_system.text.secondary,
        },

        "& > .toc-list": {
            display: "flex",
            flexDirection: "column",
            gap: 4,
            marginBottom: 20,

            "& > div": {
                ...theme.typography.body1,
            },
        },

        "& > #categories-table": {
            marginTop: 16,

            "& .section-title": {
                marginBottom: 12,
                ...theme.typography.subtitle1,
                color: theme.color_system.text.secondary,
            },

            "& .table": {
                width: "100%",
                borderCollapse: "collapse",

                "& th, & td": {
                    padding: "8px 16px",
                    border: `1px solid ${theme.color_system.divider.dark_grey}`,
                    ...theme.typography.body2,
                },

                "& th": {
                    ...theme.typography.subtitle1,
                    backgroundColor: theme.color_system.background.paper,
                    textAlign: "left",
                },

                "& td": {
                    backgroundColor: theme.color_system.background.paper,
                },

                "& .table-collected": {
                    textAlign: "center",
                },
            },
        },
    },

    "@media (max-width: 1120px)": {
        padding: "22px 22px 22px 32px",

        "& > .page-title": {
            marginBottom: 40,
        },

        "& > .card": {
            ...theme.typography.body2,
            padding: "20px",
            flexDirection: "column",

            "& > .text": {
                marginBottom: 16,
            },

            "& > .list": {
                gap: 6,
                "& > div": {},
            },

            "& > .section-title": {
                marginTop: 20,
                marginBottom: 12,
            },

            "& > .toc-list": {
                gap: 3,
                "& > div": {},
            },

            "& > #categories-table .table": {
                "& th, & td": {
                    padding: "6px 10px",
                },
            },
        },
    },
}));
