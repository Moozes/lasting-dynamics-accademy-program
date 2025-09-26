import CloseIcon from "@mui/icons-material/Close";
import Dialog, { DialogProps } from "@mui/material/Dialog/Dialog";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

type Props = DialogProps & { text: string; illustration?: JSX.Element; onClose: () => void };

export const InformationDialog = ({ onClose, text, illustration, ...props }: Props) => {
    return (
        <Dialog fullWidth maxWidth="lg" onClose={onClose} {...props}>
            <IconButton className="close-icon" onClick={() => onClose()}>
                <CloseIcon />
            </IconButton>
            <div className="content">
                <Typography className="title" variant="h6">
                    {text}
                </Typography>
                {illustration}
            </div>
        </Dialog>
    );
};
