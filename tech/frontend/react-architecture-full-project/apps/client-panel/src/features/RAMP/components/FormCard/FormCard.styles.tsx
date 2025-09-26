import { styled } from "@mui/material/styles";

import { RAMP_DETAILS_BREAK_POINT } from "@features/RAMP/utils";
import { getMediaQueryMaxWidthString } from "@utils/index";

import { FormCard } from "./FormCard";

export const StyledFormCard = styled(FormCard)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "36px 40px",
    background: theme.color_system.divider.white,
    borderRadius: 10,
    boxShadow: theme.color_system.boxShadow.gray,
    "& > .title": {
        marginBottom: 13,
    },
    "& > .content": {
        display: "flex",
        justifyContent: "space-between",
        "&  .left": {
            flexBasis: "45%",
            "& > .description": {
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 16,
                "& > .text": {},
                "& > .icon-btn": {
                    padding: 0,
                    flexShrink: 0,
                    alignSelf: "center",
                    "& > .icon": {},
                },
            },
            "& > .images": {},
        },
        "&  .right": {
            flexBasis: "50%",
            "& > .comment-icon-Container": {
                textAlign: "right",
                marginBottom: 20,
                "& > .icon": {},
            },
            "& > .forms-container": {
                display: "flex",
                justifyContent: "flex-end",
                gap: 30,
                "& > .form-1": {
                    flexGrow: 1,
                },
                "& > .form-1-empty": {
                    flexGrow: 0.5,
                },
                "& > .form-2": {
                    flexGrow: 1,
                },
            },
        },
    },

    [getMediaQueryMaxWidthString(RAMP_DETAILS_BREAK_POINT)]: {
        padding: "21px 22px",
        "& > .title": {
            ...theme.typography.h6,
            marginBottom: 9,
        },
        "& > .content": {
            "&  .left": {
                "& > .description": {
                    marginBottom: 6,
                    "& > .text": {
                        ...theme.typography.body2,
                    },
                    "& > .icon-btn": {
                        "& > .icon": {},
                    },
                },
                "& > .images": {},
            },
            "&  .right": {
                "& > .comment-icon-Container": {
                    marginBottom: 20,
                    "& > .icon": {},
                },
                "& > .forms-container": {
                    "& > .form-1": {},
                    "& > .form-1-empty": {},
                    "& > .form-2": {},
                },
            },
        },
    },
}));
