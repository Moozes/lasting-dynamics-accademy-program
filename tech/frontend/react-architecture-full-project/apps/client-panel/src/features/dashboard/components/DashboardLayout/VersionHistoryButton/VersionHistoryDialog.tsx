/* eslint-disable react/no-array-index-key */
import CloseIcon from "@mui/icons-material/Close";
import Dialog, { DialogProps } from "@mui/material/Dialog/Dialog";
import IconButton from "@mui/material/IconButton";

import { VERSION_HISTORY } from "./versionHistory";

type Props = DialogProps & { onClose: () => void };

export const VersionHistoryDialog = ({ onClose, ...props }: Props) => {
    return (
        <Dialog fullWidth onClose={onClose} {...props}>
            <IconButton className="close-icon" onClick={() => onClose()}>
                <CloseIcon />
            </IconButton>
            <div className="content">
                {VERSION_HISTORY.slice(0)
                    .reverse()
                    .map((version, versionIdx) => (
                        <div key={versionIdx} className="version-container">
                            <div className="version-date-container">
                                <div className="version">
                                    V{version.version} {versionIdx === 0 && `: latest`}
                                </div>
                                <div className="date">{version.date}</div>
                            </div>
                            <ul className="updates">
                                {version.updates.map((update, updateIdx) => (
                                    <li key={updateIdx} className="update">
                                        {update}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </Dialog>
    );
};
