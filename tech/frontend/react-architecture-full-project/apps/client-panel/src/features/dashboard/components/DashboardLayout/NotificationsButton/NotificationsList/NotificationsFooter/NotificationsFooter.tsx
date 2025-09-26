import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import CircularProgress from "@mui/material/CircularProgress";

import { DoubleCheckMarksIcon, type HTMLDivProps, useTranslationV2 } from "ui";

import { useGetNotificationsQuery, useMarkNotificationsAsReadMutation } from "@features/dashboard/queries";
import { INotification } from "@features/dashboard/types";

type Props = HTMLDivProps;

export const NotificationsFooter = (props: Props) => {
    const t = useTranslationV2();
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    const { data } = useGetNotificationsQuery();
    let notifications: INotification[] = [];
    if (data) notifications = data.data.results;
    const notificationIds = notifications.map((elm) => elm.id);
    const { mutate: markAsRead, isLoading } = useMarkNotificationsAsReadMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["notifications"],
            });
            enqueueSnackbar(t("notifications_management.notifications_updated_succesfully"));
        },
        onError: () => {
            enqueueSnackbar(t("notifications_management.failed_to_update_notifications"));
        },
    });
    return notifications.length == 0 ? null : (
        <div {...props}>
            <div className="mark-as-read">
                {isLoading ? (
                    <CircularProgress className="loading" color="inherit" size="1.5em" />
                ) : (
                    <div className="btn" role="button" onClick={() => markAsRead(notificationIds)}>
                        <div className="icon">
                            <DoubleCheckMarksIcon />
                        </div>
                        <div className="text">{t("notifications_management.mark_all_as_read")}</div>
                    </div>
                )}
            </div>
        </div>
    );
};
