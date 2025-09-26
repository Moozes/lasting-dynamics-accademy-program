import { ReactNode } from "react";

export interface FormDialogProps {
    dialogOpen: boolean;
    toggleDialog: () => void;
    header: string;
    onSubmit: (values: any) => void;
    initialValues: any;
    validationSchema?: any;
    leftSideAction?: ReactNode;
    rightSideAction?: ReactNode;
    secondRightSideAction?: ReactNode;
    validate?: any;
}
