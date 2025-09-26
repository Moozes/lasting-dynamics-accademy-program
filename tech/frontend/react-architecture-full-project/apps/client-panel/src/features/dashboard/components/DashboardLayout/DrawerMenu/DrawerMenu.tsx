import { FC, Fragment } from "react";
import { useLocation } from "react-router-dom";

import { Box, Collapse, useTheme } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { ChevronDownIcon, ChevronUpIcon, Typography, useTranslationV2 } from "ui";

import { Link } from "@components/index";
import { DrawerMenuProps } from "@features/dashboard/types";

import * as styles from "../../styles";

import { DrawerMenuItem, SubItem, useDrawerMenuItems } from "./DrawerMenu.hooks";

export const DrawerMenu: FC<DrawerMenuProps> = ({ open }) => {
    const location = useLocation();
    const t = useTranslationV2();
    const theme = useTheme();
    const menuItems = useDrawerMenuItems();
    const isItemSelected = (item: DrawerMenuItem) => {
        const pathnameAndSearchParams = location.pathname + location.search;
        // custom logic for session tabs, to determin whether they are selected
        if (
            item.text === t("sessions_management.active_sessions") ||
            item.text === t("sessions_management.finished_sessions")
        ) {
            return pathnameAndSearchParams.includes(item.route);
        }
        // custom logic for dropdowns, to determin whether they are selected
        if (item.subMenuItems) {
            return item.subMenuItems.some((subItem) => pathnameAndSearchParams.includes(subItem.route));
        }
        return location.pathname === item.route;
    };
    const isSubItemSelected = (item: SubItem) => {
        const pathnameAndSearchParams = location.pathname + location.search;
        return pathnameAndSearchParams.includes(item.route);
    };
    return (
        <List sx={{ px: 1.4, mt: -0.4 }}>
            {menuItems.map((item) => {
                const listItemButton = (
                    <ListItemButton sx={styles.ListItemButtonStyle2(open, theme)} selected={isItemSelected(item)}>
                        <ListItemIcon sx={styles.ListItemIconStyle(open)}>{item.icon}</ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography variant="subtitle1" sx={{ fontWeight: 800, ...styles.ListItemTextLink }}>
                                    {t(item.text)}
                                </Typography>
                            }
                            sx={styles.ListItemLink(open)}
                        />
                        {item.subMenuItems &&
                            (item.subMenuOpen ? (
                                <Box component="span" sx={styles.SubMenuArrowIcon(open)}>
                                    <ChevronUpIcon />
                                </Box>
                            ) : (
                                <Box component="span" sx={styles.SubMenuArrowIcon(open)}>
                                    <ChevronDownIcon />
                                </Box>
                            ))}
                    </ListItemButton>
                );
                return (
                    <Fragment key={item.text}>
                        <ListItem disablePadding sx={styles.ListItemStyle} onClick={item.subMenuOpenToggle}>
                            {item.route ? (
                                <Link to={item.route} sx={styles.ListItemTextLink}>
                                    {listItemButton}
                                </Link>
                            ) : (
                                listItemButton
                            )}
                        </ListItem>
                        {item.subMenuItems && (
                            <Collapse in={item.subMenuOpen} timeout="auto">
                                <List component="div" disablePadding sx={styles.SubMenu(open)}>
                                    {item.subMenuItems.map((subItem) => (
                                        <Link key={subItem.text} to={subItem.route} sx={styles.ListItemTextLink}>
                                            <ListItemButton
                                                sx={{ pl: "50px", ...styles.ListItemButtonStyle2(open, theme) }}
                                                selected={isSubItemSelected(subItem)}
                                            >
                                                {/* <ListItemIcon sx={styles.ListItemIconStyle(open)}>
                                            <StarBorder />
                                        </ListItemIcon> */}
                                                <ListItemText
                                                    primary={
                                                        <Typography
                                                            variant="subtitle1"
                                                            sx={{ fontWeight: 800, ...styles.ListItemTextLink }}
                                                        >
                                                            {subItem.text}
                                                        </Typography>
                                                    }
                                                />
                                            </ListItemButton>
                                        </Link>
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </Fragment>
                );
            })}
        </List>
    );
};
