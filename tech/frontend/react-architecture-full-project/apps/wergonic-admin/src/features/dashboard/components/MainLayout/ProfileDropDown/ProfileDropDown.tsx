import { useState } from "react";
import { useAtomValue } from "jotai";
import { capitalize } from "lodash";

import { KeyboardArrowDown } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, IconButton, IconButtonProps } from "@mui/material";

import { Modal, Popover, PopoverItem, usePopover, useTranslationV2, useTrasnlateUserRole } from "ui";

import { authAtom } from "@atoms/index";

import * as styles from "../../../styles";

import { popoverItemStyles, popoverLogoutItemStyles } from "./inlineStyles";
import { useFirebaseLogout } from "./ProfileDropDown.hooks";
import { SettingsModal2 } from "./SettingsModal2";

type Props = IconButtonProps;

export const ProfileDropDown = (props: Props) => {
    const t = useTranslationV2();
    const { trasnlateUserRole } = useTrasnlateUserRole();
    const auth = useAtomValue(authAtom);
    const photoURL = auth.firebaseUser?.photoURL || "";
    const fullName = `${capitalize(auth.wergonicUser?.first_name)} ${capitalize(auth.wergonicUser?.last_name)}`;
    const role = trasnlateUserRole(auth.wergonicUser?.role);
    const { onOpen, ...rest } = usePopover();
    const { handleLogout, logoutLoading } = useFirebaseLogout();
    const [settingsModalOpen, setSettingsModalOpen] = useState(false);

    const toggleSettingsModalOpen = () => {
        setSettingsModalOpen(!settingsModalOpen);
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
                <PopoverItem sx={popoverItemStyles} onClick={toggleSettingsModalOpen}>
                    <styles.StyledSettingsIcon2 />
                    <div className="text">{t("Settings")}</div>
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
