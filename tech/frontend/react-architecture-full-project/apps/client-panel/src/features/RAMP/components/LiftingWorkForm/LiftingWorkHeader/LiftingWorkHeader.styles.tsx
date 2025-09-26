import { styled } from "@mui/material/styles";

import { LiftingWorkHeader } from "./LiftingWorkHeader";

export const StyledLiftingWorkHeader = styled(LiftingWorkHeader)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "55px 32px 46px",
    "& > .no-lifting-work": {
        display: "flex",
        alignItems: "center",
        marginBottom: 33,
        "& > .note-container": {
            flexGrow: 1,
            "& > .note-1": {},
            "& > .note-2": {},
        },
        "& > label": {
            display: "flex",
            alignItems: "center",
            gap: 15,
            marginRight: 15,
            "& > .text": {
                ...theme.typography.body1,
            },
        },
        "& > .comment-button": {},
    },
}));
