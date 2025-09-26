import MuiClearIcon from "@mui/icons-material/Clear";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CircularProgress, IconButton, Popover } from "@mui/material";

import { DeleteTrashIcon, HourGlassIcon, type HTMLDivProps, useTranslationV2 } from "ui";

import { IEvent, IUpdateEvent } from "@app-types/index";

import { AssignTime } from "./AssignTime";
import { useAssignTimeState, useDeleteEvent, usePopovers, useUpdateEvent } from "./EventActions.hooks";
import { IntervalTypeEnum } from "./EventActions.type";
import { popoverProps, popoverProps2 } from "./inlineStyles";
import { StyledDiv } from "./StyledDiv";

type Props = HTMLDivProps & {
    event: IEvent;
};

export const EventActions = ({ event, ...props }: Props) => {
    const t = useTranslationV2();
    const { deleteEvent, isDeleteEventLoading } = useDeleteEvent();
    const { updateEvent, isUpdateEventLoading } = useUpdateEvent();
    const { elmRef, elmRef2, handleClick, handleClose, open, anchorEl, handleClick2, handleClose2, open2, anchorEl2 } =
        usePopovers();
    const assignTimeState = useAssignTimeState();
    const onRemove = () => {
        deleteEvent(event.id);
        handleClose();
    };
    const onAssignTimePopoverClose = () => {
        const updateObject: IUpdateEvent = { id: event.id };
        if (assignTimeState.timeFrame === IntervalTypeEnum.whole) {
            updateObject.whole_session = true;
            updateEvent(updateObject);
        } else if (
            assignTimeState.timeFrame === IntervalTypeEnum.specific &&
            assignTimeState.startTime &&
            assignTimeState.endTime
        ) {
            updateObject.start_time = assignTimeState.startTime;
            updateObject.end_time = assignTimeState.endTime;
            updateEvent(updateObject);
        }
        handleClose2();
    };
    let label = "";
    if (event.labels.length > 0) {
        label = event.labels[0].label_name;
    }
    return (
        <div {...props}>
            {/* hide text if popover1 is open */}
            <div className={`text ${open ? "hide" : ""}`}>{label}</div>
            <IconButton
                component="div"
                ref={elmRef}
                // keep button visible if popover1 is open
                className={`icon-button ${open ? "show" : ""}`}
                onClick={handleClick}
            >
                <MoreHorizIcon className="menu-icon" />
            </IconButton>
            <IconButton
                disabled={isDeleteEventLoading}
                className={`icon-button ${open ? "show" : ""}`}
                onClick={() => deleteEvent(event.id)}
            >
                <MuiClearIcon className="clear-icon" />
            </IconButton>
            {(isDeleteEventLoading || isUpdateEventLoading) && (
                <CircularProgress className="circular-progress" size={10} />
            )}
            <Popover open={open} anchorEl={anchorEl} onClose={handleClose} {...popoverProps}>
                <StyledDiv>
                    <div className="item delete" role="button" onClick={onRemove}>
                        <DeleteTrashIcon className="icon" />
                        <div className="text">{t("remove")}</div>
                    </div>
                    <div ref={elmRef2} className="item" role="button" onClick={handleClick2}>
                        <HourGlassIcon className="icon" />
                        <div className="text">{t("assign_a_time")}</div>
                        {isUpdateEventLoading && <CircularProgress className="circular-progress" size={10} />}
                    </div>
                </StyledDiv>
            </Popover>
            <Popover open={open2} anchorEl={anchorEl2} onClose={onAssignTimePopoverClose} {...popoverProps2}>
                <AssignTime {...assignTimeState} />
            </Popover>
        </div>
    );
};
