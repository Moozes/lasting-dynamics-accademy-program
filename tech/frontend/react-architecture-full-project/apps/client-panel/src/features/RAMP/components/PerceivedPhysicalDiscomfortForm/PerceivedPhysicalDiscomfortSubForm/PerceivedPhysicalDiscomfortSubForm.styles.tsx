import { styled } from "@mui/material/styles";

import { RAMP_DETAILS_BREAK_POINT } from "@features/RAMP/utils";
import { getMediaQueryMaxWidthString } from "@utils/index";

import { PerceivedPhysicalDiscomfortSubForm } from "./PerceivedPhysicalDiscomfortSubForm";

export const StyledPerceivedPhysicalDiscomfortSubForm = styled(PerceivedPhysicalDiscomfortSubForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    background: theme.color_system.divider.white,
    borderRadius: 10,
    padding: "31px 35px 31px 36px",
    "& > .header": {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: 60,
        marginBottom: 45,
        "& > .title": {},
    },
    "& > .form-element": {
        display: "flex",
        justifyContent: "space-between",
        gap: 60,
        marginBottom: 23,
        "&.border-bottom": {
            borderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
            paddingBottom: 19,
        },
        "& > .text": {},
        "& > .text-area": {
            flexBasis: "45%",
        },
    },

    [getMediaQueryMaxWidthString(RAMP_DETAILS_BREAK_POINT)]: {
        padding: "30px 29px 35px 28px",
        "& > .header": {
            gap: 30,
            marginBottom: 32,
            "& > .title": {
                ...theme.typography.h6,
            },
        },
        "& > .form-element": {
            gap: 30,
            marginBottom: 20,
            "&.border-bottom": {},
            "& > .text": {
                ...theme.typography.body2,
            },
            "& > .text-area": {
                flexBasis: "65%",
            },
        },
    },
}));
