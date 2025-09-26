import { styled } from "@mui/material/styles";

import { MultiSessionTemperatureTable } from "./MultiSessionTemperatureTable";

export const StyledMultiSessionTemperatureTable = styled(MultiSessionTemperatureTable)(({ theme }) => ({
    color: theme.color_system.text.primary,
    ...theme.typography.body1,
    overflowX: "auto",
    "& > table": {
        width: "100%",
        overflow: "hidden",
        borderSpacing: 0,
        "& > thead": {
            "& > tr": {
                "& > th": {
                    "&.session-column": {
                        padding: "13px 5px",
                        background: theme.color_system.accent.purple,
                        borderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
                        borderRight: `1px solid ${theme.color_system.primary.dark}`,
                        "&.first-column": {
                            borderTopLeftRadius: 10,
                        },
                        "&.last-column": {
                            borderTopRightRadius: 10,
                            borderRight: 0,
                        },
                    },
                    "&.limbs": {
                        padding: "15px 15px 13px 15px",
                        whiteSpace: "nowrap",
                        background: theme.color_system.primary.light_20,
                        border: `1px solid ${theme.color_system.divider.light_grey}`,
                    },
                    "&.session-sub-column": {
                        padding: "15px 15px 13px 15px",
                        whiteSpace: "nowrap",
                        borderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
                        borderRight: `1px solid ${theme.color_system.divider.light_grey}`,
                    },
                },
            },
        },
        "& > tbody": {
            "& > tr": {
                "&.last-row": {
                    "& > td": {
                        "&.limb": {
                            borderEndStartRadius: 10,
                        },
                        "&.temperature": {
                            "&.bottom-left-cell": {
                                borderEndEndRadius: 10,
                            },
                        },
                    },
                },
                "& > td": {
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    "&.limb": {
                        background: theme.color_system.primary.light_20,
                        padding: "11px 15px 12px 15px",
                        borderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
                        borderRight: `1px solid ${theme.color_system.divider.light_grey}`,
                        borderLeft: `1px solid ${theme.color_system.divider.light_grey}`,
                    },
                    "&.temperature": {
                        ...theme.typography.h6,
                        color: theme.color_system.text.secondary,
                        padding: "12px 15px 5px 15px",
                        borderRight: `1px solid ${theme.color_system.divider.light_grey}`,
                        borderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
                    },
                },
            },
        },
    },
}));
