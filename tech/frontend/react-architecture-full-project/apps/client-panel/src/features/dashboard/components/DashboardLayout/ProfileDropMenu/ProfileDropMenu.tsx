import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import { useAtom } from "jotai";

import { KeyboardArrowDown } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import {
    Modal,
    Popover,
    PopoverItem,
    SettingsIcon2,
    usePopover,
    UserSettingsIcon,
    useTranslationV2,
    useTrasnlateUserRole,
} from "ui";

import { authAtom } from "@atoms/index";
import { CapitaliseFirstLetter } from "@features/dashboard/utils";
import { useSettingsModalOpenAtom } from "@hooks/index";
import { FirebaseAuth } from "@services/index";

import { popoverItemStyles, popoverLogoutItemStyles } from "./inlineStyles";
import { SettingsModal2 } from "./SettingsModal2";

type Props = IconButtonProps;

export const ProfileDropMenu = (props: Props) => {
    const t = useTranslationV2();
    const navigate = useNavigate();
    const [auth] = useAtom(authAtom);
    const queryClient = useQueryClient();
    const [logoutLoading, setLogoutLoading] = useState(false);
    const { settingsModalOpen, toggleSettingsModalOpen } = useSettingsModalOpenAtom();

    const { onOpen, ...rest } = usePopover();
    const photoURL = auth.user && auth.user.photoURL ? auth.user.photoURL : "";
    const { trasnlateUserRole } = useTrasnlateUserRole();
    const role = trasnlateUserRole(auth.wergonicUser?.role);
    const fullName = `
    ${CapitaliseFirstLetter(auth.wergonicUser?.first_name)} ${CapitaliseFirstLetter(auth.wergonicUser?.last_name)}
    `;
    const handleLogout = async () => {
        setLogoutLoading(true);
        await signOut(FirebaseAuth);
        queryClient.clear();
        setLogoutLoading(false);
        rest.onClose();
    };
    const handleNavigateToUsers = () => {
        navigate("/dashboard/users");
        rest.onClose();
    };
    const handleOpenSettingsModal = () => {
        toggleSettingsModalOpen();
        rest.onClose();
    };
    return (
        <>
            <IconButton {...props} onClick={onOpen}>
                <Avatar className="avatar" alt="User avatar" src={photoURL} />
                <div className="user-info">
                    <div className="name">{fullName}</div>
                    <div className="role">{role}</div>
                </div>
                <KeyboardArrowDown className="icon" />
            </IconButton>
            <Popover {...rest}>
                <PopoverItem sx={popoverItemStyles} onClick={handleOpenSettingsModal}>
                    <SettingsIcon2 />
                    <div className="text">{t("Settings")}</div>
                </PopoverItem>
                <PopoverItem sx={popoverItemStyles} onClick={handleNavigateToUsers}>
                    <UserSettingsIcon />
                    <div className="text">{t("users_management.pageHeader")}</div>
                </PopoverItem>
                <PopoverItem sx={popoverLogoutItemStyles} onClick={handleLogout}>
                    <LogoutIcon className="icon" />
                    <div className="text">{logoutLoading ? `${t("Logging out")}...` : t("Logout")}</div>
                </PopoverItem>
            </Popover>
            <Modal open={settingsModalOpen} onClose={toggleSettingsModalOpen} hideCloseIcon>
                <SettingsModal2 onClose={toggleSettingsModalOpen} />
            </Modal>
        </>
    );
};
