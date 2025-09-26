import { styled } from "@mui/material/styles";

import { MULTI_SESSION_TABLE_COLUMN_WIDTH } from "../../utils";

import { MultiSessionWorkersTable } from "./MultiSessionWorkersTable";

export const StyledMultiSessionWorkersTable = styled(MultiSessionWorkersTable)(({ theme }) => ({
    color: theme.color_system.text.primary,
    ...theme.typography.body1,
    overflowX: "auto",
    "& > table": {
        overflow: "hidden",
        width: "100%",
        borderSpacing: 0,
        "& > thead": {
            "& > tr": {
                "& > th": {
                    textAlign: "center",
                    padding: "13px 15px",
                    whiteSpace: "nowrap",
                    border: `1px solid ${theme.color_system.divider.light_grey}`,
                    borderLeft: 0,
                    background: theme.color_system.primary.light_20,
                    "&.table-title": {
                        width: MULTI_SESSION_TABLE_COLUMN_WIDTH,
                    },
                    "&.first-Column": {
                        borderLeft: `1px solid ${theme.color_system.divider.light_grey}`,
                        borderRadius: "10px 0 0 0",
                    },
                    "&.last-column": {
                        borderRadius: "0 10px 0 0",
                    },
                },
            },
        },
        "& > tbody": {
            "& > tr": {
                "& > td": {
                    border: `1px solid ${theme.color_system.divider.light_grey}`,
                    borderTop: 0,
                    borderLeft: 0,
                    textAlign: "center",
                    padding: "13px 15px",
                    whiteSpace: "nowrap",
                    "&.first-Column": {
                        borderLeft: `1px solid ${theme.color_system.divider.light_grey}`,
                    },
                },
                "&.last-row": {
                    "& > td": {
                        "&.first-Column": {
                            borderRadius: "0 0 0 10px",
                        },
                        "&.last-column": {
                            borderRadius: "0 0 10px 0",
                        },
                    },
                },
            },
        },
    },
}));
