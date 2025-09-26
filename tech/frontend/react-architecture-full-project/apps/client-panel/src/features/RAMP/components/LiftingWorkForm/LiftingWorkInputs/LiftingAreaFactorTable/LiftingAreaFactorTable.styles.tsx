import { styled } from "@mui/material/styles";

import { LiftingAreaFactorTable } from "./LiftingAreaFactorTable";

export const StyledLiftingAreaFactorTable = styled(LiftingAreaFactorTable)(({ theme }) => ({
    color: theme.color_system.text.primary,
    position: "relative",
    "& > img": {
        position: "absolute",
        top: 90,
        left: -60,
        zIndex: 1,
    },
    "& > .floating-box": {
        position: "absolute",
        top: 295,
        left: 38,
        zIndex: 3,
        height: 102,
        width: 35,
        background: theme.color_system.status.success.light,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        border: `2px solid ${theme.color_system.divider.dark_grey}`,
        cursor: "pointer",
        fontWeight: 400,
        "&:hover": { fontWeight: "bold" },
        "&.selected": {
            border: `4px solid ${theme.color_system.primary.dark}`,
        },
    },
    "& > table": {
        borderCollapse: "collapse",
        position: "relative",
        zIndex: 2,
        marginBottom: 43,
        "& > thead": {
            "& > tr": {
                "& > th": {
                    fontWeight: 400,
                },
                "& > th:nth-of-type(1)": {
                    width: 90,
                },
                "& > th:nth-of-type(2)": {
                    width: 52,
                },
                "& > th:nth-of-type(3)": {
                    width: 37,
                },
            },
        },
        "& > tbody": {
            "& > tr": {
                "&:nth-of-type(1)": {
                    height: 112,
                },
                "&:nth-of-type(2)": {
                    height: 249,
                },
                "&:nth-of-type(3)": {
                    height: 148,
                },
                "& > td": {
                    border: `1px solid ${theme.color_system.divider.dark_grey}`,
                    textAlign: "right",
                    verticalAlign: "bottom",
                    cursor: "pointer",
                    fontSize: 29,
                    fontWeight: 400,
                    "&:hover": { fontWeight: "bold" },
                    "&.selected": {
                        border: `4px solid ${theme.color_system.primary.dark}`,
                    },
                    "&.border-0": {
                        border: 0,
                        textAlign: "left",
                        verticalAlign: "top",
                        cursor: "default",
                        fontSize: 21,
                        fontWeight: 400,
                        "&:hover": { fontWeight: 400 },
                        "&.selected": {
                            border: 0,
                        },
                    },
                },
            },
        },
    },
    "& > .table-2": {
        textAlign: "center",
    },
}));
