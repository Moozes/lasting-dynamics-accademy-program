import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";

import type { HTMLDivProps } from "ui";

import { IEvent } from "@app-types/index";

import { EventActions } from "../EventActions";
import { popoverProps } from "../inlineStyles";
import { usePopover } from "../WorkerCell.hooks";

import { StyledDiv } from "./StyledDiv";

type Props = HTMLDivProps & {
    events: IEvent[];
};

export const HiddenEvents = ({ events, ...props }: Props) => {
    const { handleClick, handleClose, open, anchorEl } = usePopover();
    return (
        <div {...props}>
            <IconButton className="icon-button" onClick={handleClick}>
                +{events.length}
            </IconButton>
            <Popover open={open} anchorEl={anchorEl} onClose={handleClose} {...popoverProps}>
                <StyledDiv>
                    {events.map((event, index) => (
                        <EventActions className={`event _${index % 4}`} key={event.id} event={event} />
                    ))}
                </StyledDiv>
            </Popover>
        </div>
    );
};
