import { Outlet } from "react-router-dom";

import { AppBar, Drawer } from "@mui/material";

import type { HTMLDivProps } from "ui";

import { useDrawer } from "@atoms/index";

import { ChangeLanguage } from "./ChangeLanguage";
import { CloseDrawerButton } from "./CloseDrawerButton";
import { DrawerMenu } from "./DrawerMenu";
import { drawerStyles } from "./inlineStyles";
import { Notifications } from "./Notifications";
import { OpenDrawerButton } from "./OpenDrawerButton";
import { ProfileDropDown } from "./ProfileDropDown";
import { ToggleTheme } from "./ToggleTheme";

type Props = HTMLDivProps;

export const MainLayout = (props: Props) => {
    const { open, variant, setOpen } = useDrawer();
    const mainClassName = `${variant === "permanent" ? "drawer-permenant" : "drawer-temporary"}`;
    return (
        <div {...props}>
            <AppBar className="appbar">
                {variant === "temporary" && <OpenDrawerButton />}
                <div className="empty" />
                <div className="right">
                    <ChangeLanguage />
                    <ToggleTheme />
                    <Notifications />
                    <ProfileDropDown />
                </div>
            </AppBar>
            <Drawer open={open} onClose={() => setOpen(false)} variant={variant} sx={drawerStyles}>
                {variant === "temporary" && <CloseDrawerButton />}
                <DrawerMenu />
            </Drawer>
            <main className={mainClassName}>
                <Outlet />
            </main>
        </div>
    );
};
