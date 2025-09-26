import { useState } from "react";
import { Row } from "react-table";

import { IconButton } from "@mui/material";

import {
    type HTMLDivProps,
    Modal,
    OrganizationIcon,
    Popover,
    PopoverItem,
    PowerIcon,
    SettingsIcon2,
    usePopover,
    useTranslationV2,
} from "ui";

import { TOrganization } from "@app-types/index";

import { ActivateOrganization } from "./ActivateOrganization";
import { EditOrganizationForm } from "./EditOrganizationForm";
import { popoverItemStyles } from "./inlineStyles";

type Props = HTMLDivProps & {
    row: Row<TOrganization>;
};

export const TableSettingsButton = ({ row, ...props }: Props) => {
    const t = useTranslationV2();
    const [editOrgModalOpen, setEditOrgModalOpen] = useState(false);
    const [activateOrgModalOpen, setActivateOrgModalOpen] = useState(false);
    const { onOpen, ...rest } = usePopover();

    const editOrgClickHandler = () => {
        rest.onClose();
        setEditOrgModalOpen(true);
    };

    const activateOrgClickHandler = () => {
        rest.onClose();
        setActivateOrgModalOpen(true);
    };

    return (
        <div {...props}>
            <IconButton className="icon-button" onClick={onOpen}>
                <SettingsIcon2 className="icon" />
            </IconButton>
            <Popover {...rest}>
                <PopoverItem className="border-bottom" sx={popoverItemStyles} onClick={editOrgClickHandler}>
                    <OrganizationIcon className="icon" />
                    <div className="text"> {t("edit_organization")} </div>
                </PopoverItem>
                <PopoverItem className="border-bottom" sx={popoverItemStyles} onClick={activateOrgClickHandler}>
                    <PowerIcon className="power-icon" />
                    <div className="text">
                        {row.original.is_active ? t("deactivate_organization") : t("activate_organization")}
                    </div>
                </PopoverItem>
            </Popover>
            <Modal open={editOrgModalOpen} onClose={() => setEditOrgModalOpen(false)}>
                <EditOrganizationForm row={row} setModalOpen={setEditOrgModalOpen} />
            </Modal>
            <Modal open={activateOrgModalOpen} onClose={() => setActivateOrgModalOpen(false)} hideCloseIcon>
                <ActivateOrganization row={row} setModalOpen={setActivateOrgModalOpen} />
            </Modal>
        </div>
    );
};
