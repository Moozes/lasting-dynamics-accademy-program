/* eslint-disable no-unused-vars */
import { CSSProperties, ReactNode, SyntheticEvent } from "react";

import { TabProps as MuiTabProps, TabsProps as MuiTabsProps } from "@mui/material";

export interface TabPanelProps {
    children?: React.ReactNode;
    id: string;
    value: string;
}

export interface CustomTabsProps {
    variant?: "full-width" | "inline";
    height?: CSSProperties["height"];
    width?: CSSProperties["width"];
    TabsProps?: Omit<MuiTabsProps, "value" | "sx" | "onChange">;
    items: TabItem[];
    children?: ReactNode;
    onChangeHandler: (event: SyntheticEvent, newValue: string) => void;
    selectedTab: string;
    onClickhandler?: (item: TabItem) => void;
}

export interface TabItem {
    label: string;
    disabled?: boolean;
    icon?: MuiTabProps["icon"];
    iconPosition?: MuiTabProps["iconPosition"];
    TabProps?: Omit<MuiTabProps, "label" | "disabled" | "icon" | "iconPosition">;
    tabContent?: ReactNode;
}
