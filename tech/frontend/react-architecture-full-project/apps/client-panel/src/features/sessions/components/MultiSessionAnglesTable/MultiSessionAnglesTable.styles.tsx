import { styled } from "@mui/material/styles";

import { MULTI_SESSION_TABLE_COLUMN_WIDTH } from "../../utils";

import { MultiSessionAnglesTable } from "./MultiSessionAnglesTable";

export const StyledMultiSessionAnglesTable = styled(MultiSessionAnglesTable)(({ theme }) => ({
    color: theme.color_system.text.primary,
    overflowX: "auto",
    "& > table": {
        overflow: "hidden",
        border: `1px solid ${theme.color_system.divider.light_grey}`,
        borderCollapse: "collapse",
        width: "100%",
        "& > thead": {
            "& > tr": {
                "& > th": {
                    textAlign: "center",
                    padding: "13px 15px 10px 15px",
                    whiteSpace: "nowrap",
                    border: `1px solid ${theme.color_system.divider.light_grey}`,
                    ...theme.typography.body1,
                    "&.table-title": {
                        width: MULTI_SESSION_TABLE_COLUMN_WIDTH,
                        background: theme.color_system.accent.purple,
                    },
                    "&.session-column": {},
                    "&.session-sub-column": {},
                },
            },
        },
        "& > tbody": {
            "& > tr": {
                "& > td": {
                    textAlign: "center",
                    padding: "10px",
                    border: `1px solid ${theme.color_system.divider.light_grey}`,
                    color: theme.color_system.text.secondary,
                    ...theme.typography.h6,
                    "&.scale": {
                        background: theme.color_system.primary.light_20,
                        whiteSpace: "nowrap",
                    },
                },
            },
        },
    },
}));
