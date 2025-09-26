import { NavLink } from "react-router-dom";

import { type HTMLDivProps, WergonicAdminLogo } from "ui";

import { useDrawer } from "@atoms/index";

import { useDrawerMenuList } from "./DrawerMenu.hooks";

type Props = HTMLDivProps;

export const DrawerMenu = (props: Props) => {
    const { drawerMenuList } = useDrawerMenuList();
    const { setOpen } = useDrawer();
    const closeDrawer = () => setOpen(false);
    return (
        <div {...props}>
            <div className="list">
                {drawerMenuList.map((item) => (
                    <NavLink key={item.text} onClick={closeDrawer} className="link" to={item.route}>
                        <item.icon className={`icon ${item.iconClassName}`} />
                        <div className="text">{item.text}</div>
                    </NavLink>
                ))}
            </div>
            <div className="logo">
                <WergonicAdminLogo />
            </div>
        </div>
    );
};
