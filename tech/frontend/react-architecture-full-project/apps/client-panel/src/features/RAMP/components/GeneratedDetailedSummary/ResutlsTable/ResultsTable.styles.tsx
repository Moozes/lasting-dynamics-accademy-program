import { styled } from "@mui/material/styles";

import { ResultsTable } from "./ResultsTable";

export const StyledResultsTable = styled(ResultsTable)(({ theme }) => ({
    color: theme.color_system.text.primary,
    overflowX: "auto",
    "& > table": {
        width: "100%",
        overflow: "hidden",
        borderCollapse: "collapse",
        ...theme.typography.body1,
        "& > thead": {
            "& > tr": {
                "& > th": {
                    padding: 12,
                    textAlign: "center",
                    border: `1px solid ${theme.color_system.divider.light_grey}`,
                    borderTop: 0,
                    whiteSpace: "nowrap",
                    "&:nth-of-type(2)": {
                        textAlign: "left",
                        width: "50%",
                    },
                },
            },
        },
        "& > tbody": {
            "& > tr": {
                "& > td": {
                    border: `1px solid ${theme.color_system.divider.light_grey}`,
                    textAlign: "center",
                    verticalAlign: "center",
                    padding: 12,
                    "&:nth-of-type(1)": {
                        verticalAlign: "top",
                    },
                    "&:nth-of-type(2)": {
                        verticalAlign: "top",
                        textAlign: "left",
                    },
                },
            },
        },
    },
}));
