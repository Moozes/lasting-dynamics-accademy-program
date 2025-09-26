import CloseIcon from "@mui/icons-material/Close";
import Dialog, { DialogProps } from "@mui/material/Dialog/Dialog";
import IconButton from "@mui/material/IconButton";

type Props = DialogProps & { onClose: () => void };

export const DialogWithCloseIcon = ({ onClose, children, ...props }: Props) => {
    return (
        <Dialog fullWidth maxWidth="lg" onClose={onClose} {...props}>
            <IconButton className="close-icon" onClick={() => onClose()}>
                <CloseIcon />
            </IconButton>
            <div className="content">{children}</div>
        </Dialog>
    );
};
