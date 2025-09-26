import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog/Dialog";
import IconButton from "@mui/material/IconButton";

import { InfoCircleIcon } from "ui";

import { closeIconButtonStyle, contentBoxStyle, dialogBoxStyle, textAlignCenter, ulStyle } from "./inlineStyles";

type Props = DialogProps & { onClose: () => void } & { infoArray: string[] };

export const ComparisonInfoDialog = ({ onClose, infoArray, ...props }: Props) => {
    return (
        <Dialog fullWidth maxWidth="sm" onClose={onClose} {...props}>
            <Box sx={dialogBoxStyle}>
                <IconButton onClick={onClose} sx={closeIconButtonStyle}>
                    <CloseIcon />
                </IconButton>
                <Box sx={contentBoxStyle}>
                    <InfoCircleIcon />
                    <Box sx={textAlignCenter}>
                        <ul style={ulStyle}>
                            {infoArray.map((info) => (
                                <li key={info}>
                                    <Typography variant="body1">{info}</Typography>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    );
};
