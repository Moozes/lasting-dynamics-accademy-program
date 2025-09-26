import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { format, formatISO, parseISO } from "date-fns";

import { CircledCheckedFolderIcon, type HTMLDivProps, SmallColoredCircleIcon } from "ui";

import { useUpdateNotificationsMutation } from "@features/dashboard/queries";
import { INotification } from "@features/dashboard/types";

import { useNotificationTranslations } from "./NotificationItem.hooks";

type Props = HTMLDivProps & {
    notification: INotification;
    link: string;
    date: string;
    onClose: () => void;
};

export const NotificationItem = ({ notification, link, date, onClose, ...props }: Props) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutate: updateNotification } = useUpdateNotificationsMutation({
        notificationId: notification.id,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["notifications"],
            });
        },
        onError: () => {},
    });

    const translatedTitle = useNotificationTranslations(notification);

    const clickHandler = () => {
        updateNotification({ read_at: formatISO(new Date()) });
        onClose();
        if (link) {
            navigate(link);
        }
    };

    const formattedDate = format(parseISO(date), "iiii p");

    return (
        <div {...props} role="button" onClick={clickHandler}>
            <CircledCheckedFolderIcon className="circled-checked-folder-icon" />
            <div className="content">
                <div className="title">{translatedTitle}</div>
                <div className="link">{link}</div>
                <div className="date">{formattedDate}</div>
            </div>
            <SmallColoredCircleIcon className="small-colored-circle-icon" />
        </div>
    );
};
