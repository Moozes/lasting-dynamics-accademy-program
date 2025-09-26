import { styled } from "@mui/material/styles";

import { APPBAR_HEIGHT } from "../MainLayout.helpers";

import { CloseDrawerButton } from "./CloseDrawerButton";

export const StyledCloseDrawerButton = styled(CloseDrawerButton)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 15,
    height: APPBAR_HEIGHT,
    "& > .icon-button": {
        "& > .icon": {
            color: theme.color_system.primary.dark,
        },
    },
}));
