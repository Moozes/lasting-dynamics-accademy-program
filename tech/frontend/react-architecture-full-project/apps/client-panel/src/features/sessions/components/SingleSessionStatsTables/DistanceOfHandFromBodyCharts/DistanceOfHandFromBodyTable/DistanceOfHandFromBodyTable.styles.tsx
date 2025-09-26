import { styled } from "@mui/material/styles";

import { DistanceOfHandFromBodyTable } from "./DistanceOfHandFromBodyTable";

export const StyledDistanceOfHandFromBodyTable = styled(DistanceOfHandFromBodyTable)(({ theme }) => ({
    overflowX: "auto",
    "& > table": {
        borderSpacing: 0,
        width: "100%",
        "& > thead": {
            "& > tr": {
                color: theme.color_system.text.primary,
                "& > td": {
                    ...theme.typography.body1,
                    background: theme.color_system.primary.light_20,
                    padding: 18,
                    textAlign: "center",
                    borderRight: `1px solid ${theme.color_system.divider.light_grey}`,
                    borderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
                },
                "& > td[colspan='2']": {
                    ...theme.typography.subtitle1,
                    textAlign: "center",
                },
            },
        },
        "& > tbody": {
            "& > tr": {
                color: theme.color_system.text.secondary,
                "& > td": {
                    ...theme.typography.body1,
                    padding: 10,
                    textAlign: "center",
                    borderRight: `1px solid ${theme.color_system.divider.light_grey}`,
                    borderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
                },
            },
        },
    },
    // utility classes
    "& td.bt": {
        borderTop: `1px solid ${theme.color_system.divider.light_grey}`,
    },
    "& td.bl": {
        borderLeft: `1px solid ${theme.color_system.divider.light_grey}`,
    },
    "& td.brtl": {
        borderTopLeftRadius: "10px",
    },
    "& td.brtr": {
        borderTopRightRadius: "10px",
    },
    "& td.brbl": {
        borderBottomLeftRadius: "10px",
        borderRadius: "0 0 0 10px",
    },
    "& td.brbr": {
        borderBottomRightRadius: "10px",
        borderRadius: "0 0 10px 0",
    },
}));
