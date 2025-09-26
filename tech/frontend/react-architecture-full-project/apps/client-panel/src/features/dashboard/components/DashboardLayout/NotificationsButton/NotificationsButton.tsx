import { useEffect, useState } from "react";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Popper from "@mui/material/Popper";

import type { HTMLDivProps } from "ui";

import { useGetNotificationsQuery } from "@features/dashboard/queries";

import { popperStyles } from "./inlineStyles";
import { usePopper, useSubscribeToNotifications } from "./NotificationsButton.hooks";
import { NotificationsList } from "./NotificationsList";

type Props = HTMLDivProps;

export const NotificationsButton = (props: Props) => {
    useSubscribeToNotifications();
    const [showBadge, setShowBadge] = useState(false);
    const { anchorEl, handleClick, onClose, open } = usePopper();
    const { data } = useGetNotificationsQuery();
    useEffect(() => {
        if (data && data.data.results.length !== 0) setShowBadge(true);
        else setShowBadge(false);
    }, [data]);
    return (
        <div {...props}>
            <IconButton className="icon-button" onClick={handleClick}>
                <Badge color="primary" className="badge" badgeContent=" " variant="dot" invisible={!showBadge}>
                    <NotificationsNoneIcon className="notification-icon" />
                </Badge>
            </IconButton>
            <Popper sx={popperStyles} open={open} anchorEl={anchorEl} placement="bottom-end">
                <NotificationsList onClose={onClose} />
            </Popper>
        </div>
    );
};
