import { styled } from "@mui/material/styles";

import { MECStatusEnum } from "@features/MEC/types";

import { MultiMECAssessmentsResultsTable } from "./MultiMECAssessmentsResultsTable";

const COLUMN_WIDTH = 224;

export const StyledMultiMECAssessmentsResultsTable = styled(MultiMECAssessmentsResultsTable)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .table-container": {
        overflowX: "auto",
        "& > table": {
            width: "100%",
            borderSpacing: 0,
            borderLeft: `1px solid ${theme.color_system.divider.light_grey}`,
            borderTop: `1px solid ${theme.color_system.divider.light_grey}`,
            "& > tbody": {
                "& > tr": {
                    "& > td": {
                        borderRight: `1px solid ${theme.color_system.divider.light_grey}`,
                        borderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
                        ...theme.typography.body1,
                        padding: 12,
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        "&.thick-border-right": {
                            borderRight: `3px solid ${theme.color_system.divider.light_grey}`,
                        },
                        "&.data-cell": {
                            whiteSpace: "normal",
                        },
                        "&.title": {
                            textAlign: "left",
                            padding: "12px 33px",
                            ...theme.typography.h5,
                        },
                        "&.assessment-column-2-subquestions": {
                            width: 425,
                        },
                        "&.assessment-column-3-subquestions": {
                            width: 201,
                        },
                        "&.illustration-column": {
                            width: COLUMN_WIDTH,
                            verticalAlign: "top",
                            "& > .sub-question-number": {
                                textAlign: "left",
                            },
                        },
                        "&.count-freq-column": {
                            width: COLUMN_WIDTH / 2,
                            whiteSpace: "normal",
                        },
                        "&.time-column": {
                            width: COLUMN_WIDTH / 2,
                            whiteSpace: "normal",
                        },
                        "&.result-column": {
                            width: 73,
                        },
                        "&.justification-column": {
                            width: COLUMN_WIDTH,
                        },
                        [`&.${MECStatusEnum.GREEN}`]: {
                            background: theme.color_system.status.success.light,
                        },
                        [`&.${MECStatusEnum.YELLOW}`]: {
                            background: theme.color_system.status.warning.light,
                        },
                        [`&.${MECStatusEnum.RED}`]: {
                            background: theme.color_system.status.error.light,
                        },
                    },
                },
            },
        },
    },
}));
