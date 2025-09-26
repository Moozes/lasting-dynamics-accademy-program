import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import { ListProps as MuiListProps } from "@mui/material/List";

export interface DrawerProps extends MuiDrawerProps {
    open: boolean;
}

export interface AppBarProps extends MuiAppBarProps {
    open: boolean;
}

export interface DrawerMenuProps extends MuiListProps {
    open: boolean;
}

interface Organization {
    organization_id: number;
    organization_name: string;
    role: string;
    is_active: boolean;
}

export interface UserOrganizationsResponse {
    count: number;
    num_pages: number;
    next: null | string; // Use string if the field can have URLs, otherwise just null if it's always null
    previous: null | string; // Same as above
    results: Organization[];
}

export interface IUseUpdateActiveOrganizationMutationParams {
    onSuccess?: (data: any) => void;
    onError?: (error: any) => void;
}

export enum NotificationTypeEnum {
    MEC_ASSESSMENT = "MEC_ASSESSMENT",
    RAMP_ASSESSMENT = "RAMP_ASSESSMENT",
    SESSION = "SESSION",
}

export type INotification = {
    id: number;
    recipient: number;
    foreign_key: number;
    title: string;
    message: string;
    created_at: string;
    read_at: string;
    notification_type: NotificationTypeEnum;
    organization: number;
    metadata?: Record<string, any>;
};

export type IGetNotifications = {
    count: number;
    next: string;
    previous: string;
    results: INotification[];
};

export type TNotificationStatus = "COMPLETED" | "FAILED";

export type TNotificationTranslations = {
    [key in NotificationTypeEnum | "DEFAULT"]: {
        [status in TNotificationStatus]: string;
    };
};
