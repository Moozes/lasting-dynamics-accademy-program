import { ReactNode } from "react";

export interface BasicDialogProps {
    dialogOpen: boolean;
    toggleDialog: () => void;
    header?: string;
    leftSideAction?: ReactNode;
    rightSideAction?: ReactNode;
    showActions?: boolean;
}
