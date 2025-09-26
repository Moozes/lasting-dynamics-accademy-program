import { ReactNode } from "react";

export interface AlertDialogProps {
    dialogOpen: boolean;
    toggleDialog: () => void;
    dialogIcon?: ReactNode;
    primaryText: string;
    secondaryText: ReactNode;
    rightSideAction?: ReactNode;
    showCancelButton?: boolean;
}
