import { styled } from "@mui/material/styles";

import { StatisticsCardLarge } from "./StatisticsCardLarge";

export const StyledStatisticsCardLarge = styled(StatisticsCardLarge)(({ theme, iconBackground }) => ({
    color: theme.color_system.text.primary,
    padding: "11px 19px 11px 34px",
    background: theme.color_system.divider.white,
    borderRadius: "20px",
    boxShadow: theme.color_system.boxShadow.gray,
    "& > .header": {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "17px",
        "& > .avatar": {
            backgroundColor: iconBackground,
        },
        "& > .date": {
            alignSelf: "flex-start",
        },
    },
    "& > .content": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& > .left": {
            "& > .title": {
                marginBottom: "2px",
            },
            "& > .number": {},
        },
        "& > .right": {
            div: {
                "& > .trending-icon": {
                    display: "block",
                },
                "& > .percentage": {
                    display: "block",
                    textAlign: "center",
                    "&.up": {
                        color: theme.color_system.status.success.light,
                    },
                    "&.down": {
                        color: theme.color_system.status.error.light,
                    },
                },
            },
        },
    },
}));
