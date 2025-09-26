import { styled } from "@mui/material/styles";

import { PushingAndPullingInfo } from "./PushingAndPullingInfo";

export const StyledPushingAndPullingInfo = styled(PushingAndPullingInfo)(({ theme }) => ({
    color: theme.color_system.text.primary,
    ...theme.typography.h6,
    "& > ol": {
        listStylePosition: "inside",
        marginTop: 0,
        marginBottom: 55,
        padding: 0,
        "& > li": {
            "&:not(:last-child)": {
                marginBottom: 5,
            },
        },
    },
    "& > img": {
        width: "100%",
        height: "auto",
    },
}));
