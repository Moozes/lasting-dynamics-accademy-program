import { styled } from "@mui/material/styles";

import { DetailedSummary } from "./DetailedSummary";

export const StyledDetailedSummary = styled(DetailedSummary)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: "34px 51px 74px 43px",
    background: theme.color_system.divider.white,
    boxShadow: theme.color_system.boxShadow.gray,
    borderRadius: 10,
    "& > .title": {
        marginBottom: 38,
    },
    "& > .container": {
        "& > .detialed-summary-accordion": {
            marginBottom: 15,
            "&:last-child": {
                marginBottom: 46,
            },
        },
    },
}));
