import { styled } from "@mui/material/styles";

import { SessionsStatistics } from "./SessionsStatistics";

export const StyledSessionsStatistics = styled(SessionsStatistics)(({ theme }) => ({
    color: theme.color_system.text.primary,
    display: "flex",
    borderRadius: "18px",
    background: theme.color_system.divider.white,
    boxShadow: theme.color_system.boxShadow.gray,
    position: "relative",
    "& > .left": {
        flexGrow: 1,
        flexBasis: "57%",
        padding: "24px 25px 22px 27px",
        display: "flex",
        flexDirection: "column",
        "& > .title": {
            marginBottom: "12px",
        },
        "& > .grid": {
            display: "flex",
            alignItems: "stretch",
            gap: "12.3px",
            flexWrap: "wrap",
            flexGrow: 1,
            "&:nth-of-type(1)": { marginBottom: "12.3px" },
            "& > .stat-card": {
                flexGrow: 1,
                flexBasis: 0,
            },
        },
    },
    "& > .divider": {
        borderColor: theme.color_system.divider.light_grey_20,
    },
    "& > .right": {
        flexGrow: 1,
        padding: "61px 44px 22px 30px",
        flexBasis: "42%",
        "& > .grid": {
            display: "flex",
            alignItems: "stretch",
            gap: "12.3px",
            flexWrap: "wrap",
            "&:nth-of-type(1)": { marginBottom: "12.3px" },
            "& > .stat-card": {
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: 0,
                "&.last": {
                    flexGrow: 0,
                    flexBasis: "calc(50% - 5px)",
                },
            },
        },
    },
    "& > .date-select-input": {
        position: "absolute",
        top: "12px",
        right: "10px",
    },

    "@media only screen and (max-width: 957px)": {
        "& > .left": {
            "& > .grid": {
                flexDirection: "column",
            },
        },
        "& > .right": {
            "& > .grid": {
                flexDirection: "column",
            },
        },
    },
}));
