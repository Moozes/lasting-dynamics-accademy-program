/* eslint-disable react/no-array-index-key */
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { AssessmentStatusEnum } from "@app-types/index";
import { useGetNotificationsQuery } from "@features/dashboard/queries";
import { INotification, NotificationTypeEnum } from "@features/dashboard/types";
import { SessionStatusEnum } from "@features/sessions";

import { NotificationItem } from "./NotificationItem";
import { NotificationsFooter } from "./NotificationsFooter";

type Props = HTMLDivProps & { onClose: () => void };

export const NotificationsList = ({ onClose, ...props }: Props) => {
    const t = useTranslationV2();
    const { data } = useGetNotificationsQuery();
    let notifications: INotification[] = [];
    if (data) notifications = data.data.results;

    const getNotificationLink = (notification: INotification): string => {
        let link = "";
        const { notification_type, foreign_key, metadata } = notification;

        if (notification_type === NotificationTypeEnum.SESSION) {
            if (metadata && metadata.status !== SessionStatusEnum.FAILED) {
                link = `/dashboard/sessions/${foreign_key}/details`;
            }
        } else if (notification_type === NotificationTypeEnum.RAMP_ASSESSMENT) {
            if (metadata && metadata.status !== AssessmentStatusEnum.FAILED) {
                link = `/dashboard/ramp-assessments/${foreign_key}/continue`;
            }
        } else if (notification_type === NotificationTypeEnum.MEC_ASSESSMENT) {
            if (metadata && metadata.status !== AssessmentStatusEnum.FAILED) {
                link = `/dashboard/mec-assessments/${foreign_key}/results`;
            }
        }

        return link;
    };

    return (
        <div {...props}>
            <div className="header">
                <div className="title"> {t("notifications")} </div>
                <IconButton className="icon-button" onClick={onClose}>
                    <ClearIcon className="icon" />
                </IconButton>
            </div>
            <div className="content">
                {notifications.length === 0 ? (
                    <div className="empty">{t("empty")}</div>
                ) : (
                    notifications.map((notification) => (
                        <NotificationItem
                            key={notification.id}
                            className="notification-item"
                            notification={notification}
                            date={notification.created_at}
                            link={getNotificationLink(notification)}
                            onClose={onClose}
                        />
                    ))
                )}
            </div>
            <NotificationsFooter />
        </div>
    );
};
