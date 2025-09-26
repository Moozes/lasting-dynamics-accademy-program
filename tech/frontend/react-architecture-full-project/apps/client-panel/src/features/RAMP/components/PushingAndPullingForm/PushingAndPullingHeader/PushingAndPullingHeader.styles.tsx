import { styled } from "@mui/material/styles";

import { PushingAndPullingHeader } from "./PushingAndPullingHeader";

export const StyledPushingAndPullingHeader = styled(PushingAndPullingHeader)(({ theme }) => ({
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
    "& > .info": {
        display: "flex",
        alignItems: "center",
        gap: 26,
        marginBottom: 42,
        "& > .info-text": {},
        "& > .icon-button": {
            padding: 0,
        },
    },
}));
