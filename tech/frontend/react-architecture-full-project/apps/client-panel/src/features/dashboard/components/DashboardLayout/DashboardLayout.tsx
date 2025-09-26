import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useAtom } from "jotai";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import ClearIcon from "@mui/icons-material/Clear";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { IconButton, SxProps, Theme, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

import { GlobalLoader, WergonicLogoNoText, WergonicLogoText } from "ui";

import { themeAtom } from "@atoms/index";
import { useIsDrawerOpenCustomState, useIsPermanentDrawer } from "@features/dashboard/hooks";
import { DRAWER_WIDTH, DRAWER_WIDTH_CLOSED, DRAWER_WIDTH_CLOSED_SM_UP } from "@features/dashboard/utils";

import * as styles from "../styles";

import { AppBar } from "./AppBar";
import ChangeLanguageButton from "./ChangeLanguageButton";
import Drawer from "./Drawer";
import DrawerHeader from "./DrawerHeader";
import DrawerMenu from "./DrawerMenu";
import { NotificationsButton } from "./NotificationsButton";
import { ProfileDropMenu } from "./ProfileDropMenu";
import { UserOrganizationsDropDown } from "./UserOrganizationsDropDown";
import { VersionHistoryButton } from "./VersionHistoryButton";

export const DashboardLayout = () => {
    const [theme, changeTheme] = useAtom(themeAtom);
    const muiTheme = useTheme();
    const isPermanentDrawer = useIsPermanentDrawer();
    const { pathname, search } = useLocation();
    const { isDrawerOpenCustomState, toggleDrawer, setIsDrawerOpen } = useIsDrawerOpenCustomState();

    const toggleDrawerAndDropDownMenus = () => {
        toggleDrawer();
    };

    useEffect(() => {
        // close drawer automatically when in tablet mode, ie: none permanent drawer mode
        // whenever changing url or search params
        if (!isPermanentDrawer) {
            setIsDrawerOpen(false);
        }
    }, [pathname, search, setIsDrawerOpen]);

    const MainStyles: SxProps<Theme> = (iTheme) => ({
        flexGrow: 1,
        bgcolor: iTheme.color_system.background.default,
        paddingBottom: "65px",
        ...(isDrawerOpenCustomState && {
            width: `calc(100vw - ${DRAWER_WIDTH + 17}px)`,
        }),
        ...(!isDrawerOpenCustomState && {
            width: `calc(100vw - ${DRAWER_WIDTH_CLOSED + 17}px)`,
            [iTheme.breakpoints.up("sm")]: {
                width: `calc(100vw - ${DRAWER_WIDTH_CLOSED_SM_UP + 17}px)`,
            },
        }),
    });

    return (
        <Box sx={styles.DashboardLayoutBox}>
            <AppBar
                sx={{ pr: 0, background: muiTheme.color_system.background.default }}
                open={isDrawerOpenCustomState}
                color="inherit"
                elevation={0}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <IconButton disableRipple onClick={toggleDrawerAndDropDownMenus}>
                        <styles.StyledBlackMenuIcon />
                    </IconButton>
                    <Box display="flex" alignItems="center">
                        <ChangeLanguageButton />
                        <IconButton
                            color="primary"
                            sx={{
                                ...styles.DashboardIconStyles,
                                color: muiTheme.color_system.primary.dark,
                            }}
                            onClick={() => {
                                changeTheme(theme === "light" ? "dark" : "light");
                            }}
                        >
                            {theme === "light" ? <DarkModeOutlinedIcon /> : <Brightness4Icon />}
                        </IconButton>
                        <NotificationsButton />
                        <ProfileDropMenu />
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer open={isDrawerOpenCustomState} onClose={toggleDrawerAndDropDownMenus}>
                <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                    <Box>
                        <DrawerHeader>
                            <List sx={{ p: 1 }}>
                                <ListItem disablePadding sx={styles.ListItemStyle}>
                                    {!isPermanentDrawer && (
                                        <ListItemButton sx={styles.ClearIconStyle2}>
                                            <IconButton
                                                onClick={toggleDrawerAndDropDownMenus}
                                                sx={{ color: "common.white" }}
                                            >
                                                <ClearIcon sx={{ color: muiTheme.color_system.primary.dark }} />
                                            </IconButton>
                                        </ListItemButton>
                                    )}
                                </ListItem>

                                <UserOrganizationsDropDown />
                            </List>
                        </DrawerHeader>
                        <DrawerMenu open={isDrawerOpenCustomState} />
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <Box>
                            <List sx={{ px: 1, pt: 0, pb: 0 }}>
                                <ListItem disablePadding sx={styles.ListItemStyle}>
                                    <ListItemButton
                                        sx={{
                                            ...styles.ListItemButtonStyle(isDrawerOpenCustomState, {
                                                disableHover: true,
                                                cursor: "default",
                                            }),
                                            marginBottom: 0,
                                            paddingBottom: 0,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                ...styles.ListItemIconStyle2(isDrawerOpenCustomState, muiTheme),
                                                marginBottom: "1.2px",
                                                marginLeft: "-6px",
                                            }}
                                        >
                                            <WergonicLogoNoText />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={<WergonicLogoText />}
                                            sx={{
                                                ...styles.ListItemLink2(isDrawerOpenCustomState, muiTheme),
                                                pt: "10px",
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                        <VersionHistoryButton />
                    </Box>
                </Box>
            </Drawer>
            <Box component="main" sx={MainStyles}>
                <DrawerHeader />
                <Suspense fallback={<GlobalLoader height="85vh" />}>
                    <Outlet />
                </Suspense>
            </Box>
        </Box>
    );
};
