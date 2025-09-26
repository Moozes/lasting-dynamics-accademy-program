import { styled } from "@mui/material/styles";

import { AssignTime } from "./AssignTime";

export const StyledAssignTime = styled(AssignTime)(({ theme }) => ({
    color: theme.color_system.text.secondary,
    borderRadius: 8,
    padding: "15px 15px 0 15px",
    background: theme.color_system.divider.white,
    overflow: "hidden",
    boxShadow: theme.color_system.boxShadow.purple_20,
    "& > .text": {
        ...theme.typography.subtitle2,
        marginBottom: 13,
    },
    "& > .radio-group": {
        display: "flex",
        alignItems: "center",
        gap: 20,
        marginBottom: 15,
        "& > label": {
            display: "flex",
            alignItems: "center",
            gap: 8,
            "& > .text": {
                ...theme.typography.body2,
            },
        },
    },
    "& > hr": {
        marginBottom: 15,
    },
    "& > .time-frame": {
        display: "flex",
        alignItems: "center",
        gap: 20,
        "& > .time-input": {
            flexGrow: 1,
        },
    },
}));
