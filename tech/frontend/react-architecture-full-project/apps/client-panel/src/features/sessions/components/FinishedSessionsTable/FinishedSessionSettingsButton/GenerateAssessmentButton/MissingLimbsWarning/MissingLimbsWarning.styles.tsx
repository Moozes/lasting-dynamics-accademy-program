import { styled } from "@mui/material/styles";

import { MissingLimbsWarning } from "./MissingLimbsWarning";

export const StyledMissingLimbsWarning = styled(MissingLimbsWarning)(({ theme }) => ({
    "& > .missing-limb-warning": {
        width: 500,
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        "& > .icon": {
            marginBottom: 16,
            "& svg": {
                width: 94,
                height: 94,
                color: theme.palette.warning.main,
            },
        },
        "& > .text": {
            marginBottom: 24,
            "& > .title": {
                ...theme.typography.h6,
                fontWeight: 700,
                color: theme.palette.primary.main,
                marginBottom: 8,
            },
            "& > .description": {
                ...theme.typography.body1,
                color: theme.palette.text.primary,
            },
        },
        "& > .actions": {
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            width: "100%",
            "& > .cancel-btn": {
                width: "90px",
            },
            "& > .proceed-btn": {
                width: "125px",
            },
        },
    },
}));
