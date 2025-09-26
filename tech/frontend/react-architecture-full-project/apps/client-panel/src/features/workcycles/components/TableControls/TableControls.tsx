import { IconButton } from "@mui/material";

import {
    DeleteTrashIcon,
    EditIcon2,
    type HTMLDivProps,
    PlusIcon2,
    Popover,
    PopoverItem,
    URLSearchInput,
    usePopover,
} from "ui";

import { URLFactoryFilter } from "@components/URLFactoryFilter";
import { URLLineFilter } from "@components/URLLineFilter";

import { AddFactory } from "./FactoryMangement/AddFactory";
import { DeleteFactory } from "./FactoryMangement/DeleteFactory";
import { EditFactory } from "./FactoryMangement/EditFactory";
import { AddLine } from "./LineManagement/AddLine";
import { DeleteLine } from "./LineManagement/DeleteLine";
import { EditLine } from "./LineManagement/EditLine";
import { AddTask } from "./TaskManagement/AddTask";
import { AddModel } from "./TaskModelManagement/AddModel";
import { DeleteTaskModel } from "./TaskModelManagement/DeleteTaskModel";
import { EditTaskModel } from "./TaskModelManagement/EditTaskModel";
import { ImportData } from "./ImportData";
import { AddWorkstation, DeleteWorkstation, EditWorkstation } from "./WorkstationManagement";

type Props = HTMLDivProps;

export const TableControls = ({ ...props }: Props) => {
    const { onOpen: onPlusOpen, ...plusPopover } = usePopover();
    const { onOpen: onEditOpen, ...editPopover } = usePopover();
    const { onOpen: onDeleteOpen, ...deletePopover } = usePopover();

    return (
        <div {...props}>
            <div className="inputs">
                <URLSearchInput className="search-input" />
                <URLFactoryFilter />
                <URLLineFilter />
            </div>
            <div className="buttons">
                <ImportData />

                <div className="popover-group">
                    <IconButton className="icon-button" onClick={onEditOpen}>
                        <EditIcon2 className="icon" />
                    </IconButton>
                    <Popover {...editPopover}>
                        <PopoverItem>
                            <EditFactory />
                        </PopoverItem>
                        <PopoverItem>
                            <EditLine />
                        </PopoverItem>
                        <PopoverItem>
                            <EditWorkstation />
                        </PopoverItem>
                        <PopoverItem>
                            <EditTaskModel />
                        </PopoverItem>
                    </Popover>
                </div>

                <div className="popover-group">
                    <IconButton className="icon-button" onClick={onDeleteOpen}>
                        <DeleteTrashIcon className="icon" />
                    </IconButton>
                    <Popover {...deletePopover}>
                        <PopoverItem>
                            <DeleteFactory />
                        </PopoverItem>
                        <PopoverItem>
                            <DeleteLine />
                        </PopoverItem>
                        <PopoverItem>
                            <DeleteWorkstation />
                        </PopoverItem>
                        <PopoverItem>
                            <DeleteTaskModel />
                        </PopoverItem>
                    </Popover>
                </div>

                <div className="popover-group">
                    <IconButton className="icon-button" onClick={onPlusOpen}>
                        <PlusIcon2 className="icon" />
                    </IconButton>
                    <Popover {...plusPopover}>
                        <PopoverItem>
                            <AddFactory />
                        </PopoverItem>
                        <PopoverItem>
                            <AddLine />
                        </PopoverItem>
                        <PopoverItem>
                            <AddWorkstation />
                        </PopoverItem>
                        <PopoverItem>
                            <AddModel />
                        </PopoverItem>
                        <PopoverItem>
                            <AddTask />
                        </PopoverItem>
                    </Popover>
                </div>
            </div>
        </div>
    );
};
