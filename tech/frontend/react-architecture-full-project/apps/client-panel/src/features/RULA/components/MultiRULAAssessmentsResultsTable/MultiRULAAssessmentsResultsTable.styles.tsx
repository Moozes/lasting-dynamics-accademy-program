import { styled } from "@mui/material/styles";

import { MULTI_ASSESSMENT_BIG_COLUMN_WIDTH, MULTI_ASSESSMENT_SMALL_COLUMN_WIDTH } from "@utils/index";

import { FinalScoreClassNamesEnum } from "../../types";

import { MultiRULAAssessmentsResultsTable } from "./MultiRULAAssessmentsResultsTable";

export const StyledMultiRULAAssessmentsResultsTable = styled(MultiRULAAssessmentsResultsTable)(({ theme }) => ({
    color: theme.color_system.text.primary,
    overflowX: "auto",
    "& > table": {
        width: "100%",
        borderCollapse: "collapse",
        "& > tbody": {
            "& > tr": {
                ...theme.typography.body1,
                "& > td": {
                    border: `1px solid ${theme.color_system.divider.light_grey}`,
                    padding: "12px 54px",
                    "&.section": {
                        background: theme.color_system.divider.light_grey_20,
                        whiteSpace: "nowrap",
                        "& > p": {
                            margin: 0,
                            marginLeft: -21,
                            ...theme.typography.h6,
                        },
                    },
                    "&.text": {
                        minWidth: MULTI_ASSESSMENT_BIG_COLUMN_WIDTH,
                        "& > p": {
                            display: "list-item",
                            margin: 0,
                        },
                    },
                    "&.score": {
                        textAlign: "center",
                        background: theme.color_system.divider.light_grey_20,
                        width: MULTI_ASSESSMENT_SMALL_COLUMN_WIDTH,
                        whiteSpace: "nowrap",
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
                },
            },
        },
    },
}));
