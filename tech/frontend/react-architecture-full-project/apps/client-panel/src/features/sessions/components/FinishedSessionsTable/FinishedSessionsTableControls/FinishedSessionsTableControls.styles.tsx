import { styled } from "@mui/material/styles";

import { getMediaQueryMaxWidthString } from "@utils/index";

import { FinishedSessionsTableControls } from "./FinishedSessionsTableControls";

export const StyledFinishedSessionsTableControls = styled(FinishedSessionsTableControls)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
    "& > .search-input": {
        width: 420,
    },
    "& > .buttons": {
        "& > .icon-button": {
            padding: 8.5,
            borderRadius: 8,
            border: `2px solid ${theme.color_system.button.disabled.text}`,
            "& > .icon": {
                width: 24,
                heoght: 24,
                "& > path": {
                    fill: theme.color_system.button.disabled.text,
                },
            },
        },
    },

    [getMediaQueryMaxWidthString("800px")]: {
        "& > .search-input": {
            width: 300,
        },
    },
}));
