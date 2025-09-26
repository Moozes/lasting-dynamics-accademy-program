import { useState } from "react";

import { IconButton } from "@mui/material";

import {
    type HTMLDivProps,
    Modal,
    Popover,
    PopoverItem,
    ResetLockIcon,
    SettingsIcon2,
    usePopover,
    useTranslationV2,
} from "ui";

import { popoverItemStyles } from "./inlineStyles";
import { ResetPasswordForm } from "./ResetPasswordForm";

type Props = HTMLDivProps & {
    email: string;
};

export const TableSettingsButton = ({ email, ...props }: Props) => {
    const t = useTranslationV2();
    const [resetPasswordModalOpen, setResetPasswordModalOpen] = useState(false);
    const { onOpen, ...rest } = usePopover();

    const resetPasswordClickHandler = () => {
        rest.onClose();
        setResetPasswordModalOpen(true);
    };

    return (
        <div {...props}>
            <IconButton className="icon-button" onClick={onOpen}>
                <SettingsIcon2 className="icon" />
            </IconButton>
            <Popover {...rest}>
                <PopoverItem className="border-bottom" sx={popoverItemStyles} onClick={resetPasswordClickHandler}>
                    <ResetLockIcon className="icon" />
                    <div className="text"> {t("reset_password")} </div>
                </PopoverItem>
            </Popover>
            <Modal open={resetPasswordModalOpen} onClose={() => setResetPasswordModalOpen(false)} hideCloseIcon>
                <ResetPasswordForm setModalOpen={setResetPasswordModalOpen} email={email} />
            </Modal>
        </div>
    );
};
