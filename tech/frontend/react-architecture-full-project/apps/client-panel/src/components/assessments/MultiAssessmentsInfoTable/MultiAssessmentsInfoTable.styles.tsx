import { styled } from "@mui/material/styles";

import { MULTI_ASSESSMENT_BIG_COLUMN_WIDTH, MULTI_ASSESSMENT_SMALL_COLUMN_WIDTH } from "@utils/index";

import { MultiAssessmentsInfoTable } from "./MultiAssessmentsInfoTable";

export const StyledMultiAssessmentsInfoTable = styled(MultiAssessmentsInfoTable)(({ theme }) => ({
    color: theme.color_system.text.primary,
    overflowX: "auto",
    border: `1px solid ${theme.color_system.divider.light_grey}`,
    borderBottom: 0,
    borderRight: 0,
    borderRadius: "10px 10px 0 0",
    "& > table": {
        width: "100%",
        borderCollapse: "collapse",
        borderSpacing: 0,
        background: theme.color_system.divider.light_grey_20,
        ...theme.typography.body1,
        "& > thead": {
            "& > tr": {
                "& > th": {
                    border: `1px solid ${theme.color_system.divider.light_grey}`,
                    borderLeft: 0,
                    borderTop: 0,
                    padding: "21px 21px",
                    background: theme.color_system.divider.light_grey_20,
                    "&:first-of-type": {
                        minWidth: MULTI_ASSESSMENT_BIG_COLUMN_WIDTH,
                    },
                    "&:not(:first-of-type)": {
                        width: MULTI_ASSESSMENT_SMALL_COLUMN_WIDTH,
                        whiteSpace: "nowrap",
                    },
                },
            },
        },
        "& > tbody": {
            "& > tr": {
                "& > td": {
                    border: `1px solid ${theme.color_system.divider.light_grey}`,
                    borderLeft: 0,
                    borderTop: 0,
                    padding: "12px 34px",
                    background: theme.color_system.divider.white,
                    "&:not(:first-of-type)": {
                        maxWidth: MULTI_ASSESSMENT_SMALL_COLUMN_WIDTH,
                        hyphens: "auto",
                        msHyphens: "auto",
                        MozHyphens: "auto",
                        WebkitHyphens: "auto",
                    },
                },
                "&:last-of-type": {
                    "& > td": {
                        borderBottom: 0,
                    },
                },
            },
        },
    },
}));
