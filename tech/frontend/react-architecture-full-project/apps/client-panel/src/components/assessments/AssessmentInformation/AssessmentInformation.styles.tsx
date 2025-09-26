import { styled } from "@mui/material/styles";

import { AssessmentInformation } from "./AssessmentInformation";

export const StyledAssessmentInformation = styled(AssessmentInformation)(({ theme }) => ({
    display: "flex",
    padding: "0 34px",
    gap: 15,
    "& > .info-container": {
        display: "flex",
        flexGrow: 1,
        boxShadow: theme.color_system.boxShadow.gray,
        "& > .card": {
            display: "flex",
            justifyContent: "space-between",
            flexGrow: 1,
            padding: "27px 43px",
            background: theme.color_system.divider.white,
            "&.card-1": {
                borderRadius: "20px 0 0 20px",
            },
            "&.card-2": {
                borderRadius: "0 20px 20px 0",
            },
            "& > .col": {
                "& > .title-1": {
                    color: theme.color_system.text.light,
                },
                "& > .info-1": {
                    marginBottom: "16px",
                    color: theme.color_system.text.primary,
                },
                "& > .title-2": {
                    color: theme.color_system.text.light,
                },
                "& > .info-2": {
                    color: theme.color_system.text.primary,
                },
            },
        },
    },
    "& > .progress-container": {
        width: 184,
        background: theme.color_system.divider.white,
        borderRadius: "20px",
        boxShadow: theme.color_system.boxShadow.gray,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    "@media only screen and (max-width: 1410px)": {
        "& > .info-container": {
            flexDirection: "column",
            gap: 15,
            boxShadow: "none",
            "& > .card": {
                boxShadow: theme.color_system.boxShadow.gray,
                "&.card-1": {
                    borderRadius: "20px",
                },
                "&.card-2": {
                    borderRadius: "20px",
                },
                "& > .col": {
                    "& > .title-1": {},
                    "& > .info-1": {},
                    "& > .title-2": {},
                    "& > .info-2": {},
                },
            },
        },
        "& > .progress-container": {
            alignSelf: "flex-start",
            height: 174,
        },
    },
}));
