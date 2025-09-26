import { styled } from "@mui/material/styles";

import { DetailedSummaryAccordion } from "./DetailedSummaryAccordion";

export const StyledDetailedSummaryAccordion = styled(DetailedSummaryAccordion)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .accordion": {
        background: "transparent",
        borderRadius: 10,
        "& .accordion-summary": {
            padding: "13px 33px",
            border: `1px solid ${theme.color_system.divider.light_grey}`,
            "&.expanded": {
                background: theme.color_system.divider.light_grey_20,
                padding: "24px 33px",
            },
            "& > .MuiAccordionSummary-content": {
                margin: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                "& > .status-group": {
                    marginRight: 40,
                },
            },
        },
        "& .accordion-details": {
            padding: 0,
            "& > .table-title": {
                margin: "16px 0 16px 19px",
            },
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
                            ...theme.typography.h6,
                            "&.text-align-start": {
                                textAlign: "start",
                            },
                            "&.assessment": {
                                width: "10%",
                            },
                            "&.score": {
                                width: "10%",
                            },
                            "&.user-comment": {
                                width: "20%",
                            },
                        },
                    },
                },
                "& > tbody": {
                    "& > tr": {
                        "& > td": {
                            border: `1px solid ${theme.color_system.divider.light_grey}`,
                            textAlign: "center",
                            padding: "13px 16px",
                            ...theme.typography.body1,
                            "&.text-align-start": {
                                textAlign: "start",
                            },
                            "&.red": {
                                background: theme.color_system.status.error.light,
                            },
                            "&.yellow": {
                                background: theme.color_system.status.warning.light,
                            },
                            "&.green": {
                                background: theme.color_system.status.success.light,
                            },
                        },
                    },
                },
            },
        },
    },
}));
