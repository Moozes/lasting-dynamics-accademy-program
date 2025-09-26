import { useState } from "react";
import { Row } from "react-table";

import { IconButton } from "@mui/material";

import {
    DeleteTrashIcon,
    type HTMLDivProps,
    Modal,
    PencilIcon2,
    Popover,
    PopoverItem,
    SettingsIcon2,
    usePopover,
    useTranslationV2,
} from "ui";

import { TTask } from "@app-types/index";

import { DeleteTaskForm } from "./DeleteTaskForm";
import { EditTaskForm } from "./EditTaskForm";
import { popoverItemStyles } from "./inlineStyles";

type Props = HTMLDivProps & {
    row: Row<TTask>;
};

export const TableSettingsButton = ({ row, ...props }: Props) => {
    const t = useTranslationV2();
    const [editTaskModalOpen, setEditTaskModalOpen] = useState(false);
    const [deleteTaskModalOpen, setDeleteTaskModalOpen] = useState(false);
    const { onOpen, ...rest } = usePopover();

    const editTaskClickHandler = () => {
        rest.onClose();
        setEditTaskModalOpen(true);
    };

    const deleteTaskClickHandler = () => {
        rest.onClose();
        setDeleteTaskModalOpen(true);
    };

    return (
        <div {...props}>
            <IconButton className="icon-button" onClick={onOpen}>
                <SettingsIcon2 className="icon" />
            </IconButton>
            <Popover {...rest}>
                <PopoverItem className="border-bottom" sx={popoverItemStyles} onClick={editTaskClickHandler}>
                    <div className="icon">
                        <PencilIcon2 />
                    </div>
                    <div className="text"> {t("workcycles.edit_task")} </div>
                </PopoverItem>
                <PopoverItem className="border-bottom" sx={popoverItemStyles} onClick={deleteTaskClickHandler}>
                    <div className="icon">
                        <DeleteTrashIcon />
                    </div>
                    <div className="text"> {t("workcycles.delete_task")} </div>
                </PopoverItem>
            </Popover>

            <Modal open={editTaskModalOpen} onClose={() => setEditTaskModalOpen(false)}>
                <EditTaskForm row={row} setModalOpen={setEditTaskModalOpen} />
            </Modal>

            <Modal open={deleteTaskModalOpen} onClose={() => setDeleteTaskModalOpen(false)}>
                <DeleteTaskForm row={row} setModalOpen={setDeleteTaskModalOpen} />
            </Modal>
        </div>
    );
};
