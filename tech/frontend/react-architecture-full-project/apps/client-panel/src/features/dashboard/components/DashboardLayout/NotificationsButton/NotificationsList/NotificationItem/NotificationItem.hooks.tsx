import { useTranslation } from "react-i18next";

import {
    INotification,
    NotificationTypeEnum,
    TNotificationStatus,
    TNotificationTranslations,
} from "@features/dashboard/types";

export const useNotificationTranslations = (notification: INotification) => {
    const { t } = useTranslation();
    const { notification_type, metadata } = notification;
    const status: TNotificationStatus = metadata?.status || "COMPLETED";

    const translations: TNotificationTranslations = {
        [NotificationTypeEnum.SESSION]: {
            COMPLETED: t("notifications_management.SESSION.COMPLETED"),
            FAILED: t("notifications_management.SESSION.FAILED"),
        },
        [NotificationTypeEnum.MEC_ASSESSMENT]: {
            COMPLETED: t("notifications_management.MEC_ASSESSMENT.COMPLETED"),
            FAILED: t("notifications_management.MEC_ASSESSMENT.FAILED"),
        },
        [NotificationTypeEnum.RAMP_ASSESSMENT]: {
            COMPLETED: t("notifications_management.RAMP_ASSESSMENT.COMPLETED"),
            FAILED: t("notifications_management.RAMP_ASSESSMENT.FAILED"),
        },
        DEFAULT: {
            COMPLETED: t("notifications_management.DEFAULT.COMPLETED"),
            FAILED: t("notifications_management.DEFAULT.FAILED"),
        },
    };

    // Return the translation, falling back to DEFAULT if needed
    return (
        translations[notification_type as NotificationTypeEnum]?.[status] ||
        translations.DEFAULT[status] ||
        "Translation error"
    );
};
