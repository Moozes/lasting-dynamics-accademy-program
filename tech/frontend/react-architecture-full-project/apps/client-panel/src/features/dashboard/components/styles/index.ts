import { CSSObject, styled, SxProps, Theme as MuiTheme, Theme } from "@mui/material/styles";

import { BlackMenuIcon, GlobIcon, MenuIcon, SettingsIcon2, UserSettingsIcon } from "ui";

import { DRAWER_WIDTH, DRAWER_WIDTH_CLOSED, DRAWER_WIDTH_CLOSED_SM_UP } from "@features/dashboard/utils";

export const openedMixin = (theme: MuiTheme): CSSObject => ({
    width: DRAWER_WIDTH,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    boxSizing: "border-box",
});

export const closedMixin = (theme: MuiTheme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `${DRAWER_WIDTH_CLOSED}px`,
    [theme.breakpoints.up("sm")]: {
        width: `${DRAWER_WIDTH_CLOSED_SM_UP}px`,
    },
});

/**
 *
 * DashBoard
 *
 */
export const DashboardLayoutBox: SxProps = { display: "flex", minHeight: "100vh" };

/**
 * Drawer
 */
export const DrawerStyle =
    (open: boolean) =>
    (theme: MuiTheme): SxProps => ({
        width: DRAWER_WIDTH,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
        }),
    });

export const DrawerPaperStyle = (theme: MuiTheme) => ({
    bgcolor: theme.color_system.accent.light_purple,
    borderRight: `1px solid ${theme.color_system.divider.light_grey}`,
    backgroundImage: "none",
});

/**
 * AppBar
 * */
export const AppBarStyle = (open: boolean) => (theme: MuiTheme) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: DRAWER_WIDTH,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    ...(!open && {
        width: `calc(100% - ${theme.spacing(8)})`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
});

/** Drawerheader */
export const DrawerHeaderStyle = (theme: MuiTheme) => ({
    ...theme.mixins.toolbar,
});

/** Drawermenu */
/* eslint-disable no-nested-ternary */
export const ListItemStyle: SxProps = { display: "block" };

export const ListItemButtonStyle = (open: boolean, options?: { disableHover: boolean; cursor?: string }): SxProps => ({
    minHeight: 48,
    justifyContent: open ? "initial" : "start",
    borderRadius: 1.5,
    mb: 0.5,
    "&.MuiButtonBase-root:hover": {
        bgcolor: options?.disableHover ? "transparent" : "#853DDE",
    },
    "&.Mui-selected": {
        bgcolor: "#853DDE",
    },
    cursor: options?.cursor || "pointer",
});

export const ListItemButtonStyle2 = (
    open: boolean,
    theme: Theme,
    options?: { disableHover: boolean; cursor?: string }
): SxProps => ({
    minHeight: 48,
    justifyContent: open ? "initial" : "start",
    borderRadius: 1.5,
    mb: 0.5,
    "svg path": {
        stroke: theme.color_system.text.light,
    },
    ".MuiTypography-root": {
        color: theme.color_system.text.light,
    },
    "&.MuiButtonBase-root:hover": {
        bgcolor: theme.color_system.accent.purple,
        "svg path": {
            stroke: theme.color_system.primary.dark,
        },
        ".MuiTypography-root": {
            color: theme.color_system.primary.dark,
        },
    },
    "&.Mui-selected": {
        bgcolor: theme.color_system.accent.purple,
        "svg path": {
            stroke: theme.color_system.primary.dark,
        },
        ".MuiTypography-root": {
            color: theme.color_system.primary.dark,
        },
    },
    cursor: options?.cursor || "pointer",
});

export const ListItemIconStyle = (open: boolean): SxProps => ({
    minWidth: 0,
    mr: open ? 1.5 : "auto",
    justifyContent: "center",
    color: "common.white",
});

export const ListItemIconStyle2 = (open: boolean, theme: Theme): SxProps => ({
    minWidth: 0,
    mr: open ? 1.5 : "auto",
    justifyContent: "center",
    color: "common.white",
    "svg path": {
        fill: theme.color_system.primary.dark,
    },
});

export const ListItemTextLink: SxProps = { color: "#ffffff" };

export const SubMenu = (open: boolean): SxProps => ({ opacity: open ? 1 : 0 });
export const SubMenuArrowIcon = (open: boolean): SxProps => ({
    opacity: open ? 1 : 0,
    display: "flex",
    alignItems: "center",
    svg: {
        width: "18px",
        height: "18px",
    },
});
export const ListItemLink = (open: boolean): SxProps => ({ opacity: open ? 1 : 0 });
export const ListItemLink2 = (open: boolean, theme: Theme): SxProps => ({
    opacity: open ? 1 : 0,
    "svg path": { fill: theme.color_system.primary.dark },
});

export const OrgNameStyle: SxProps = { fontWeight: 800, ...ListItemTextLink };

export const ClearIconStyle: SxProps = {
    display: "flex",
    justifyContent: "end",
    padding: 0,
};

export const ClearIconStyle2: SxProps<Theme> = (theme) => ({
    display: "flex",
    justifyContent: "end",
    padding: 0,
    "&:hover": {
        background: theme.color_system.accent.light_purple,
        cursor: "default",
    },
});

/** ProfileDropmenu */
export const ProfileDropMenuAvatarStyle: SxProps = {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mr: 3,
};

export const ProfileLogOutStyle = {
    color: "error.main",
};

export const ProfileMenuItemStyle = { ml: 1.5, p: 0, height: "50px", ":hover": { bgcolor: "transparent" } };

export const ProfileHeaderStyle = {
    m: 0,
    p: 0,
    minWidth: "230px",
    display: "flex",
    alignItels: "space-evenly",
};

export const ProfileListItemTextStyle: SxProps<Theme> = (theme) => ({
    "& .MuiListItemText-primary": {
        fontSize: "18px",
        fontWeight: "500",
        color: theme.color_system.text.primary,
        ...theme.typography.h6,
    },
    "& .MuiListItemText-secondary": {
        fontSize: "16px",
        fontWeight: "700",
        color: theme.color_system.text.light,
        ...theme.typography.body1,
    },
});

/** Dashboard Layout */
export const DashboardIconStyles = {
    mr: 1.5,
};
export const DashboardInnerContainerStyle: SxProps = {
    mt: 2,
    minWidth: "100%",
};

export const StyledGlobIcon = styled(GlobIcon)(({ theme }) => ({
    path: {
        stroke: theme.color_system.primary.dark,
    },
}));

export const StyledSettingsIcon2 = styled(SettingsIcon2)(({ theme }) => ({
    path: {
        stroke: theme.color_system.divider.dark_grey,
    },
}));

export const StyledUserSettingsIcon = styled(UserSettingsIcon)(({ theme }) => ({
    path: {
        stroke: theme.color_system.divider.dark_grey,
    },
}));

export const StyledBlackMenuIcon = styled(BlackMenuIcon)(({ theme }) => ({
    path: {
        stroke: theme.color_system.text.primary,
    },
}));

export const StyledMenuIcon = styled(MenuIcon)(({ theme }) => ({
    path: {
        stroke: theme.color_system.primary.dark,
    },
}));
