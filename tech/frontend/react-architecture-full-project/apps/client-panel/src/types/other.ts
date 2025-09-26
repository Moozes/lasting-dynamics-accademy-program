import { Dispatch, SetStateAction } from "react";
import { Row } from "react-table";

import { AnyObjectWithId } from "ui";

export type PDFDownloadLinkContainerProps = {
    PDFTemplate: JSX.Element;
    PDFName: string;
    DownloadButton: JSX.Element;
    DownloadButtonDisabled: JSX.Element;
};

export type IuseComparison = {
    clickHandler: () => void;
    showInfoDialog: boolean;
    setShowInfoDialog: Dispatch<SetStateAction<boolean>>;
    comparisonInfoArray: string[];
};

export interface ICompareButtonProps {
    comparisonHook: IuseComparison;
}

export interface ISelectedRowsProp {
    selectedRows: Row<AnyObjectWithId>[];
    setSelectedRows: Dispatch<SetStateAction<Row<AnyObjectWithId>[]>>;
}

export type ISubNavbarLinkProps = {
    text: string;
    to: string;
    className: string;
};

export type ISubNavbarProps = {
    links: ISubNavbarLinkProps[];
    keepSearchParams?: boolean;
};

export enum CompletedNonCompletedClassnamesEnum {
    completedClassName = "completed",
    nonCompletedClassName = "non-completed",
}

export type FieldNameFilledStatusArray = { fieldName: string; filled: boolean }[];

export type IHandleMenuClose = {
    handleMenuClose: () => void;
};

export enum BatteryLevelEnum {
    OK = "Ok",
    LOW = "Low",
    BATTERY_OK = "Battery OK",
    BATTERY_LOW = "Battery LOW",
}
