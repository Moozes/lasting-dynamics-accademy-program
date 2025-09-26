import { styled } from "@mui/material/styles";

import { MainLayout } from "./MainLayout";
import { APPBAR_HEIGHT, DRAWER_WIDTH } from "./MainLayout.helpers";

export const StyledMainLayout = styled(MainLayout)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .appbar": {
        background: theme.color_system.background.default,
        boxShadow: "none",
        backgroundImage: "none",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        height: APPBAR_HEIGHT,
        padding: "0 32px 0 32px",
        "& > .empty": {
            flexGrow: 1,
        },
        "& > .right": {
            display: "flex",
            alignItems: "center",
            gap: 12,
        },
    },
    "& > main": {
        marginTop: APPBAR_HEIGHT,
        height: `calc(100vh - ${APPBAR_HEIGHT}px)`,
        overflowY: "auto",
        overflowX: "hidden",
        background: theme.color_system.background.default,
        "&.drawer-permenant": {
            width: `calc(100vw - ${DRAWER_WIDTH}px)`,
            marginLeft: DRAWER_WIDTH,
        },
        "&.drawer-temporary": {
            width: "100vw",
            marginLeft: 0,
        },
    },
}));
