import { styled } from "@mui/material/styles";

import { ActionButtonsContainer } from "./ActionsButtonContainer";

export const StyledActionButtonsContainer = styled(ActionButtonsContainer)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "30px 50px",
    background: theme.color_system.background.paper,
    boxShadow: theme.color_system.boxShadow.gray,
    borderRadius: "10px",
    "& .link": {
        flex: 1,
    },
    "& .actions-section": {
        display: "flex",
        padding: "0px 0px",
        justifyContent: "flex-end",
        gap: "12px",
        "& > .action": {
            flexShrink: 0,
        },
    },
}));
