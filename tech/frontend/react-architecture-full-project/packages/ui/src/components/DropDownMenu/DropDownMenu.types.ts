import { ReactNode } from "react";

import { PopoverProps, PopperProps } from "@mui/material";

export interface IDropDownItem {
    text: string; // this can also serve as id  or key
    value?: unknown;
    icon?: ReactNode;
    disabled?: boolean;
    selected?: boolean;
    secondaryAction?: ReactNode;
}

type CommonOmitedKeys = "open" | "anchorEl" | "onClose";

interface PassedDownPropsFromDropDownToItemsList {
    // eslint-disable-next-line no-unused-vars
    onItemClick?: (item: IDropDownItem) => void;
    header?: string;
    items?: IDropDownItem[];
    initialSelecteditem?: string;
}

interface CommonDropDownMenuProps extends PassedDownPropsFromDropDownToItemsList {
    children?: ReactNode;
    open: boolean;
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

interface PopoverDropDownMenuProps extends CommonDropDownMenuProps {
    type?: "popover";
    PopElementProps?: Omit<PopoverProps, CommonOmitedKeys>;
}

interface PopperDropDownMenuProps extends CommonDropDownMenuProps {
    type?: "popper";
    PopElementProps?: Omit<PopperProps, CommonOmitedKeys>;
}
export type DropDownMenuProps = PopoverDropDownMenuProps | PopperDropDownMenuProps;

export interface DropDownMenuItemsProps extends PassedDownPropsFromDropDownToItemsList {}
