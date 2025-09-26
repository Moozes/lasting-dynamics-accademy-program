import { styled } from "@mui/material/styles";

import { DisplayPreferencesScreen } from "./DisplayPreferencesScreen";

export const StyledDisplayPreferencesScreen = styled(DisplayPreferencesScreen)(({ theme }) => ({
    "& > .title": {
        color: theme.color_system.primary.dark,
        ...theme.typography.h6,
        marginBottom: 5,
    },
    "& > .text": {
        color: theme.color_system.text.primary,
        ...theme.typography.body1,
        marginBottom: 27,
    },
    "& > label": {
        display: "flex",
        alignItems: "center",
        gap: 13,
        marginBottom: 11,
        "& > .main-text": {
            color: theme.color_system.divider.dark_grey,
            ...theme.typography.body2,
            "& > .secondary-text": {
                color: theme.color_system.text.primary,
                ...theme.typography.caption,
            },
        },
    },
}));
