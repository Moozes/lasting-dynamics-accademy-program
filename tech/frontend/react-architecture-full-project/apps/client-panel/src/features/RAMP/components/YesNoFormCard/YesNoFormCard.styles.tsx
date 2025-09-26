import { styled } from "@mui/material/styles";

import { RAMP_DETAILS_BREAK_POINT } from "@features/RAMP/utils";
import { getMediaQueryMaxWidthString } from "@utils/index";

import { YesNoFormCard } from "./YesNoFormCard";

export const StyledYesNoFormCard = styled(YesNoFormCard)(({ theme }) => ({
    color: theme.color_system.text.primary,
    background: theme.color_system.divider.white,
    borderRadius: 10,
    padding: "31px 35px 44px 36px",
    "& > .header": {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: 60,
        marginBottom: 45,
        "& > .title": {},
        "& > .result": {
            display: "flex",
            alignItems: "center",
            gap: 20,
            "& > .text": {},
            "& > .square": {
                width: 123,
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: theme.color_system.divider.light_grey_20,
                border: `1px solid ${theme.color_system.divider.light_grey}`,
                borderRadius: 11.3,
            },
        },
    },
    "& > .form-element": {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 60,
        marginBottom: 23,
        "&.border-bottom": {
            borderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
            paddingBottom: 19,
        },
        "& > .text": {
            ...theme.typography.body2,
        },
        "& > .radio-group": {},
    },

    [getMediaQueryMaxWidthString(RAMP_DETAILS_BREAK_POINT)]: {
        padding: "30px 29px 35px 28px",
        "& > .header": {
            gap: 30,
            marginBottom: 32,
            "& > .title": {
                ...theme.typography.h6,
            },
            "& > .result": {
                gap: 20,
                "& > .text": {},
                "& > .square": {},
            },
        },
        "& > .form-element": {
            gap: 30,
            marginBottom: 20,
            "&.border-bottom": {},
            "& > .text": {
                ...theme.typography.body2,
            },
            "& > .radio-group": {},
        },
    },
}));
