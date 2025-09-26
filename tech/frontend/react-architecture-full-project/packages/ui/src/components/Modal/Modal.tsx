import { MouseEventHandler } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import { IconButton, Modal as MuiModal, ModalProps } from "@mui/material";

type Props = ModalProps & {
    hideCloseIcon?: boolean;
};

// this component represents a reusable modal
// it gives basic styling for the paper component
//      (background color, box shadow, border radius, max with and max height, and handles y axis scroll)
//      paper width and height are determined by children
// it comes with a "x" button to close dialog, shown by default and can be hiden with hideCloseIcon
export const Modal = ({ children, hideCloseIcon, ...props }: Props) => {
    const handleClearIconClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        if (props.onClose) props.onClose(event, "backdropClick");
    };
    return (
        <MuiModal {...props}>
            <div className="paper">
                {!hideCloseIcon && (
                    <IconButton className="icon-button" onClick={handleClearIconClick}>
                        <ClearIcon className="clear-icon" />
                    </IconButton>
                )}
                {children}
            </div>
        </MuiModal>
    );
};
