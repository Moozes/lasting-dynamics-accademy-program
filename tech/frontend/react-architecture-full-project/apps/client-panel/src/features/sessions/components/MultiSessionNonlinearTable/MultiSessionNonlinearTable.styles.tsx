import { styled } from "@mui/material/styles";

import { MultiSessionNonlinearTable } from "./MultiSessionNonlinearTable";

export const StyledMultiSessionNonlinearTable = styled(MultiSessionNonlinearTable)(({ theme }) => ({
    color: theme.color_system.text.primary,
    overflowX: "auto",
    "& > table": {
        width: "100%",
        overflow: "hidden",
        borderSpacing: 0,
        "& > thead": {
            ...theme.typography.body1,
            "& > tr": {
                "& > th": {
                    border: `1px solid ${theme.color_system.divider.light_grey}`,
                    borderLeft: 0,
                    whiteSpace: "nowrap",
                    padding: "16px 15px",
                    "&.first-column": {
                        textAlign: "left",
                        padding: "16px 47px",
                        borderLeft: `1px solid ${theme.color_system.divider.light_grey}`,
                        borderRadius: "10px 0 0 0",
                        width: 419,
                        ...theme.typography.h6,
                    },
                    "&.unit-header": {
                        width: 188,
                    },
                    "&.session-column": {
                        background: theme.color_system.accent.purple,
                    },
                    "&.last-column": {
                        borderRadius: "0 10px 0 0",
                    },
                },
            },
        },
        "& > tbody": {
            color: theme.color_system.text.secondary,
            ...theme.typography.h6,
            "& > tr": {
                "&.last-row": {
                    "& > .first-column": {
                        borderRadius: "0 0 0 10px",
                    },
                    "& > .last-column": {
                        borderRadius: "0 0 10px 0",
                    },
                },
                "& > td": {
                    whiteSpace: "nowrap",
                    padding: "10px 15px",
                    textAlign: "center",
                    border: `1px solid ${theme.color_system.divider.light_grey}`,
                    borderLeft: 0,
                    borderTop: 0,
                    "&.first-column": {
                        padding: "10px 47px",
                        textAlign: "left",
                        borderLeft: `1px solid ${theme.color_system.divider.light_grey}`,
                    },
                    "&.last-column": {},
                },
            },
        },
    },
}));
