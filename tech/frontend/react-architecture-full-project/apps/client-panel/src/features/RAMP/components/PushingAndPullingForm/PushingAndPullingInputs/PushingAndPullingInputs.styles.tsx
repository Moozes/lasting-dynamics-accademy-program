import { styled } from "@mui/material/styles";

import { PushingAndPullingInputs } from "./PushingAndPullingInputs";

export const StyledPushingAndPullingInputs = styled(PushingAndPullingInputs)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "26px 35px 38px",
    "& > .table-title": {
        marginBottom: 23,
    },
    "& > .select-inputs": {
        display: "flex",
        alignItems: "center",
        marginBottom: 75,
        "&.margin-0": {
            margin: 0,
        },
        "& > .select-input-container": {
            width: 451,
            marginRight: 24,
        },
        "& > .result": {
            transform: "translateY(5px)",
        },
    },
    "& >.images": {
        marginBottom: 68,
        "img:first-of-type": {
            marginRight: 124,
        },
    },
    "& > .info": {
        display: "flex",
        alignItems: "center",
        gap: 26,
        marginBottom: 45,
        "& > .info-text": {},
        "& > .icon-button": {
            padding: 0,
        },
    },

    "@media only screen and (max-width: 1348px)": {
        "& > .table-title": {},
        "& > .select-inputs": {
            "& > .select-input-container": {
                width: 300,
            },
        },
        "& >.images": {
            "img:first-of-type": {},
        },
        "& > .info": {
            "& > .info-text": {},
            "& > .icon-button": {},
        },
    },
}));
