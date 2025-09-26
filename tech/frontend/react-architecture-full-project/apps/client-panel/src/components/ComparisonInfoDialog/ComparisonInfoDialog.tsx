import CloseIcon from "@mui/icons-material/Close";
import Dialog, { DialogProps } from "@mui/material/Dialog/Dialog";
import IconButton from "@mui/material/IconButton";

import { InfoCircleIcon } from "ui";

type Props = DialogProps & { onClose: () => void } & { infoArray: string[] };

export const ComparisonInfoDialog = ({ onClose, infoArray, ...props }: Props) => {
    return (
        <Dialog fullWidth maxWidth="sm" onClose={onClose} {...props}>
            <IconButton className="close-icon" onClick={() => onClose()}>
                <CloseIcon />
            </IconButton>
            <div className="content">
                <InfoCircleIcon className="icon" />
                <ul>
                    {infoArray.map((info) => (
                        <li key={info}>{info}</li>
                    ))}
                </ul>
            </div>
        </Dialog>
    );
};
