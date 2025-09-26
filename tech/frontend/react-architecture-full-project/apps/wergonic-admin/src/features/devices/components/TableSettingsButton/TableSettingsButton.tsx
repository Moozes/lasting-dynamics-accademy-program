import { useState } from "react";

import { IconButton } from "@mui/material";

import { type HTMLDivProps, Modal, Popover, PopoverItem, SettingsIcon2, usePopover, useTranslationV2 } from "ui";

import { popoverItemStyles } from "./inlineStyles";
import { LinkedSensors } from "./LinkedSensors";

type Props = HTMLDivProps & {
    deviceId: string;
};

export const TableSettingsButton = ({ deviceId, ...props }: Props) => {
    const t = useTranslationV2();
    const [linkedSensorsModalOpen, setLinkedSensorsModalOpen] = useState(false);
    const { onOpen, ...rest } = usePopover();

    const linkedSensorsClickHandler = () => {
        rest.onClose();
        setLinkedSensorsModalOpen(true);
    };

    return (
        <div {...props}>
            <IconButton className="icon-button" onClick={onOpen}>
                <SettingsIcon2 className="icon" />
            </IconButton>
            <Popover {...rest}>
                <PopoverItem className="border-bottom" sx={popoverItemStyles} onClick={linkedSensorsClickHandler}>
                    <div className="text"> {t("devices_management.linked_sensors")} </div>
                </PopoverItem>
            </Popover>
            <Modal open={linkedSensorsModalOpen} onClose={() => setLinkedSensorsModalOpen(false)}>
                <LinkedSensors deviceId={deviceId} />
            </Modal>
        </div>
    );
};
