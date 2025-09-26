import { styled } from "@mui/material/styles";

import { SectionSummary } from "./SectionSummary";

export const StyledSectionSummary = styled(SectionSummary)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "26px 51px 30px 43px",
    background: theme.color_system.divider.white,
    boxShadow: theme.color_system.boxShadow.gray,
    borderRadius: 10,
    "& > .title": {
        marginBottom: 24,
    },

    "& > .table-container": {
        overflowX: "auto",
        "& > table": {
            borderCollapse: "collapse",
            width: "100%",
            borderRadius: 10,
            overflow: "hidden",
            "& > thead": {
                "& > tr": {
                    "& > th": {
                        border: `1px solid ${theme.color_system.divider.light_grey}`,
                        padding: "13px 16px",
                        ...theme.typography.body1,
                    },
                },
            },
            "& > tbody": {
                "& > tr": {
                    "&:nth-of-type(1)": {
                        background: theme.color_system.status.error.light,
                    },
                    "&:nth-of-type(2)": {
                        background: theme.color_system.status.warning.light,
                    },
                    "&:nth-of-type(3)": {
                        background: theme.color_system.status.success.light,
                    },
                    "& > td": {
                        border: `1px solid ${theme.color_system.divider.light_grey}`,
                        textAlign: "center",
                        padding: "13px 16px",
                        ...theme.typography.body1,
                    },
                },
            },
        },
    },
}));
