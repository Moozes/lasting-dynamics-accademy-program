import { styled } from "@mui/material/styles";

import { HorizontalVariableUnitTable } from "./HorizontalVariableUnitTable";

export const StyledHorizontalVariableUnitTable = styled(HorizontalVariableUnitTable)(({ theme }) => ({
    color: theme.color_system.text.secondary,
    ...theme.typography.h6,
    overflowX: "auto",
    "& > table": {
        width: "100%",
        overflow: "hidden",
        borderSpacing: 0,
        "& > tbody": {
            "& > tr": {
                "&.first-row": {
                    "& > td": {
                        borderTop: `1px solid ${theme.color_system.divider.light_grey}`,
                        "&.last-column": {
                            borderRadius: "0 10px 0 0",
                        },
                    },
                },
                "&.last-row": {
                    "& > td": {
                        "&.title": {
                            borderRadius: "0 0 0 10px",
                        },
                        "&.last-column": {
                            borderRadius: "0 0 10px 0",
                        },
                    },
                },
                "& > td": {
                    padding: "17px 15px 15px 15px",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    borderRight: `1px solid ${theme.color_system.divider.light_grey}`,
                    borderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
                    "&.title": {
                        color: theme.color_system.text.primary,
                        ...theme.typography.body1,
                        background: theme.color_system.primary.light_20,
                        padding: "17px 15px 19px 15px",
                        borderLeft: `1px solid ${theme.color_system.divider.light_grey}`,
                    },
                },
            },
        },
    },
}));
