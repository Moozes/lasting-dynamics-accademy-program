import { styled } from "@mui/material/styles";

import { LiftingWorkInputs } from "./LiftingWorkInputs";

export const StyledLiftingWorkInputs = styled(LiftingWorkInputs)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "23px 0 34px",
    "& > .padding-x": {
        paddingLeft: 35,
        paddingRight: 35,
        "& > .table-1": {
            marginBottom: 23,
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
        "& > .select-inputs": {
            display: "flex",
            alignItems: "center",
            marginBottom: 44,
            "& > .select-input-container": {
                width: 451,
                marginRight: 24,
            },
            "& > .result": {
                transform: "translateY(5px)",
            },
        },

        "& > .title": {
            marginBottom: 56,
        },
        "& > .table-container": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 111px",
        },
    },
    "& > .divider": {
        backgroundColor: theme.color_system.divider.light_grey,
        height: 4,
        marginBottom: 32,
    },

    "@media only screen and (max-width: 1348px)": {
        "& > .padding-x": {
            "& > .table-1": {},
            "& > .info": {
                "& > .info-text": {},
                "& > .icon-button": {},
            },
            "& > .select-inputs": {
                "& > .select-input-container": {
                    width: 300,
                },
            },
            "& > .title": {},
            "& > .table-container": {},
        },
        "& > .divider": {},
    },
}));
