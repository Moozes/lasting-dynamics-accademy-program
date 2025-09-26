import { styled } from "@mui/material/styles";

import { TimeInput } from "./TimeInput";

export const StyledTimeInput = styled(TimeInput)(({ theme }) => ({
    "& > .label": {
        ...theme.typography.body2,
        color: theme.color_system.text.primary,
        marginBottom: 5,
        "& > .star": { color: theme.color_system.status.error.dark },
    },
    "& > input": {
        color: theme.color_system.text.light,
        padding: "5px 10px",
        background: "transparent",
        border: `1px solid ${theme.color_system.text.primary}`,
        borderRadius: 5,
        outline: "none",
        width: "100%",
    },
    "& > .error": {
        ...theme.typography.subtitle2,
        color: theme.color_system.status.error.light,
        marginLeft: 8,
        minHeight: 21.97,
    },
}));
